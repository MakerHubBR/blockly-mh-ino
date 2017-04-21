// Credit: http://www.arduinoblocks.com

'use strict';
goog.provide('Blockly.Blocks.time');
goog.require('Blockly.Blocks');

Blockly.Blocks.time.HUE = 110;

Blockly.Blocks['time_delay'] = {
  /**
   * Delay block definition
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/Delay');
    this.setColour(Blockly.Blocks.time.HUE);

	//    this.appendValueInput(
    //      'DELAY_TIME_MILI', Blockly.StaticTyping.BlocklyType.NUMBER)
    //    .setCheck(Blockly.StaticTyping.BlocklyType.NUMBER)

	this.appendValueInput('DELAY_TIME_MILI')
        .setCheck('Number')
        .appendField(Blockly.Msg.TIME_WAIT);
    this.appendDummyInput()
        .appendField(Blockly.Msg.TIME_MILLIS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TIME_WAIT+' '+Blockly.Msg.TIME_MILLIS);
  }
};

Blockly.Blocks['time_delaymicros'] = {
  /**
   * delayMicroseconds block definition
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/DelayMicroseconds');
    this.setColour(Blockly.Blocks.time.HUE);

	this.appendValueInput('DELAY_TIME_MICRO')
        .setCheck('Number')
        .appendField(Blockly.Msg.TIME_WAIT);
  /*
	this.appendValueInput(
        'DELAY_TIME_MICRO', Blockly.StaticTyping.BlocklyType.NUMBER)
        .setCheck(Blockly.StaticTyping.BlocklyType.NUMBER)
        .appendField('wait');
		*/
    this.appendDummyInput()
        .appendField(Blockly.Msg.TIME_MICROS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TIME_WAIT+' '+Blockly.Msg.TIME_MICROS);
  }
};

Blockly.Blocks['time_millis'] = {
  /**
   * Elapsed time in milliseconds block definition
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/Millis');
    this.setColour(Blockly.Blocks.time.HUE);
    this.appendDummyInput('')
        .appendField(Blockly.Msg.TIME_TIME_ELAPSED+' ('+Blockly.Msg.TIME_MILLIS+')');
    this.setOutput(true, 'Number');
	//this.setOutput(true, Blockly.StaticTyping.BlocklyType.NUMBER);
    this.setTooltip(Blockly.Msg.TIME_TIME_ELAPSED+' ('+Blockly.Msg.TIME_MILLIS+')');
  },
  /** @return {string} The type of return value for the block, an integer. */
/*
  getBlockType: function() {
    return Blockly.StaticTyping.BlocklyType.INTEGER;
  }
 */
};

Blockly.Blocks['time_micros'] = {
  /**
   * Elapsed time in microseconds block definition
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/Micros');
    this.setColour(Blockly.Blocks.time.HUE);
    this.appendDummyInput('')
        .appendField(Blockly.Msg.TIME_TIME_ELAPSED+' ('+Blockly.Msg.TIME_MICROS+')');
    this.setOutput(true, 'Number');
	//this.setOutput(true, Blockly.StaticTyping.BlocklyType.NUMBER);
    this.setTooltip(Blockly.Msg.TIME_TIME_ELAPSED+' ('+Blockly.Msg.TIME_MICROS+')');
  },
  /**
   * Should be a long (32bit), but  for for now an int.
   * @return {string} The type of return value for the block, an integer.
   */
/*
getBlockType: function() {
    return Blockly.StaticTyping.BlocklyType.INTEGER;
  }
 */
};

Blockly.Blocks['time_runeveryms']={
	helpUrl: 'https://www.arduino.cc/en/Tutorial/BlinkWithoutDelay',
	init: function() {
   		this.setColour(Blockly.Blocks.time.HUE);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(Blockly.Msg.TIME_RUNEVERYMS);

		this.appendDummyInput()
			.appendField(Blockly.Msg.TIME_RUNEVERYMS);

		this.appendValueInput("MS",'Number')
			.setCheck('Number')
	    	.setAlign(Blockly.ALIGN_RIGHT)

		this.appendDummyInput()
			.appendField('ms');

		this.appendStatementInput('DO')
			.appendField('');

		this.setInputsInline(true);
  	}
}


Blockly.Blocks['infinite_loop'] = {
  /**
   * Waits forever, end of program.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.time.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.TIME_WAIT_FOREVER);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.TIME_WAIT_FOREVER);
  }
};
