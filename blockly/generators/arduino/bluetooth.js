// Credit: http://www.arduinoblocks.com

'use strict';

goog.provide('Blockly.Arduino.bluetooth');
goog.require('Blockly.Arduino');

function setupBluetooth(){

	Blockly.Arduino.definitions_['define_softserial'] = '#include &lt;SoftwareSerial.h&gt;\n';

	//default connection
	if(!Blockly.Arduino.definitions_['var_bluetooth']){
	    Blockly.Arduino.definitions_['var_bluetooth'] = ' SoftwareSerial bt_serial(2,3); //RX<->TX';
	}

	//default baudrate
	if(!Blockly.Arduino.setups_['setup_bluetooth']){
	  Blockly.Arduino.setups_['setup_bluetooth'] = 	'\tbt_serial.begin(9600);\n'; //+btName+btPin;
  	}
}

Blockly.Arduino.bluetooth_init= function() {

	//var baud=Blockly.Arduino.valueToCode(this, 'BAUD', Blockly.Arduino.ORDER_ATOMIC) || '9600';
  	var baud = this.getFieldValue('BAUD');
	var rx = this.getFieldValue('RX');
  	var tx = this.getFieldValue('TX');

	setupBluetooth();

	Blockly.Arduino.definitions_['var_bluetooth'] = 'SoftwareSerial bt_serial('+tx+','+rx+');\n';
	Blockly.Arduino.setups_['setup_bluetooth'] = 	'bt_serial.begin('+baud+');\n'; //+btName+btPin;

  	var code = '';
	return code;
};

Blockly.Arduino.bluetooth_name= function() {

	setupBluetooth();

	var fnc_code='void fnc_bt_serial_namepin(String _name,String _pin){\n';
	fnc_code+='\tbt_serial.println(String("AT+NAME")+_name);\n';
	//fnc_code+='\tbt_serial.print(_name);\n';
	//fnc_code+='\tbt_serial.print("\\r\\n");\n';
	fnc_code+='\tdelay(250);\n';
	fnc_code+='\twhile(bt_serial.available()>0)bt_serial.read();\n';
	fnc_code+='\tbt_serial.println(String("AT+PIN")+_pin);\n';
	//fnc_code+='\tbt_serial.print(_pin);\n';
	//fnc_code+='\tbt_serial.print("\\r\\n");\n';
	fnc_code+='\tdelay(250);\n';
	fnc_code+='}';

	Blockly.Arduino.definitions_['fnc_bt_serial_namepin'] = fnc_code;

	var name = Blockly.Arduino.valueToCode(this, 'DEVNAME',Blockly.Arduino.ORDER_ATOMIC) || '\'ArduinoBlocks\'';
  	//name=name.substring(1,name.length-1);

	//var btName = 'bt_serial.print("AT+NAME'+name+'\\r\\n");delay(500);while(bt_serial.available()>0)bt_serial.read();\n';

	var pin = Blockly.Arduino.valueToCode(this, 'DEVPIN',Blockly.Arduino.ORDER_ATOMIC) || '\'1234\'';
  	//pin=pin.substring(1,pin.length-1);

	//var btPin  = 'bt_serial.print("AT+PIN'+pin+'\\r\\n");delay(500);while(bt_serial.available()>0)bt_serial.read();\n';

  	//var code = btName+btPin;

	var code='fnc_bt_serial_namepin('+name+','+pin+');\n';
	return code;
};


Blockly.Arduino.bluetooth_timeout= function() {

	setupBluetooth();

  var value_ms = Blockly.Arduino.valueToCode(this, "MS", Blockly.Arduino.ORDER_ATOMIC);

  var code = 'bt_serial.setTimeout('+value_ms+');\n';
  return code;
}

Blockly.Arduino.bluetooth_print= function() {

  setupBluetooth();

  var str = Blockly.Arduino.valueToCode(this, 'STRINGOUTPUT',Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var newline = this.getFieldValue('NEWLINE');

  var code='';

  if(newline=='TRUE'){
  	code = 'bt_serial.println('+str+');\n';
  }
  else{
  	code = 'bt_serial.print('+str+');\n';
  }

  return code;
};


Blockly.Arduino.bluetooth_println= function() {

  setupBluetooth();

  var str = Blockly.Arduino.valueToCode(this, 'STRINGOUTPUT',Blockly.Arduino.ORDER_ATOMIC) || '\'\'';

  var code = 'bt_serial.println('+str+');\n';
  return code;
};


Blockly.Arduino.bluetooth_write_byte = function() {

  setupBluetooth();

  var b=Blockly.Arduino.valueToCode(this, 'BYTE', Blockly.Arduino.ORDER_ATOMIC) || '0';

  var code = 'bt_serial.write((byte)'+b+');\n';
  return code;
};

Blockly.Arduino.bluetooth_read_float = function() {

  setupBluetooth();

  var newline = this.getFieldValue('NEWLINE');
  var code='';

  if(newline=='TRUE'){
	  code = "atof((bt_serial.readStringUntil('\\n')).c_str());";
  }
  else{
	  code = "bt_serial.parseFloat()";
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluetooth_read_byte = function() {

  setupBluetooth();

  var code = 'bt_serial.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluetooth_read_string = function() {

  setupBluetooth();

  var code = 'bt_serial.readString()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluetooth_read_string_line = function() {

  setupBluetooth();

  var code = "bt_serial.readStringUntil('\\n')";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluetooth_read_available= function() {

  setupBluetooth();

  var code = '(bt_serial.available()>0)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*

Blockly.Arduino.bluetooth_read_int = function() {


  var code = 'bt_serial.parseInt()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.bluetooth_flush = function() {

  var code = 'bt_serial.flush();\n';
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};

*/
