// Credit: http://www.arduinoblocks.com

'use strict';

goog.provide('Blockly.Blocks.bluetooth');

goog.require('Blockly.Blocks');

Blockly.Blocks.bluetooth.HUE = 190;

Blockly.Blocks['bluetooth_init'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.bluetooth.HUE);

	this.appendDummyInput("")
		//.appendField("Bluetooth")
	  	.appendField(new Blockly.FieldImage("media/arduino/bluetooth.png", 25,25))
		.appendField(Blockly.Msg.BLUETOOTH_INIT)
		.appendField("Rx")
	    .appendField(new Blockly.FieldDropdown(profile.default.digital), "RX")
      	.appendField("Tx")
      	.appendField(new Blockly.FieldDropdown(profile.default.digital), "TX")
      	.appendField(Blockly.Msg.BLUETOOTH_BAUDRATE)
		.appendField(new Blockly.FieldDropdown([['2400','2400'],['4800','4800'],['9600','9600'],['19200','19200'],['38400','38400'],['57600','57600'],['115200','115200']]), "BAUD");

	 this.setInputsInline(true);
	this.setPreviousStatement(true,null);
	this.setNextStatement(true,null);
	this.setTooltip(Blockly.Msg.BLUETOOTH_INIT);
  }
};

Blockly.Blocks['bluetooth_name'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.bluetooth.HUE);

	this.appendDummyInput("")
	  	.appendField(new Blockly.FieldImage("media/arduino/bluetooth.png", 25,25))
		.appendField(Blockly.Msg.BLUETOOTH_DEVNAME);
	this.appendValueInput("DEVNAME", 'String')
		.setCheck('String')
		.setAlign(Blockly.ALIGN_RIGHT);

	this.appendDummyInput("")
		.appendField(Blockly.Msg.BLUETOOTH_PIN);
	this.appendValueInput("DEVPIN", 'String')
		.setCheck('String')
		.setAlign(Blockly.ALIGN_RIGHT);

	 this.setInputsInline(true);
	this.setPreviousStatement(true,null);
	this.setNextStatement(true,null);
	this.setTooltip(Blockly.Msg.BLUETOOTH_PRINT);
  }
};


Blockly.Blocks['bluetooth_timeout'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.bluetooth.HUE);
	this.appendDummyInput("")
		.appendField(new Blockly.FieldImage("media/arduino/bluetooth.png", 25,25));

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

Blockly.Blocks['bluetooth_print'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.bluetooth.HUE);
	this.appendDummyInput("")
		//.appendField("Bluetooth")
	  	.appendField(new Blockly.FieldImage("media/arduino/bluetooth.png", 25,25))
		.appendField(Blockly.Msg.BLUETOOTH_PRINT);
	this.appendValueInput("STRINGOUTPUT", 'String')
		//.setCheck('String')
		.setAlign(Blockly.ALIGN_RIGHT);
		//.appendField(Blockly.Msg.TEXT);

	this.appendDummyInput("")
		.appendField(new Blockly.FieldCheckbox('TRUE'),"NEWLINE")
			.appendField(Blockly.Msg.ADD_NEW_LINE);

	 this.setInputsInline(true);
	this.setPreviousStatement(true,null);
	this.setNextStatement(true,null);
	this.setTooltip(Blockly.Msg.BLUETOOTH_PRINT);
  }
};

Blockly.Blocks['bluetooth_println'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.bluetooth.HUE);
	this.appendDummyInput("")
		//.appendField("Bluetooth")
	  	.appendField(new Blockly.FieldImage("media/arduino/bluetooth.png", 25,25))
		.appendField(Blockly.Msg.BLUETOOTH_PRINTLN);
	this.appendValueInput("STRINGOUTPUT", 'String')
		//.setCheck('String')
		.setAlign(Blockly.ALIGN_RIGHT);
		//.appendField(Blockly.Msg.TEXT);
	 this.setInputsInline(true);
	this.setPreviousStatement(true,null);
	this.setNextStatement(true,null);
	this.setTooltip(Blockly.Msg.BLUETOOTH_PRINTLN);
  }
};


Blockly.Blocks['bluetooth_read_float'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.bluetooth.HUE);
	this.appendDummyInput("")
	  	.appendField(new Blockly.FieldImage("media/arduino/bluetooth.png", 25,25))
		.appendField(Blockly.Msg.BLUETOOTH_READFLOAT);


	  this.appendDummyInput("")
			.appendField(new Blockly.FieldCheckbox('TRUE'),"NEWLINE")
			.appendField(Blockly.Msg.UNTIL_NEW_LINE);

	 this.setInputsInline(true);

	this.setOutput(true, 'Number');
	this.setTooltip(Blockly.Msg.BLUETOOTH_READFLOAT);
	  this.setHelpUrl('https://www.arduino.cc/en/Serial/ParseFloat');
  }
};


Blockly.Blocks['bluetooth_read_string'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.bluetooth.HUE);
	this.appendDummyInput("")
		//.appendField("Bluetooth")
	  	.appendField(new Blockly.FieldImage("media/arduino/bluetooth.png", 25,25))
		.appendField(Blockly.Msg.BLUETOOTH_READSTRING);
    this.appendDummyInput("")
			.appendField(new Blockly.FieldCheckbox('TRUE'),"NEWLINE")
			.appendField(Blockly.Msg.UNTIL_NEW_LINE);

	this.setInputsInline(true);
	this.setOutput(true, 'String');
	this.setTooltip(Blockly.Msg.BLUETOOTH_READSTRING);
  }
};

Blockly.Blocks['bluetooth_read_string_line'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.bluetooth.HUE);
	this.appendDummyInput("")
		//.appendField("Bluetooth")
	  	.appendField(new Blockly.FieldImage("media/arduino/bluetooth.png", 25,25))
		.appendField(Blockly.Msg.BLUETOOTH_READSTRINGLINE);
	this.setOutput(true, 'String');
	this.setTooltip(Blockly.Msg.BLUETOOTH_READSTRINGLINE);
  }
};

Blockly.Blocks['bluetooth_read_byte'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.bluetooth.HUE);
	this.appendDummyInput("")
		//.appendField("Bluetooth")
	  	.appendField(new Blockly.FieldImage("media/arduino/bluetooth.png", 25,25))
		.appendField(Blockly.Msg.BLUETOOTH_READBYTE);
	this.setOutput(true, 'Number');
	this.setTooltip(Blockly.Msg.BLUETOOTH_READBYTE);
  }
};


Blockly.Blocks['bluetooth_write_byte'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.bluetooth.HUE);
	this.appendDummyInput("")
		//.appendField("Bluetooth")
	  	.appendField(new Blockly.FieldImage("media/arduino/bluetooth.png", 25,25))
		.appendField(Blockly.Msg.BLUETOOTH_WRITEBYTE);
	this.appendValueInput("BYTE", 'Number')
		.setCheck('Number')
		.setAlign(Blockly.ALIGN_RIGHT);
	 this.setInputsInline(true);
	this.setPreviousStatement(true,null);
	this.setNextStatement(true,null);
	this.setTooltip(Blockly.Msg.BLUETOOTH_WRITEBYTE);
  }
};

Blockly.Blocks['bluetooth_read_available'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.bluetooth.HUE);
	this.appendDummyInput("")
		//.appendField("Bluetooth")
	  	.appendField(new Blockly.FieldImage("media/arduino/bluetooth.png", 25,25))
		.appendField(Blockly.Msg.BLUETOOTH_AVAILABLE);
	this.setOutput(true, 'Boolean');
	this.setTooltip(Blockly.Msg.BLUETOOTH_AVAILABLE);
  }
};

/*
Blockly.Blocks['BLUETOOTH_read'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.serial.HUE);
	this.appendDummyInput("")
		.appendField(Blockly.Msg.BLUETOOTH_READ);
	this.setOutput(true, 'String');
	this.setTooltip(Blockly.Msg.BLUETOOTH_READ);
  }
};


Blockly.Blocks['bluetooth_read_int'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.bluetooth.HUE);
	this.appendDummyInput("")
		.appendField("Bluetooth")
	  	.appendField(new Blockly.FieldImage("media/arduino/bluetooth.png", 25,25))
		.appendField(Blockly.Msg.BLUETOOTH_READINT);
	this.setOutput(true, 'Number');
	this.setTooltip(Blockly.Msg.BLUETOOTH_READINT);
  }
};

Blockly.Blocks['bluetooth_flush'] = {
  helpUrl: '',
  init: function() {
	this.setColour (Blockly.Blocks.bluetooth.HUE);
	this.appendDummyInput("")
		.appendField("Bluetooth")
	  	.appendField(new Blockly.FieldImage("media/arduino/bluetooth.png", 25,25))
		.appendField(Blockly.Msg.BLUETOOTH_FLUSH);
	this.setPreviousStatement(true,null);
	this.setNextStatement(true,null);
	this.setTooltip(Blockly.Msg.BLUETOOTH_FLUSH);
  }
};
*/
