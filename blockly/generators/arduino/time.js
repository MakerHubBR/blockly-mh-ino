// Credit: http://www.arduinoblocks.com

'use strict';

goog.provide('Blockly.Arduino.time');
goog.require('Blockly.Arduino');

Blockly.Arduino.time_delay = function() {
  var delayTime = Blockly.Arduino.valueToCode(
      this, 'DELAY_TIME_MILI', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'delay(' + delayTime + ');\n';
  return code;
};

Blockly.Arduino.time_delaymicros = function() {
  var delayTimeMs = Blockly.Arduino.valueToCode(
      this, 'DELAY_TIME_MICRO', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'delayMicroseconds(' + delayTimeMs + ');\n';
  return code;
};

Blockly.Arduino.time_millis = function() {
  var code = 'millis()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.time_micros = function() {
  var code = 'micros()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.infinite_loop = function() {
  return 'while(true);\n';
};

Blockly.Arduino.time_runeveryms=function(){

	var branch = Blockly.Arduino.statementToCode(this, 'DO');
	var delayTimeMs = Blockly.Arduino.valueToCode(this, 'MS', Blockly.Arduino.ORDER_ATOMIC) || '0';

	var var0 = Blockly.Arduino.variableDB_.getDistinctName('task_time_ms', Blockly.Variables.NAME_TYPE);

	Blockly.Arduino.definitions_["var_"+var0]="unsigned long "+var0+"=0;\n";

	var code='';
	code+='if((millis()-'+var0+')>='+delayTimeMs+'){\n';
	code+='\t'+var0+'=millis();\n';
	code+= branch;
	code+='}\n';

	return code;
}
