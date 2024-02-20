const convertToCelsius = function(fah) {
  cel = (fah - 32) * 5 / 9
  cel = Math.round(cel * 10) / 10
  return cel
};

const convertToFahrenheit = function(cel) {
  fah = cel * 9 / 5 + 32
  // round it to one decimal point
  fah = Math.round(fah * 10) / 10
  return fah
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
