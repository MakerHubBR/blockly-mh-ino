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
 * @fileoverview Generating Arduino for eeprom blocks.
 * @author kleber@makerhub.com.br (Kleber Lima da Silva)
 */
'use strict';

goog.provide('Blockly.Arduino.eeprom');
goog.require('Blockly.Arduino');

Blockly.Arduino.eeprom_read_var= function() {
  Blockly.Arduino.definitions_['define_eeprom'] = '#include &lt;EEPROM.h&gt;\n';
  var addr = Blockly.Arduino.valueToCode(this, 'ADDR', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'EEPROM.read(' + addr + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.eeprom_write_var= function() {
  Blockly.Arduino.definitions_['define_eeprom'] = '#include &lt;EEPROM.h&gt;\n';
  var addr = Blockly.Arduino.valueToCode(this, 'ADDR', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var val = Blockly.Arduino.valueToCode(this, 'VAL', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code ='EEPROM.write(' + addr + ', ' + val + ');\r';
  return code;
};
