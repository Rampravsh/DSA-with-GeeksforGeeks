// ✅✅ Given an integer num, return a string of its base 7 representation.

// var convertToBase7 = function (num) {
//   let ans = 0;
//   let power = 1;
//   while (num !== 0) {
//     let digit = num % 7;
//     ans += digit * power;
//     power *= 10;
//     num = Math.round(num / 7);
//     console.log(num);
//   }
//   return ans;
// };

// // console.log(convertToBase7(-7));

// // console.log(Math.floor(Math.abs(-1.56)));

// const num = -1
// console.log(num.toString(16));

//✅✅ 405. Convert a Number to Hexadecimal

var toHex = function (num) {
  const hexDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  if (num < 0) {
    num += Math.pow(2, 32);
  }
  let ans = "";

  while (num !== 0) {
    console.log("num:", num);
    ans = hexDigit[num % 16] + ans;
    num = Math.floor(num / 16);
    console.log("ans:", ans);
    console.log("num:", num);
  }
  return ans;
};

// console.log(toHex(26));
// console.log(toHex(1));
// console.log(toHex(-32));
// console.log(toHex(-2));
// console.log(toHex(-5252));
