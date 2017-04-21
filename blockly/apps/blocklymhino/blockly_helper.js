/**
 * Backup code blocks to localStorage.
 */
function backup_blocks() {
  if ('localStorage' in window) {
    var xml = Blockly.Xml.workspaceToDom(Code.workspace);
    window.localStorage.setItem('arduino', Blockly.Xml.domToText(xml));
  }
}

/**
 * Restore code blocks from localStorage.
 */
function restore_blocks() {
  if ('localStorage' in window && window.localStorage.arduino) {
    var xml = Blockly.Xml.textToDom(window.localStorage.arduino);
    Blockly.Xml.domToWorkspace(Code.workspace, xml);
  }

  // Load 'setup' and 'loop' blocks
  if (Code.workspace.getAllBlocks().length == 0) {
    Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), Code.workspace);
  }
}

/**
* Save Arduino generated code to local file.
*/
function saveCode() {
  var fileName = window.prompt('Nome do arquivo (.ino):', 'blockly-mh')
  //doesn't save if the user quits the save prompt
  if(fileName){
    var blob = new Blob([Blockly.Arduino.workspaceToCode()], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, fileName + '.ino');
  }
}

/**
 * Save blocks to local file.
 * better include Blob and FileSaver for browser compatibility
 */
function save() {
  var xml = Blockly.Xml.workspaceToDom(Code.workspace);
  var data = Blockly.Xml.domToText(xml);
  var fileName = window.prompt('Nome do arquivo:', 'blockly-mh');
  // Store data in blob.
  // var builder = new BlobBuilder();
  // builder.append(data);
  // saveAs(builder.getBlob('text/plain;charset=utf-8'), 'blockduino.xml');
  if(fileName){
    var blob = new Blob([data], {type: 'text/xml'});
    saveAs(blob, fileName + ".xml");
  }
}

/**
 * Load blocks from local file.
 */
function load(event) {
  var files = event.target.files;
  // Only allow uploading one file.
  if (files.length != 1) {
    return;
  }

  // FileReader
  var reader = new FileReader();
  reader.onloadend = function(event) {
    var target = event.target;
    // 2 == FileReader.DONE
    if (target.readyState == 2) {
      try {
        var xml = Blockly.Xml.textToDom(target.result);
      } catch (e) {
        alert('Erro ao ler o XML:\n' + e);
        return;
      }
      var count = Code.workspace.getAllBlocks().length;
      if (count && confirm('Substituir os blocos existentes?\n"Cancelar" manterá os blocos existentes.')) {
        Code.workspace.clear();
      }
      Blockly.Xml.domToWorkspace(Code.workspace, xml);
    }
    // Reset value of input after loading because Chrome will not fire
    // a 'change' event if the same file is loaded again.
    document.getElementById('load').value = '';
  };
  reader.readAsText(files[0]);
}

/**
 * Discard all blocks from the workspace.
 */
function discard() {
  var count = Code.workspace.getAllBlocks().length;
  if (count < 2 || window.confirm('Deletar todos os ' + count + ' blocos?')) {
    Code.workspace.clear();
    Code.renderContent();
  }
}

/*
 * auto save and restore blocks
 */
function auto_save_and_restore_blocks() {
  // Restore saved blocks in a separate thread so that subsequent
  // initialization is not affected from a failed load.
  window.setTimeout(restore_blocks, 0);
  // Hook a save function onto unload.
  bindEvent(window, 'unload', backup_blocks);
  Code.tabClick(Code.selected);

  // Init load event.
  var loadInput = document.getElementById('load');
  loadInput.addEventListener('change', load, false);
  document.getElementById('fakeload').onclick = function() {
    loadInput.click();
  };
}

/**
 * Bind an event to a function call.
 * @param {!Element} element Element upon which to listen.
 * @param {string} name Event name to listen to (e.g. 'mousedown').
 * @param {!Function} func Function to call when event is triggered.
 *     W3 browsers will call the function with the event object as a parameter,
 *     MSIE will not.
 */
function bindEvent(element, name, func) {
  if (element.addEventListener) {  // W3C
    element.addEventListener(name, func, false);
  } else if (element.attachEvent) {  // IE
    element.attachEvent('on' + name, func);
  }
}

//loading examples via ajax
var ajax;
function createAJAX() {
  if (window.ActiveXObject) { //IE
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e2) {
        return null;
      }
    }
  } else if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else {
    return null;
  }
}

function onSuccess() {
  if (ajax.readyState == 4) {
    if (ajax.status == 200) {
      try {
      var xml = Blockly.Xml.textToDom(ajax.responseText);
      } catch (e) {
        alert('Erro ao ler o XML:\n' + e);
        return;
      }
      var count = Code.workspace.getAllBlocks().length;
      if (count && confirm('Substituir os blocos existentes?\n"Cancelar" manterá os blocos existentes.')) {
        Code.workspace.clear();
      }
      Blockly.Xml.domToWorkspace(Code.workspace, xml);
    } else {
      alert("Erro do servidor");
    }
  }
}

function load_by_url(uri) {
  ajax = createAJAX();
  if (!ajax) {
　　   alert ('Não compatível com XMLHttpRequest');
　　   return 0;
　  }
  if (ajax.overrideMimeType) {
    ajax.overrideMimeType('text/xml');
  }

　　ajax.onreadystatechange = onSuccess;
　　ajax.open ("GET", uri, true);
　　ajax.send ("");
}

function uploadCode(code, callback) {
    var target = document.getElementById('content_arduino');
    var spinner = new Spinner().spin(target);

    var url = "http://127.0.0.1:8080/";
    var method = "POST";

    // You REALLY want async = true.
    // Otherwise, it'll block ALL execution waiting for server response.
    var async = true;

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState != 4) {
            return;
        }

        spinner.stop();

        var status = parseInt(request.status); // HTTP response status, e.g., 200 for "200 OK"
        var errorInfo = null;
        switch (status) {
        case 200:
            break;
        case 0:
            errorInfo = "código 0\n\nNão foi possível conectar ao servidor " + url + ".  O servidor web local está em execução?\n * Lembre-se de executar o comando: python arduino_web_server.py";
            break;
        case 400:
            errorInfo = "código 400\n\nFalha na compilação - provavelmente devido a código-fonte inválido.  Certifique-se de que não há conexões ausentes nos blocos.";
            break;
        case 500:
            errorInfo = "código 500\n\nFalha no upload.  O Arduino está conectado à porta USB?";
            break;
        case 501:
            errorInfo = "código 501\n\nFalha no upload.  O 'arduino' está no seu 'path'?";
            break;
        default:
            errorInfo = "código " + status + "\n\nErro desconhecido.";
            break;
        };

        callback(status, errorInfo);
    };

    request.open(method, url, async);
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    request.send(code);
}

function uploadClick() {
    var code = Blockly.Arduino.workspaceToCode();

    alert("Pronto para enviar ao Arduino.");

    uploadCode(code, function(status, errorInfo) {
        if (status == 200) {
            alert("Programa enviado OK!");
        } else {
            alert("Erro ao enviar o programa: " + errorInfo);
        }
    });
}

function resetClick() {
    var code = "void setup() {} void loop() {}";

    uploadCode(code, function(status, errorInfo) {
        if (status != 200) {
            alert("Erro ao resetar o programa: " + errorInfo);
        }
    });
}
