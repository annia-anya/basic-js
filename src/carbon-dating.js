const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  const sampleActivityParsed = parseFloat(sampleActivity);
  if (!sampleActivityParsed || sampleActivityParsed < 0) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityParsed) / k);
  if (result < 0) {
    return false;
  }
  return result;
};
