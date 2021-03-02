const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  function repeatString(string = '', stringSeparator, times = 1) {
    let result = '';
    for(let i = 0; i < times; i++) {
      result += string;
      if (i < times - 1) {
        result += stringSeparator;
      }
    }
    return result;
  }
  const { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' } = options;
  const additionResult = repeatString(addition, additionSeparator, additionRepeatTimes);
  return repeatString(str + additionResult, separator, repeatTimes);
};
  