// Credit: http://www.arduinoblocks.com

'use strict';
goog.provide('Blockly.Blocks.io');
goog.require('Blockly.Blocks');

Blockly.Blocks.io.HUE = 230;

Blockly.Blocks['io_digital_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.IO_DIGITAL_WRITE)
        .appendField(new Blockly.FieldDropdown(profile.default.logic_levels), "STAT")
        .appendField(Blockly.Msg.TO_PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.io.HUE);
    this.setTooltip(Blockly.Msg.IO_DIGITAL_WRITE_TOOLTIP);
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalWrite');
  }
};

Blockly.Blocks['io_digital_write2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.IO_DIGITAL_WRITE);
    this.appendValueInput("STAT")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField(Blockly.Msg.TO_PIN);
    this.appendValueInput("PIN", 'Number')
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.io.HUE);
    this.setTooltip(Blockly.Msg.IO_DIGITAL_WRITE_TOOLTIP);
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalWrite');
  }
};

Blockly.Blocks['io_digital_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.IO_DIGITAL_READ + " " + Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.io.HUE);
    this.setTooltip(Blockly.Msg.IO_DIGITAL_READ_TOOLTIP);
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalRead');
  }
};

Blockly.Blocks['io_digital_read2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.IO_DIGITAL_READ + " " + Blockly.Msg.PIN);
    this.appendValueInput("PIN", 'Number')
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.io.HUE);
    this.setTooltip(Blockly.Msg.IO_DIGITAL_READ_TOOLTIP);
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalRead');
  }
};

Blockly.Blocks['io_analog_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.IO_ANALOG_WRITE);
    this.appendValueInput("NUM", 'Number')
        .setCheck('Number');
    this.appendDummyInput()
        .appendField(Blockly.Msg.TO_PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.PWM), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.io.HUE);
    this.setTooltip(Blockly.Msg.IO_ANALOG_WRITE_TOOLTIP);
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogWrite');
  }
};

Blockly.Blocks['io_analog_write2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.IO_ANALOG_WRITE);
    this.appendValueInput("NUM", 'Number')
        .setCheck('Number');
    this.appendDummyInput()
        .appendField(Blockly.Msg.TO_PIN);
    this.appendValueInput("PIN", 'Number')
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.io.HUE);
    this.setTooltip(Blockly.Msg.IO_ANALOG_WRITE_TOOLTIP);
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogWrite');
  }
};

Blockly.Blocks['io_analog_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IO_ANALOG_READ + " " + Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.IO_ANALOG_READ_TOOLTIP);
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogRead');
  }
};

Blockly.Blocks['io_analog_read2'] = {
  init: function() {
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IO_ANALOG_READ + " " + Blockly.Msg.PIN);
    this.appendValueInput("PIN",'Number')
  	  	.setCheck('Number');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.IO_ANALOG_READ_TOOLTIP);
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogRead');
  }
};
