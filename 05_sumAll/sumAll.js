//generate an array with both arguments and every number in between
//use a loop and say IF less than max keep pushing i to the array after incrementing
//use a reduce callback function to sum them all up
//save that to a variable
//return the variable





const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
      sum += i;
    }
    return sum;
  };

// Do not edit below this line
module.exports = sumAll;
