// ✅✅binary to decimal
// function binaryToDecimal(n) {
//   let i = 0;
//   let ans = 0;
//   console.log(n);
//   while (n > 0) {
//     let lastDigits = Math.round(n % 10);
//     console.log("lastdigits: ", lastDigits);
//     ans += lastDigits * 2 ** i;
//     console.log("ans :", ans);
//     n = Math.round(n / 10);
//     console.log("bacha hua n: ", n);
//     i++;
//     console.log("value of i:", i);
//   }
//   return ans;
// }

// console.log(binaryToDecimal(1010));

// ✅ Better way for binary to decimal
// function binaryToDecimal(binaryString) {
//   // Use parseInt with a radix of 2 to convert binary string to decimal number
//   return parseInt(binaryString, 2);
// }

// console.log(binaryToDecimal("1010.01"));

// ✅✅ decimal to binary

// function decimalToBinary(n) {
//   let power = 1;
//   ans = 0;
//   console.log(n);
//   while (n > 0) {
//     let parityDigit = n % 2;
//     console.log("parityDigit:", parityDigit);
//     ans += parityDigit * power;
//     power *= 10;
//     n = Math.floor(n / 2);
//     console.log("value of n :", n);
//   }
//   return ans;
// }

// console.log(decimalToBinary(10));

// ✅ Better way for decimal to binary
// function decimalToBinary(n) {
//   // Use the toString method with a radix of 2 to convert a number to its binary string representation
//   return n.toString(2);
// }
// console.log(decimalToBinary(10.25));

// ✅✅ Function to convert binary with a fractional part to decimal
// function binaryWithFractionToDecimal(binaryString) {
//   // Check if there is a fractional part
//   if (binaryString.includes(".")) {
//     const [integerPart, fractionalPart] = binaryString.split(".");

//     // Convert the integer part using the existing method
//     const integerValue = parseInt(integerPart, 2);

//     // Convert the fractional part
//     let fractionalValue = 0;
//     for (let i = 0; i < fractionalPart.length; i++) {
//       const digit = parseInt(fractionalPart[i]);
//       console.log("digit:", digit);
//       // For each digit after the '.', calculate its value as digit * 2^(-(i+1))
//       fractionalValue += digit * Math.pow(2, -(i + 1));
//     }

//     // Return the sum of the integer and fractional parts
//     return integerValue + fractionalValue;
//   } else {
//     // If no fractional part, just use the standard integer conversion
//     return parseInt(binaryString, 2);
//   }
// }

// console.log(
//   'binaryWithFractionToDecimal("1010.101"):',
//   binaryWithFractionToDecimal("1010.101")
// ); // Expected: 10.625
// console.log(
//   'binaryWithFractionToDecimal("1101.11"):',
//   binaryWithFractionToDecimal("1101.11")
// ); // Expected: 13.75
// console.log(
//   'binaryWithFractionToDecimal("1010"):',
//   binaryWithFractionToDecimal("1010")
// ); // Expected: 10

