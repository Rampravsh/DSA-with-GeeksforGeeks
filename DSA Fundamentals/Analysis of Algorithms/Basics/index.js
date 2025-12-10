// sum of n natural numbers
function sumOfNNaturalNumbers(n) {
  if (n <= 0) {
    return 0;
  }
  return n + sumOfNNaturalNumbers(n - 1);
}
// console.log(sumOfNNaturalNumbers(5)); // Output: 15

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(n) due to recursion stack

function sumOfNNaturalNumbers2(n) {
  return n * ((n + 1) / 2);
}

// time complexity: O(1)
// space complexity: O(1)

// console.log(sumOfNNaturalNumbers2(5));

function sumOfNNaturalNumbers3(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
    console.log(sum);
  }
  return sum;
}

// time complexity: O(n)
// space complexity: O(1)
// console.log(sumOfNNaturalNumbers3(5));

function sumOfNNaturalNumbers4(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      console.log("i:", i, "j:", j);
      sum = sum + 1;
      console.log(sum);
    }
  }
  return sum;
}

// time complexity: O(n^2)
// space complexity: O(1)
console.log(sumOfNNaturalNumbers4(5));
