// Credit: http://www.arduinoblocks.com

'use strict';

goog.provide('Blockly.Arduino.serial');
goog.require('Blockly.Arduino');

function setupSerial(){

  //default baudrate
  if(!Blockly.Arduino.setups_['setup_serial']){
	  Blockly.Arduino.setups_['setup_serial'] = 	'Serial.begin(9600);\n';
  }
}

Blockly.Arduino.serial_init= function() {

	//var baud=Blockly.Arduino.valueToCode(this, 'BAUD', Blockly.Arduino.ORDER_ATOMIC) || '9600';
	var baud = this.getFieldValue('BAUD');

  	Blockly.Arduino.setups_['setup_serial'] = 	'Serial.begin('+baud+');\n';

  	var code = '';
	return code;
};

Blockly.Arduino.serial_timeout= function() {

	setupSerial();

  var value_ms = Blockly.Arduino.valueToCode(this, "MS", Blockly.Arduino.ORDER_ATOMIC);

  var code = 'Serial.setTimeout('+value_ms+');\n';
  return code;
}

Blockly.Arduino.serial_print= function() {

  setupSerial();

  var str = Blockly.Arduino.valueToCode(this, 'STRINGOUTPUT',Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var newline = this.getFieldValue('NEWLINE');

  var code='';

  if(newline=='TRUE'){
  	code = 'Serial.println('+str+');\n';
  }
  else{
  	code = 'Serial.print('+str+');\n';
  }

  return code;
};


Blockly.Arduino.serial_println= function() {

  setupSerial();

  var str = Blockly.Arduino.valueToCode(this, 'STRINGOUTPUT',Blockly.Arduino.ORDER_ATOMIC) || '\'\'';

  var code = 'Serial.println('+str+');\n';
  return code;
};


Blockly.Arduino.serial_write_byte = function() {

  setupSerial();

  var b=Blockly.Arduino.valueToCode(this, 'BYTE', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = 'Serial.write((byte)'+b+');\n';
  return code;
};

/*
Blockly.Arduino.serial_read_int = function() {

  //default baudrate
  if(!Blockly.Arduino.setups_['setup_serial']){
	  Blockly.Arduino.setups_['setup_serial'] = 	'Serial.begin(9600);\n';
  }

  var code = 'Serial.parseInt()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
*/

Blockly.Arduino.serial_read_float = function() {

  setupSerial();

  var newline = this.getFieldValue('NEWLINE');
  var code='';

  if(newline=='TRUE'){
	  code = "atof((Serial.readStringUntil('\\n')).c_str());";
  }
  else{
	  code = "Serial.parseFloat()";
  }

  //var code = 'Serial.parseFloat()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.serial_read_byte = function() {

  setupSerial();

	var code = 'Serial.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.serial_read_string = function() {

  setupSerial();

  var newline = this.getFieldValue('NEWLINE');
  var code='';

  if(newline=='TRUE'){
	  code = "Serial.readStringUntil('\\n')";
  }
  else{
	  code = "Serial.readString()";
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.serial_read_string_line = function() {

  setupSerial();

  code = "Serial.readStringUntil('\\n')";

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.serial_read_available= function() {

  setupSerial();

  var code = '(Serial.available()>0)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
Blockly.Arduino.serial_flush = function() {

  //default baudrate
  if(!Blockly.Arduino.setups_['setup_serial']){
	  Blockly.Arduino.setups_['setup_serial'] = 	'Serial.begin(9600);\n';
  }

  var code = 'Serial.flush();\n';
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};
*/
