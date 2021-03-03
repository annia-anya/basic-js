const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    let result = '';
    let currentOffsetIndex = 0;
    const normalizedKey = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      const normalizedChar = message[i].toUpperCase();
      if (normalizedChar >= 'A' && normalizedChar <= 'Z') {
        const offset = normalizedKey[currentOffsetIndex % normalizedKey.length].charCodeAt(0) - 'A'.charCodeAt(0);
        result += String.fromCharCode((normalizedChar.charCodeAt(0) - 65 + offset) % 26 + 65);
        currentOffsetIndex++;
      } else {
        result += normalizedChar;
      }
    }
    if (!this.direct) {
      result = result.split('').reverse().join('');
    }
    return result;
  }    
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    let result = '';
    let currentOffsetIndex = 0;
    const normalizedKey = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      const normalizedChar = message[i].toUpperCase();
      if (normalizedChar >= 'A' && normalizedChar <= 'Z') {
        const offset = normalizedKey[currentOffsetIndex % normalizedKey.length].charCodeAt(0) - 'A'.charCodeAt(0);
        result += String.fromCharCode(((normalizedChar.charCodeAt(0) - offset - 65) % 26 + 26) % 26 + 65);
        currentOffsetIndex++;
      } else {
        result += normalizedChar;
      }
    }
    if (!this.direct) {
      result = result.split('').reverse().join('');
    }
    return result.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
