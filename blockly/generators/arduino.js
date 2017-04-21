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
 * @fileoverview Generating Arduino for procedures blocks.
 * @author kleber@makerhub.com.br (Kleber Lima da Silva)
 *
 * Credit: http://www.arduinoblocks.com
 */
'use strict';

goog.provide('Blockly.Arduino');

goog.require('Blockly.Generator');


/**
 * Arduino code generator.
 * @type !Blockly.Generator
 */
Blockly.Arduino = new Blockly.Generator('Arduino');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.Arduino.addReservedWords(
  // http://arduino.cc/en/Reference/HomePage
  'setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,integer, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts,servo,keypad,serial,irremote,lcd,stepper,SoftwareSerial,bt_serial,fnc_bt_serial_namepin,LiquidCrystal_I2C,encoder,rtc,bt_serial,gps,gps_serial,fnc_gps_update,gps_lat,gps_lon,gps_speed_kmph,gps_speed_mph,gps_altitude,gps_course,gps_fixed,gps_day,gps_month,gps_year,gps_hour,gps_min,gps_sec,gps_hund,sd_file,fnc_sd_print,fnc_sd_filesize,fnc_sd_readbyte,fnc_sd_writebyte,fnc_EEPROM_readDouble,fnc_EEPROM_writeDouble,keypad_3x4_keys,keypad_3x4_rp,keypad_3x4_cp,keypad_3x4,fnc_adxl335'
);

/**
 * Order of operation ENUMs.
 *
 */
Blockly.Arduino.ORDER_ATOMIC = 0;         // 0 "" ...
Blockly.Arduino.ORDER_UNARY_POSTFIX = 1;  // expr++ expr-- () [] .
Blockly.Arduino.ORDER_UNARY_PREFIX = 2;   // -expr !expr ~expr ++expr --expr
Blockly.Arduino.ORDER_MULTIPLICATIVE = 3; // * / % ~/
Blockly.Arduino.ORDER_ADDITIVE = 4;       // + -
Blockly.Arduino.ORDER_SHIFT = 5;          // << >>
Blockly.Arduino.ORDER_RELATIONAL = 6;     // is is! >= > <= <
Blockly.Arduino.ORDER_EQUALITY = 7;       // == != === !==
Blockly.Arduino.ORDER_BITWISE_AND = 8;    // &
Blockly.Arduino.ORDER_BITWISE_XOR = 9;    // ^
Blockly.Arduino.ORDER_BITWISE_OR = 10;    // |
Blockly.Arduino.ORDER_LOGICAL_AND = 11;   // &&
Blockly.Arduino.ORDER_LOGICAL_OR = 12;    // ||
Blockly.Arduino.ORDER_CONDITIONAL = 13;   // expr ? expr : expr
Blockly.Arduino.ORDER_ASSIGNMENT = 14;    // = *= /= ~/= %= += -= <<= >>= &= ^= |=
Blockly.Arduino.ORDER_NONE = 99;          // (...)

/*
 * Arduino Board profiles
 *
 */

var profile = {
	arduino_smd:{
		description: "Arduino ATMega328P SMD",
	    digital: [["LED","LED_BUILTIN"],["0","0"],["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"],["A0","A0"], ["A1","A1"], ["A2","A2"], ["A3","A3"], ["A4","A4"], ["A5","A5"], ["A6","A6"], ["A7","A7"]],
		PWM : [["3","3"], ["5","5"], ["6","6"], ["9","9"], ["10","10"], ["11","11"]],
		analog : [["A0","A0"], ["A1","A1"], ["A2","A2"], ["A3","A3"], ["A4","A4"], ["A5","A5"],["A6","A6"],["A7","A7"]],
	  serial : 9600,
		logic_levels: [["ON", "HIGH"], ["OFF", "LOW"]],
		ids: [["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"]]
	}
};

//set default profile to arduino standard-compatible board
profile.default = profile["arduino_smd"];

/**
 * Ensure that PIN number exists in Digital array.
 * @param {string} text The user's text.
 * @return {?string} A string representing a valid PIN number, or null if invalid.
 */
Blockly.Arduino.pinDigitalValidator = function(text) {
	var pos = profile.defaultBoard.digital.indexOf(text);

	return (pos < 0) ? null : text;
};

/**
 * Ensure that PIN number exists in PWM array.
 * @param {string} text The user's text.
 * @return {?string} A string representing a valid PIN number, or null if invalid.
 */
Blockly.Arduino.pinPWMValidator = function(text) {
	var pos = profile.defaultBoard.PWM.indexOf(text);

	return (pos < 0) ? null : text;
};

/**
 * Ensure that PIN number exists in Analog array.
 * @param {string} text The user's text.
 * @return {?string} A string representing a valid PIN number, or null if invalid.
 */
Blockly.Arduino.pinAnalogValidator = function(text) {
	var pos = profile.defaultBoard.analog.indexOf(text);

	return (pos < 0) ? null : text;
};

/**
 * Ensure that PIN and next PIN numbers exists in Digital or Analog array.
 * @param {string} text The user's text.
 * @return {?string} A string representing a valid PIN number, or null if invalid.
 */
Blockly.Arduino.pinDualValidator = function(text) {
	var posa = profile.defaultBoard.analog.indexOf(text);
	var posd = profile.defaultBoard.digital.indexOf(text);
	var pos = posa + posd
	return (pos < 0) ? null : text;
};

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.Arduino.init = function(workspace) {

  // Create a dictionary of definitions to be printed before setups.
  Blockly.Arduino.definitions_ = Object.create(null);

  // Create a dictionary of setups to be printed before the code.
  Blockly.Arduino.setups_ = Object.create(null);

  // Create a dictionary of loops to be printed before the code.
  Blockly.Arduino.loops_ = Object.create(null);

  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.Arduino.functionNames_ = Object.create(null);

  if (Blockly.Variables) {
    if (!Blockly.Arduino.variableDB_) {
      Blockly.Arduino.variableDB_ =
          new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);
    } else {
      Blockly.Arduino.variableDB_.reset();
    }

    // TODO: settype to variable
    var defvars = [];
    var variables = Blockly.Variables.allVariables(workspace);
    for (var x = 0; x < variables.length; x++) {
    // defvars[x] = 'int ' +
	  // defvars[x] = 'long ' +
    defvars[x] = 'float ' +
		// defvars[x] = 'double ' +
          Blockly.Arduino.variableDB_.getName(variables[x],
          Blockly.Variables.NAME_TYPE) + ';\n';
    }
    Blockly.Arduino.definitions_['variables'] = defvars.join('\n');
  }
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.Arduino.finish = function(code) {

  //LOOPS COMMANDS
  var loops = [];
  for (var name in Blockly.Arduino.loops_) {
	  var def = Blockly.Arduino.loops_[name];
	  loops.push(def);
  }

  // Indent every line.
  code = '  ' + code.replace(/\n/g, '\n  ');
  code = code.replace(/\n\s+$/, '\n');
  code = 'void loop() \n{\n' + loops.join('\n')+'\n'+code + '\n}';

  //DEFINITIONS
  var imports = [];
  var definitions = [];
  for (var name in Blockly.Arduino.definitions_) {
    var def = Blockly.Arduino.definitions_[name];
    if (def.match(/^#include/)) {
      imports.push(def);
    } else {
      definitions.push(def);
    }
  }

  //SETUP
  var setups = [];
  for (var name in Blockly.Arduino.setups_) {
	  if(name!='arduino_setup'){
		  setups.push(Blockly.Arduino.setups_[name]);
	  }
  }

  //SETUP BLOCK
  //setups.push('//setup block code:');
  var abs=Blockly.Arduino.setups_['arduino_setup'];
  if(abs){
	  setups.push(abs);
  }

  //ALL
  var allDefs = imports.join('\n') + '\n\n' + definitions.join('\n') + '\nvoid setup() \n{\n  '+setups.join('\n  ') + '\n}'+ '\n\n';
  return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n\n') + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.  A trailing semicolon is needed to make this legal.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.Arduino.scrubNakedValue = function(line) {
  return line + ';\n';
};

/**
 * Encode a string as a properly escaped Arduino string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} Arduino string.
 * @private
 */
Blockly.Arduino.quote_ = function(string) {
  // TODO: This is a quick hack.  Replace with goog.string.quote
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 //.replace(/\$/g, '\\$')
                 .replace(/'/g, '\\\'');
  return '\"' + string + '\"';
};

/**
 * Common tasks for generating Arduino from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The Arduino code created for this block.
 * @return {string} Arduino code with comments and subsequent blocks added.
 * @private
 */
Blockly.Arduino.scrub_ = function(block, code) {
  if (code === null) {
    // Block has handled code generation itself.
    return '';
  }
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      commentCode += Blockly.Arduino.prefixLines(comment, '// ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = Blockly.Arduino.allNestedComments(childBlock);
          if (comment) {
            commentCode += Blockly.Arduino.prefixLines(comment, '// ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = Blockly.Arduino.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};
