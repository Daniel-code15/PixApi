"use strict";

/**
 * @example console.log(pixapi.randomChars(100)); //output a 100 random chars
*/

const gen = (len) => {
    var rdmString = "";
    for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
    return rdmString.substr(0, len)
}

module.exports = gen
