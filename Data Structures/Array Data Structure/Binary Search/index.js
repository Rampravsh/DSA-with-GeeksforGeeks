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

//[Expected Approach] Using Binary Search - O(log(n)) Time and O(1) Space

//The square of a number increases as the number increases, so the square root of n must lie in a sorted (monotonic) range.
//If a number's square is more than n, the square root must be smaller.
//If it's less than or equal to n, the square root could be that number or greater.
//Because of this pattern, we can apply binary search in the range 1 to n to efficiently find the square root.

function floorSqrt2(n) {
  // initial search space
  let lo = 1,
    hi = n;
  let res = 1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    // if square of mid is less than or equal to n
    // update the result and search in upper half
    if (mid * mid <= n) {
      res = mid;
      lo = mid + 1;
    }

    // if square of mid exceeds n,
    // search in the lower half
    else {
      hi = mid - 1;
    }
  }

  return res;
}

// Driver Code
let n2 = 11;
console.log(floorSqrt2(n2));

//[Alternate Approach] Using Built In functions - O(log(n)) Time and O(1) Space

// We can directly use built in functions to find square root of an integer.
function floorSqrt3(n) {
  // square root using sqrt function, it returns
  // the double value, which is casted to integer
  let res = Math.floor(Math.sqrt(n));
  return res;
}

// Driver Code
let n3 = 11;
console.log(floorSqrt3(n3));

//[Alternate Approach] Using Formula Used by Pocket Calculators - O(1) Time and O(1) Space
function floorSqrt4(n) {
  // calculating square root using
  // mathematical formula
  let res = Math.floor(Math.exp(0.5 * Math.log(n)));

  // if square of res + 1 is less than or equal to n
  // then, it will be our answer
  if ((res + 1) * (res + 1) <= n) {
    res++;
  }

  return res;
}

// Driver Code
let n4 = 11;
console.log(floorSqrt4(n));
