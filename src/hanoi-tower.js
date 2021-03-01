const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const secondsInAnHour = 3600;
  const moves = Math.pow(2, disksNumber) - 1;
  const moveSpeedInSeconds = secondsInAnHour / turnsSpeed;
  return { turns: moves, seconds: Math.floor(moves * moveSpeedInSeconds)};
};
