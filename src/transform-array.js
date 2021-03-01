const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!(Array.isArray(arr))) {
        throw new Error();
    }

    let discardNext = false;
    let newArr = [];
    const length = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--double-next') {
          discardNext = false;
            if (i + 1 < length) {
                newArr.push(arr[i + 1]);
            }
        } else if (arr[i] === '--double-prev') {
            if ((i - 1 > 0) && !discardNext) {
                newArr.push(arr[i - 1]);
            }
            discardNext = false;
        } else if (arr[i] === '--discard-next') {
            discardNext = true;
            i++;
        } else if (arr[i] === '--discard-prev') {
            if(!discardNext) {
              newArr.pop();
            }
            discardNext = false;
        } else {
            newArr.push(arr[i]);
            discardNext = false;
        }
    }
    return newArr;
}