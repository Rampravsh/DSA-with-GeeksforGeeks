# Basics of Analysis of Algorithms

This section covers the fundamental concepts of analyzing algorithms.

## What is an Algorithm?

An algorithm is a finite set of well-defined instructions to solve a particular problem. It takes a set of inputs and produces a desired output.

## Why is Analysis of Algorithms Important?

Algorithm analysis helps us determine the efficiency of an algorithm. It's crucial for a few reasons:

*   **Performance:** To predict the performance of an algorithm and compare it with others.
*   **Optimization:** To identify bottlenecks and areas for improvement.
*   **Scalability:** To understand how an algorithm will perform as the input size grows.

## Criteria for Analyzing Algorithms

We typically analyze algorithms based on two main criteria:

1.  **Time Complexity:** The amount of time an algorithm takes to run as a function of the input size.
2.  **Space Complexity:** The amount of memory an algorithm uses as a function of the input size.

## Rate of Growth

The rate of growth of a function describes how fast the function's output grows as the input grows. In algorithm analysis, we are interested in the rate of growth of the time or space complexity.

## Asymptotic Notations

To represent the rate of growth, we use asymptotic notations. These notations provide a way to describe the performance of an algorithm in a formal and abstract way. The most common notations are:

*   **Big-O Notation (O):** Describes the upper bound (worst-case scenario).
*   **Omega Notation (Ω):** Describes the lower bound (best-case scenario).
*   **Theta Notation (Θ):** Describes the tight bound (average-case scenario).

## Asymptotic Notations Graph

The following graph shows a comparison of the time complexities found in the `index.js` file's functions.

```
Time Complexity Growth

      |
      | O(n^2) - sumOfNNaturalNumbers4
      | O(n)  - sumOfNNaturalNumbers, sumOfNNaturalNumbers3
      | O(1)  - sumOfNNaturalNumbers2
      |
      ---------------------> Input Size (n)

```

### Explanation

*   **O(1) - Constant Time:** Represented by `sumOfNNaturalNumbers2`. The execution time of this function remains constant regardless of the input size `n`. It's the most efficient.
*   **O(n) - Linear Time:** Represented by `sumOfNNaturalNumbers` and `sumOfNNaturalNumbers3`. The execution time grows linearly with the input size `n`.
*   **O(n^2) - Quadratic Time:** Represented by `sumOfNNaturalNumbers4`. The execution time grows quadratically with the input size `n`. This is less efficient for large inputs compared to O(1) and O(n).

This visualization helps in understanding how the choice of algorithm can drastically affect performance as the input size increases.
