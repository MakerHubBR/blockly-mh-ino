/**
 * Visual Blocks Language
 *
 * Copyright 2017 Kleber Lima da Silva.
 * https://github.com/MakerHubBR/blockly-mh-ino/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Arduino for text blocks.
 * @author kleber@makerhub.com.br (Kleber Lima da Silva)
 */
'use strict';

goog.provide('Blockly.Arduino.texts');

goog.require('Blockly.Arduino');


Blockly.Arduino.addReservedWords('Html,Math');

Blockly.Arduino['text'] = function(block) {
  // Text value.
  var code = Blockly.Arduino.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.text_format = function() {
  //
	var fmt = this.getFieldValue('FORMAT');
	var arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_UNARY_NEGATION) || '0';
	var code = 'String((long)' + arg + ', ' + fmt + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.text_format_decimal = function() {
  //
	var dec = this.getFieldValue('DECIMALS');
	var arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_UNARY_NEGATION) || '0';
	var code = 'String(' + arg + ', ' + dec + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['text_join'] = function(block) {
  // Create a string made up of any number of elements of any type.
  var code ='';

	for (var n = 0; n < block.itemCount_; n++) {
     	var str=Blockly.Arduino.valueToCode(block, 'ADD' + n, Blockly.Arduino.ORDER_COMMA) || '';
		if(str!=''){

			if(code!='')code+=' + ';
			if( str.startsWith('\"')){
				code+='String('+str+')';
			}
			else if(str.startsWith('String(') ){
				code+=str;
			}
			else{
				code+='String('+str+')';
			}
		}
    }
    //return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['text_length'] = function(block) {
  // String or array length.
  var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',Blockly.Arduino.ORDER_MEMBER) || '\'\'';
  var code='String('+argument0 + ').length()';
  return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
};

Blockly.Arduino['text_indexOf'] = function(block) {
  // Search the text for a substring.
  var operator = block.getFieldValue('END') == 'FIRST' ?
      'indexOf' : 'lastIndexOf';
  var substring = Blockly.Arduino.valueToCode(block, 'FIND',
      Blockly.Arduino.ORDER_NONE) || '\'\'';
  var text = Blockly.Arduino.valueToCode(block, 'VALUE',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var code='String('+ text + ').' + operator + '(' + substring + ')';
  return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
};

Blockly.Arduino['text_changeCase'] = function(block) {
  // Change capitalization.
  var OPERATORS = {
    'UPPERCASE': '.toUpperCase()',
    'LOWERCASE': '.toLowerCase()',
    'TITLECASE': null
  };
  var operator = OPERATORS[block.getFieldValue('CASE')];
  var textOrder = operator ? Blockly.Arduino.ORDER_UNARY_POSTFIX :
      Blockly.Arduino.ORDER_NONE;
  var text = Blockly.Arduino.valueToCode(block, 'TEXT', textOrder) || '\'\'';
  if (operator) {
    // Upper and lower case are functions built into Arduino.
    var code = 'String('+ text + ').' + operator;
  } else {
    // Title case is not a native Arduino function.  Define one.
    var code = 'String('+ text + ')';
  }
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['text_trim'] = function(block) {
  // Trim spaces.
  var text = Blockly.Arduino.valueToCode(block, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var code = 'String('+ text + ').trim()';
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['text_print'] = function(block) {
  // Print statement.
  var msg = Blockly.Arduino.valueToCode(block, 'TEXT',
      Blockly.Arduino.ORDER_NONE) || '\'\'';
  var code = 'Serial.println(\"' + msg + '\")';
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['text_replace'] = function(block) {
  var text = Blockly.Arduino.valueToCode(block, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var from = Blockly.Arduino.valueToCode(block, 'FROM',
      Blockly.Arduino.ORDER_NONE) || '\'\'';
  var to = Blockly.Arduino.valueToCode(block, 'TO',
      Blockly.Arduino.ORDER_NONE) || '\'\'';
  var code = 'String('+ text + ').replace(String(' + from + '), String(' + to + '))';
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};
