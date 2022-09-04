// Find The Number Ended
// Description

// Given an array of N integers, you have to find the largest number whose Inverse* is also present in the array, and if no number is found return -1.

// Inverse
// Multiply the given number with -1.
// Ex => Inverse of 5 = 5*(-1) = -5.


// Input
// Input Format

// First-line contains T, no of test cases.

// First-line of each test case contains N, the size of the array.

// Second-lineof each test case containsN spaced integers, elements of an array.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^6

// 0 <= abs(A[i]) <= 10^8


// Output
// For each test case print the answer if exists otherwise print -1.


// Sample Input 1 

// 2
// 6
// 4 5 -1 4 8 -8
// 5
// 2 4 -5 6 -1
// Sample Output 1

// 8
// -1
// Hint

// In the first test case, both 4 and 8 have their inverse present in the array but as we have to return the largest of them so the answer is 8.

// In the second test case, no number is present in an array whose inverse is also present so the answer is -1.