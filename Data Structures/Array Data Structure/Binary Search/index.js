//Problems
//1️⃣Given a positive integer n, find its square root. If n is not a perfect square, then return floor of √n.

//[Naive Approach] Using a loop - O(sqrt(n)) Time and O(1) Space
//Start from 1 and square each number until the square exceeds the given number.
//The last number whose square is less than or equal to n is the answer
function floorSqrt(n) {
  let res = 1;
  while (res * res <= n) {
    res++;
  }
  return res - 1;
}

console.log(floorSqrt(12345667657678));
