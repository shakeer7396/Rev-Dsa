// Longest increasing path in a matrix Ended
// Description

// Given anm x nintegersmatrix, return the length of the longest increasing path inmatrix.

// From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).


// Input
// Input Format
// The first line of input contains 2 integers m and n - the dimensions of the matrix.

// The following m lines contain the description of the board.

// The following m lines each contain n integers.

// The ith (1<=i<=m) line contains n integers, the jth (1<=j<=n) of which ismatrix[i][j]

// Constraints
// m == matrix.length

// n == matrix[i].length

// 1 <= m, n <= 200

// 0 <= matrix[i][j] <= 2^31 - 1


// Output
// Output Format
// Output the length of the longest increasing path in matrix.


// Sample Input 1 

// 3 3
// 9 9 4
// 6 6 8
// 2 1 1
// Sample Output 1

// 4
// Sample Input 2 

// 3 3
// 3 4 5
// 3 2 6
// 2 2 1
// Sample Output 2

// 4
// Hint

// First testcase
// The longest increasing path is [1, 2, 6, 9].

// 1.PNG
//https://oj.masaischool.com/public/upload/4c81390f8f.png

// Second testcase
// The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

// 2.PNG
//https://oj.masaischool.com/public/upload/f95297056b.png