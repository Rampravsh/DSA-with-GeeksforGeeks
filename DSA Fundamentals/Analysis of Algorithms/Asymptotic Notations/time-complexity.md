# Time Complexity

Time complexity is a measure of the amount of time an algorithm takes to run as a function of the length of the input. It's a way to analyze how the runtime of an algorithm grows as the input size grows.

## Why is Time Complexity Important?

- **Algorithm Comparison:** It helps in comparing the efficiency of different algorithms for solving the same problem.
- **Performance Prediction:** It provides an estimate of the running time of an algorithm for a given input size, which is crucial for the performance of applications.
- **Scalability:** It helps in understanding how an algorithm will perform as the input size increases, which is important for designing scalable systems.

## Common Time Complexities

Here are some of the most common time complexities, from fastest to slowest:

### O(1) - Constant Time
The running time of the algorithm is constant and does not depend on the input size.

**Example:** Accessing an element in an array by its index.
```javascript
function getElement(arr, index) {
  return arr[index]; // O(1)
}
```

### O(log n) - Logarithmic Time
The running time grows logarithmically with the input size. These algorithms are very efficient as the runtime increases slowly with the input size.

**Example:** Binary search in a sorted array.
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // Found
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Not found
}
```

### O(n) - Linear Time
The running time is directly proportional to the input size.

**Example:** Finding an element in an unsorted array.
```javascript
function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) { // O(n)
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
```

### O(n log n) - Linearithmic Time
This is a common time complexity for efficient sorting algorithms.

**Example:** Merge Sort and Heap Sort.
```javascript
// (Implementation of Merge Sort would go here)
```

### O(n^2) - Quadratic Time
The running time is proportional to the square of the input size. This is common for algorithms that involve nested iterations over the input.

**Example:** Bubble Sort, Insertion Sort, Selection Sort.
```javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) { // O(n)
    for (let j = 0; j < arr.length - i - 1; j++) { // O(n)
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

### O(2^n) - Exponential Time
The running time doubles with each addition to the input data set. These algorithms are very slow and should be avoided for large inputs.

**Example:** Recursive calculation of Fibonacci numbers.
```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // O(2^n)
}
```

### O(n!) - Factorial Time
The running time grows factorially with the input size. These are the slowest of all and are impractical for even small input sizes.

**Example:** Traveling Salesman Problem (brute-force solution).
```javascript
// (Implementation of TSP brute-force would go here)
```
