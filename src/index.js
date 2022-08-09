module.exports = function toReadable (number) {

const ReadableNumbers = {
  '1': "one",
  '2': "two",
  '3': "three",
  '4': "four",
  '5': "five",
  '6': "six",
  '7': "seven",
  '8': "eight",
  '9': "nine",
  '10': "ten",
  '11': "eleven",
  '12': "twelve",
  '13': "thirteen",
  '14': "fourteen",
  '15': "fifteen",
  '16': "sixteen",
  '17': "seventeen",
  '18': "eighteen",
  '19': "nineteen",
  '20': "twenty",
  '30': "thirty",
  '40': "forty",
  '50': "fifty",
  '60': "sixty",
  '70': "seventy",
  '80': "eighty",
  '90': "ninety",
};

  if (number == 0) {
    return 'zero'
  };

 function findNumber (elem) {
    return ReadableNumbers[elem]
};

  if (number <= 20) {
    let n = findNumber(number)
    return n
  };

function RdblNmbr (el) {
  let hundreds = Math.floor(el/100);
  let twents = Math.floor(el%100);
  let tens = Math.floor(el%100/10)*10;
  let units = Math.floor(el%10);

    if ((hundreds > 0) && (tens >= 20) && (units > 0)) {
    console.log(findNumber(hundreds) + " hundred " + findNumber(tens) + " " + findNumber(units))
    return (findNumber(hundreds) + " hundred " + findNumber(tens) + " " + findNumber(units))
  }
    if ((hundreds > 0) && (tens == 0) && (units == 0)) {
      console.log(findNumber(hundreds) + " hundred")
      return (findNumber(hundreds) + " hundred")
  }
    if ((hundreds > 0) && (tens <= 20)) {
      console.log(findNumber(hundreds) + " hundred " + findNumber(twents))
      return (findNumber(hundreds) + " hundred " + findNumber(twents))
  }
    if ((hundreds > 0) && (units == 0) ) {
      console.log(findNumber(hundreds) + " hundred " + findNumber(tens))
      return (findNumber(hundreds) + " hundred " + findNumber(tens))
  }
    if (units == 0) {
      console.log(findNumber(tens))
      return (findNumber(tens))
  }
    if (units > 0) {
      console.log(findNumber(tens) + " " + findNumber(units))
      return (findNumber(tens) + " " + findNumber(units))
  } 






};





  let n = RdblNmbr(number)
  return n
}
