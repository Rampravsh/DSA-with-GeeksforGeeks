
# Worst, Average, and Best Cases

In algorithm analysis, we often consider the running time of an algorithm in three different scenarios: the worst case, the average case, and the best case. This helps us to understand the performance of an algorithm under different conditions.

## Best Case

The **best-case scenario** for an algorithm is the arrangement of data for which the algorithm performs best. The best-case running time is the shortest running time for any input of a given size.

For example, in a linear search, the best case is when the target element is the first element of the array. The algorithm runs in O(1) time.

## Average Case

The **average-case scenario** for an algorithm is the expected performance of the algorithm over all possible inputs. It assumes a uniform distribution of inputs.

For a linear search, the average case is when the target element is somewhere in the middle of thearray. The algorithm would have to search through half of the elements, so the average-case running time is O(n).

## Worst Case

The **worst-case scenario** for an algorithm is the arrangement of data for which the algorithm performs worst. The worst-case running time is the longest running time for any input of a given size. It gives an upper bound on the running time.

For a linear search, the worst case is when the target element is the last element of the array or not in the array at all. In this case, the algorithm has to scan through all the elements, so the worst-case running time is O(n).

### Example: Linear Search

```javascript
function linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i; // Found the key
        }
    }
    return -1; // Key not found
}

const myArray = [3, 9, 4, 1, 7, 5];

// Best Case: key is the first element
linearSearch(myArray, 3); // O(1)

// Average Case: key is somewhere in the middle
linearSearch(myArray, 4); // O(n)

// Worst Case: key is the last element or not in the array
linearSearch(myArray, 5); // O(n)
linearSearch(myArray, 10); // O(n)
```
