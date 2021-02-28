const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const cat = '^^';
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === cat) {
        count++;
      }
    }
  }
  return count;
};
