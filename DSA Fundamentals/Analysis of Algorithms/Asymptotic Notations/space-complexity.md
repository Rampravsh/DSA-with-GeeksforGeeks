# Space Complexity

Space complexity is a measure of the amount of memory an algorithm needs to run as a function of the length of the input. It includes both the space used by the input and any additional memory (auxiliary space) used by the algorithm.

## Auxiliary Space vs. Space Complexity

- **Auxiliary Space:** This is the extra space or temporary space used by an algorithm. It does not include the space taken up by the inputs.
- **Space Complexity:** This is the total space taken by the algorithm with respect to the input size. It includes both auxiliary space and the space used by the input.

**Space Complexity = Auxiliary Space + Space used by input**

In the context of asymptotic analysis, we often focus on the auxiliary space because the input space is a given. However, it's important to be clear about which one is being discussed.

## Common Space Complexities

### O(1) - Constant Space
The algorithm requires a fixed amount of memory regardless of the input size.

**Example:** Swapping two numbers.
```javascript
function swap(a, b) {
  let temp = a; // O(1) auxiliary space
  a = b;
  b = temp;
}
```
The space used by the `temp` variable is constant.

### O(n) - Linear Space
The space required by the algorithm is directly proportional to the input size.

**Example:** Creating a copy of an array.
```javascript
function copyArray(arr) {
  let newArr = []; // O(n) auxiliary space
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
```
The `newArr` grows with the size of the input `arr`.

### O(log n) - Logarithmic Space
The space required grows logarithmically with the input size. This often occurs in recursive algorithms where the recursion depth is logarithmic.

**Example:** Recursive binary search.
```javascript
function binarySearchRecursive(arr, target, left, right) {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}
```
The space complexity is `O(log n)` because of the recursion stack. The depth of the recursion is `log n`.

### O(n^2) - Quadratic Space
The space required is proportional to the square of the input size. This can happen when creating a 2D array or matrix.

**Example:** Creating an adjacency matrix for a graph.
```javascript
function createAdjacencyMatrix(edges, n) {
  let matrix = Array(n).fill(0).map(() => Array(n).fill(0)); // O(n^2) space
  for (let edge of edges) {
    let u = edge[0];
    let v = edge[1];
    matrix[u][v] = 1;
    matrix[v][u] = 1; // For an undirected graph
  }
  return matrix;
}
```
The `matrix` is of size `n x n`.
