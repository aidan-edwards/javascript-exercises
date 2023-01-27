
// <!-- To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.

// Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9). -->

// <!-- Because we are human, we want the result temperature to be rounded to one decimal place:
// i.e., `convertToCelsius(100)` should return `37.8` and not `37.77777777777778`. -->


const convertToCelsius = function(myTemp) {
  let myNum = ((myTemp - 32) * .5556)

  return Math.round(myNum * 10) / 10;
};

const convertToFahrenheit = function(myTemp) {
  let myNum = (myTemp * 1.8 +32)

  return Math.round(myNum * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
