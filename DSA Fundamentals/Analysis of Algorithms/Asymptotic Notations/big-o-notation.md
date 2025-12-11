# Asymptotic Notations: Big O, Theta (Θ), and Big Omega (Ω)

Asymptotic notations are used to describe the time complexity of an algorithm. They provide a way to classify algorithms based on their running time or space requirements as the input size grows.

## Big-O Notation (O)

Big-O notation represents the **upper bound** of the running time of an algorithm. It gives the worst-case time complexity.

A function `f(n)` is said to be `O(g(n))` if there exist positive constants `c` and `n0` such that:
`0 ≤ f(n) ≤ c * g(n)` for all `n ≥ n0`

In simple terms, for large values of `n`, the running time `f(n)` is at most `c * g(n)`.

**Example:**
If `f(n) = 2n + 3`, then `f(n)` is `O(n)`.
We can choose `c = 3` and `n0 = 3`.
For `n ≥ 3`, `2n + 3 ≤ 3n`.

## Theta (Θ) Notation

Theta notation represents the **tight bound** of the running time of an algorithm. It gives the average-case time complexity.

A function `f(n)` is said to be `Θ(g(n))` if there exist positive constants `c1`, `c2`, and `n0` such that:
`0 ≤ c1 * g(n) ≤ f(n) ≤ c2 * g(n)` for all `n ≥ n0`

In simple terms, for large values of `n`, the running time `f(n)` is "sandwiched" between `c1 * g(n)` and `c2 * g(n)`.

**Example:**
If `f(n) = 2n + 3`, then `f(n)` is `Θ(n)`.
We can choose `c1 = 2`, `c2 = 3`, and `n0 = 3`.
For `n ≥ 3`, `2n ≤ 2n + 3 ≤ 3n`.

## Big-Omega (Ω) Notation

Big-Omega notation represents the **lower bound** of the running time of an algorithm. It gives the best-case time complexity.

A function `f(n)` is said to be `Ω(g(n))` if there exist positive constants `c` and `n0` such that:
`0 ≤ c * g(n) ≤ f(n)` for all `n ≥ n0`

In simple terms, for large values of `n`, the running time `f(n)` is at least `c * g(n)`.

**Example:**
If `f(n) = 2n + 3`, then `f(n)` is `Ω(n)`.
We can choose `c = 2` and `n0 = 1`.
For `n ≥ 1`, `2n ≤ 2n + 3`.
