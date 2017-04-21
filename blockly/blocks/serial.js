// Credit: http://www.arduinoblocks.com

'use strict';

goog.provide('Blockly.Blocks.serial');

goog.require('Blockly.Blocks');

Blockly.Blocks.serial.HUE = 170;

Blockly.Blocks['serial_init'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.serial.HUE);
	this.appendDummyInput("")
		.appendField(new Blockly.FieldImage("media/arduino/console.png", 25,25))
		.appendField(Blockly.Msg.SERIAL_INIT)
      	.appendField(Blockly.Msg.SERIAL_BAUDRATE)
      	.appendField(new Blockly.FieldDropdown([['2400','2400'],['4800','4800'],['9600','9600'],['19200','19200'],['38400','38400'],['57600','57600'],['115200','115200']]), "BAUD");

	 this.setInputsInline(true);
	this.setPreviousStatement(true,null);
	this.setNextStatement(true,null);
	this.setTooltip(Blockly.Msg.SERIAL_INIT);
	  this.setHelpUrl('https://www.arduino.cc/en/Serial/Begin');
  }
};

Blockly.Blocks['serial_timeout'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.serial.HUE);
	this.appendDummyInput("")
		.appendField(new Blockly.FieldImage("media/arduino/console.png", 25,25));

	  this.appendValueInput("MS",'Number')
	  	.setCheck('Number')
	    .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SERIAL_TIMEOUT);

	 this.setInputsInline(true);
	this.setPreviousStatement(true,null);
	this.setNextStatement(true,null);
	this.setTooltip(Blockly.Msg.SERIAL_INIT);
	  this.setHelpUrl('https://www.arduino.cc/en/Serial/SetTimeout');
  }
};

Blockly.Blocks['serial_print'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.serial.HUE);
	this.appendDummyInput("")
		.appendField(new Blockly.FieldImage("media/arduino/console.png", 25,25))
		.appendField(Blockly.Msg.SERIAL_PRINT);
	this.appendValueInput("STRINGOUTPUT", 'String');
		//.setCheck('String')
		//.setAlign(Blockly.ALIGN_RIGHT)
		//.appendField(Blockly.Msg.TEXT);
	this.appendDummyInput("")
		.appendField(new Blockly.FieldCheckbox('TRUE'),"NEWLINE")
			.appendField(Blockly.Msg.ADD_NEW_LINE);
	/*		.appendField('+')
		.appendField(new Blockly.FieldDropdown([[' ',''],[Blockly.Msg.ADD_NEW_LINE,'newline']]), "NEWLINE");
		*/
	 this.setInputsInline(true);
	this.setPreviousStatement(true,null);
	this.setNextStatement(true,null);
	this.setTooltip(Blockly.Msg.SERIAL_PRINT);
	  this.setHelpUrl('https://www.arduino.cc/en/Serial/Print');
  }
};

Blockly.Blocks['serial_println'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.serial.HUE);
	this.appendDummyInput("")
		.appendField(new Blockly.FieldImage("media/arduino/console.png", 25,25))
		.appendField(Blockly.Msg.SERIAL_PRINTLN);
	this.appendValueInput("STRINGOUTPUT", 'String')
		//.setCheck('String')
		.setAlign(Blockly.ALIGN_RIGHT);
		//.appendField(Blockly.Msg.TEXT);
	 this.setInputsInline(true);
	this.setPreviousStatement(true,null);
	this.setNextStatement(true,null);
	this.setTooltip(Blockly.Msg.SERIAL_PRINTLN);
	  this.setHelpUrl('https://www.arduino.cc/en/Serial/Println');
  }
};

Blockly.Blocks['serial_read_float'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.serial.HUE);
	this.appendDummyInput("")
		.appendField(new Blockly.FieldImage("media/arduino/console.png", 25,25))
		.appendField(Blockly.Msg.SERIAL_READFLOAT);

	  this.appendDummyInput("")
			.appendField(new Blockly.FieldCheckbox('TRUE'),"NEWLINE")
			.appendField(Blockly.Msg.UNTIL_NEW_LINE);

	 this.setInputsInline(true);
	this.setOutput(true, 'Number');
	this.setTooltip(Blockly.Msg.SERIAL_READFLOAT);
	  this.setHelpUrl('https://www.arduino.cc/en/Serial/ParseFloat');
  }
};


Blockly.Blocks['serial_read_string'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.serial.HUE);
	this.appendDummyInput("")
		.appendField(new Blockly.FieldImage("media/arduino/console.png", 25,25))
		.appendField(Blockly.Msg.SERIAL_READSTRING);
	this.appendDummyInput("")
			.appendField(new Blockly.FieldCheckbox('TRUE'),"NEWLINE")
			.appendField(Blockly.Msg.UNTIL_NEW_LINE);
	  this.setInputsInline(true);
	this.setOutput(true, 'String');
	this.setTooltip(Blockly.Msg.SERIAL_READSTRING);
	  this.setHelpUrl('https://www.arduino.cc/en/Serial/ReadString');
  }
};

Blockly.Blocks['serial_read_string_line'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.serial.HUE);
	this.appendDummyInput("")
	  	.appendField(new Blockly.FieldImage("media/arduino/console.png", 25,25))
		.appendField(Blockly.Msg.SERIAL_READSTRINGLINE);
	this.setOutput(true, 'String');
	this.setTooltip(Blockly.Msg.SERIAL_READSTRINGLINE);
	  this.setHelpUrl('https://www.arduino.cc/en/Serial/ReadStringUntil');
  }
};


Blockly.Blocks['serial_read_byte'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.serial.HUE);
	this.appendDummyInput("")
	  	.appendField(new Blockly.FieldImage("media/arduino/console.png", 25,25))
		.appendField(Blockly.Msg.SERIAL_READBYTE);
	this.setOutput(true, 'Number');
	this.setTooltip(Blockly.Msg.SERIAL_READBYTE);
	  this.setHelpUrl('https://www.arduino.cc/en/Serial/Read');
  }
};


Blockly.Blocks['serial_write_byte'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.serial.HUE);
	this.appendDummyInput("")
	  	.appendField(new Blockly.FieldImage("media/arduino/console.png", 25,25))
		.appendField(Blockly.Msg.SERIAL_WRITEBYTE);
	this.appendValueInput("BYTE", 'Number')
		.setCheck('Number')
		.setAlign(Blockly.ALIGN_RIGHT);
	 this.setInputsInline(true);
	this.setPreviousStatement(true,null);
	this.setNextStatement(true,null);
	this.setTooltip(Blockly.Msg.SERIAL_WRITEBYTE);
	  this.setHelpUrl('https://www.arduino.cc/en/Serial/Write');
  }
};

Blockly.Blocks['serial_read_available'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.serial.HUE);
	this.appendDummyInput("")
		.appendField(new Blockly.FieldImage("media/arduino/console.png", 25,25))
		.appendField(Blockly.Msg.SERIAL_AVAILABLE);
	this.setOutput(true, 'Boolean');
	this.setTooltip(Blockly.Msg.SERIAL_AVAILABLE);
	  this.setHelpUrl('https://www.arduino.cc/en/Serial/Available');
  }
};

/*
Blockly.Blocks['serial_read'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.serial.HUE);
	this.appendDummyInput("")
		.appendField(Blockly.Msg.SERIAL_READ);
	this.setOutput(true, 'String');
	this.setTooltip(Blockly.Msg.SERIAL_READ);
  }
};

Blockly.Blocks['serial_flush'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.serial.HUE);
	this.appendDummyInput("")
		.appendField(new Blockly.FieldImage("media/arduino/console.png", 25,25))
		.appendField(Blockly.Msg.SERIAL_FLUSH);
	this.setPreviousStatement(true,null);
	this.setNextStatement(true,null);
	this.setTooltip(Blockly.Msg.SERIAL_FLUSH);
  }
};

Blockly.Blocks['serial_read_int'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.serial.HUE);
	this.appendDummyInput("")
		.appendField(new Blockly.FieldImage("media/arduino/console.png", 25,25))
		.appendField(Blockly.Msg.SERIAL_READINT);
	this.setOutput(true, 'Number');
	this.setTooltip(Blockly.Msg.SERIAL_READINT);
  }
};

*/
