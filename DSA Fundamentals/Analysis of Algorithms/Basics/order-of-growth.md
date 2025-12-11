
# Order of Growth

The order of growth is a concept used to describe the rate at which the running time of an algorithm increases as the size of the input grows. It helps in comparing the efficiency of different algorithms.

## Common Orders of Growth

Here are some common orders of growth, from fastest to slowest:

-   **O(1) - Constant Time:** The running time is constant and does not depend on the input size.
    ```javascript
    function isEven(n) {
        return n % 2 === 0;
    }
    ```
-   **O(log n) - Logarithmic Time:** The running time grows logarithmically with the input size. This is common in algorithms that divide the problem into smaller pieces in each step, like binary search.
    ```javascript
    function binarySearch(arr, key) {
        let low = 0;
        let high = arr.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === key) {
                return mid;
            } else if (arr[mid] < key) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }
    ```
-   **O(n) - Linear Time:** The running time is directly proportional to the input size.
    ```javascript
    function findMax(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    ```
-   **O(n log n) - Linearithmic Time:** This is common in sorting algorithms like Merge Sort and Heap Sort.
-   **O(n^2) - Quadratic Time:** The running time is proportional to the square of the input size. This is common in algorithms that have nested loops.
    ```javascript
    function printPairs(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                console.log(arr[i], arr[j]);
            }
        }
    }
    ```
-   **O(2^n) - Exponential Time:** The running time doubles with each addition to the input size. This is common in recursive solutions that solve a problem of size n by recursively solving two smaller problems of size n-1.

-   **O(n!) - Factorial Time:** The running time grows factorially with the input size. This is common in algorithms that need to find all permutations of a set.
