blockly-mh-ino
=======================

O **blockly-mh-ino** é um editor de códigos gráfico (blocos) para a plataforma [Arduino](http://www.arduino.cc/) e para os kits e produtos do [Makerhub](http://makerhub.com.br/).

Este projeto é baseado no [BlocklyDuino](https://github.com/BlocklyDuino/BlocklyDuino/), que por sua vez foi baseado no [Blockly](https://developers.google.com/blockly/).

[![blockly-mh-ino](https://github.com/MakerHubBR/blockly-mh-ino/raw/master/blockly/apps/blocklymhino/blockly-mh-ino-preview.png)](http://makerhub.com.br/blockly-mh-ino/blockly/apps/blocklymhino/)

## Características
* Programação do Arduino visualmente, arrastando e soltando blocos
* Gera código fonte totalmente compatível com o Arduino
* Blocos especiais para o [Kit mh001](https://github.com/MakerHubBR/mh001) e outros produtos do MakerHub que estão por vir
* Alguns exemplos já prontos

## Como utilizar
* Baixe este arquivo [zip](https://github.com/MakerHubBR/blockly-mh-ino/archive/master.zip) **(se usar o editor online e o upload manual, não é necessário).**
* Você pode abrir o editor de duas formas:
  * **Online:** acessar este [site](http://makerhub.com.br/blockly-mh-ino/blockly/apps/blocklymhino/)
  * **Offline:** na pasta que baixou o *'blockly-mh-ino'*, abrir o arquivo `blockly/apps/blocklymhino/index.html` no seu browser
* Arrastar e soltar os blocos para fazer seu código
* Para realizar o upload do código para o Arduino também temos dois jeitos:
  * **Manual:** selecionar a aba 'Arduino', copiar todo o código e colar na Arduino IDE para fazer o upload
  * **Automático:** apertar o botão 'Upload'. *Para que funcione, você antes precisa iniciar um webserver como é mostrado na seção abaixo.*

## Upload automático para o Arduino
* Na pasta do *'blockly-mh-ino'*, execute o comando: `python arduino_web_server.py`
* Você pode opcionalmente especificar a porta adicionando `--port=COM3` (ou `--port=/dev/ttyACM0` no Linux e Mac); se não fizer, o script vai tentar identificar automaticamente.

## Erros, bugs, features requests?
* O projeto encontra-se em fase beta. Reporte erros e bugs ou solicite novos recursos pela [aba 'issues'](https://github.com/MakerHubBR/blockly-mh-ino/issues).

## Licença

Copyright (C) 2017 Kleber Lima da Silva (@krebyy) - kleber@makerhub.com.br

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0


### Este trabalho foi originado de [BlocklyDuino](https://github.com/BlocklyDuino/BlocklyDuino/)
