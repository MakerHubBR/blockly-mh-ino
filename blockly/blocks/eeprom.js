// Credit: http://www.arduinoblocks.com

'use strict';
goog.provide('Blockly.Blocks.eeprom');
goog.require('Blockly.Blocks');

Blockly.Blocks.eeprom.HUE = 60;

Blockly.Blocks['eeprom_read_var'] = {
  init: function() {
  	this.setColour (Blockly.Blocks.eeprom.HUE);
  	this.appendDummyInput()
  		.appendField(Blockly.Msg.EEPROM_READ);
  	this.appendValueInput("ADDR", 'Number')
      .setCheck('Number');
  	this.setInputsInline(true);
  	this.setOutput(true, 'Number');
  	this.setTooltip(Blockly.Msg.EEPROM_READ_TOOLTIP);
    this.setHelpUrl('https://www.arduino.cc/en/Reference/EEPROM');
  }
};

Blockly.Blocks['eeprom_write_var'] = {
  init: function() {
  	this.setColour (Blockly.Blocks.eeprom.HUE);
  	this.appendDummyInput()
  		.appendField(Blockly.Msg.EEPROM_WRITE);
  	this.appendValueInput("VAL", 'Number')
  	  .setCheck('Number');
    this.appendDummyInput()
  		.appendField(Blockly.Msg.EEPROM_ADDRESS);
  	this.appendValueInput("ADDR", 'Number')
  	  .setCheck('Number');
  	this.setInputsInline(true);
  	this.setPreviousStatement(true, null);
  	this.setNextStatement(true, null);
  	this.setTooltip(Blockly.Msg.EEPROM_WRITE_TOOLTIP);
    this.setHelpUrl('https://www.arduino.cc/en/Reference/EEPROM');
  }
};
