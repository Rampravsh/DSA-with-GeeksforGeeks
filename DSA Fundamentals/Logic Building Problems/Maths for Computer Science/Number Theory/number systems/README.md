# Number Systems and Conversions

This document covers the fundamental concepts of different number systems used in computer science and the methods for converting numbers between them.

## 1. Introduction to Number Systems

A number system is a systematic way to represent numbers with symbolic characters and uses a base value to conveniently group numbers in compact form. The most common number systems are:

-   **Decimal (Base-10):** Uses 10 digits (0-9). This is the system we use in everyday life.
-   **Binary (Base-2):** Uses 2 digits (0 and 1). This is the fundamental language of computers.
-   **Octal (Base-8):** Uses 8 digits (0-7).
-   **Hexadecimal (Base-16):** Uses 16 symbols (0-9 and A-F).

## 2. Number System Conversions

### Decimal to Other Bases

-   **Decimal to Binary:** To convert a decimal number to binary, repeatedly divide the number by 2 and record the remainders. The binary representation is the sequence of remainders read from the bottom up.
-   **Decimal to Octal:** Repeatedly divide the number by 8. The octal representation is the sequence of remainders in reverse order.
-   **Decimal to Hexadecimal:** Repeatedly divide the number by 16. The hexadecimal representation is the sequence of remainders in reverse order, where remainders 10-15 are represented by A-F.

### Other Bases to Decimal

-   **Binary to Decimal:** Multiply each binary digit by 2 raised to the power of its position (starting from 0 on the right). Sum all the results.
-   **Octal to Decimal:** Multiply each octal digit by 8 raised to the power of its position. Sum the results.
-   **Hexadecimal to Decimal:** Multiply each hexadecimal digit by 16 raised to the power of its position. Sum the results.

### Conversions Between Non-Decimal Bases

-   **Binary to Octal:** Group binary digits into sets of three from the right. Convert each group to its octal equivalent.
-   **Binary to Hexadecimal:** Group binary digits into sets of four from the right. Convert each group to its hexadecimal equivalent.
-   **Octal to Binary:** Convert each octal digit to its 3-digit binary equivalent.
-   **Hexadecimal to Binary:** Convert each hexadecimal digit to its 4-digit binary equivalent.

The `index.js` file in this directory will contain JavaScript implementations for these conversion functions.
