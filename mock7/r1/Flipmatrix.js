// Flip Matrix Ended
// Description

// Given an n x n binary matrix, flip the matrix horizontally, then invert it, and print the resulting matrix.

// To flip the matrix horizontally means that each row of the matrix is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].

// To invert the matrix means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].


// Input
// Input Format

// First-line contains integer n representing the number of rows and columns of the binary matrix arr.

// Following n lines contains n-integers.

// Constraints

// 1 <= n <= 100

// 0 <= arr[i][j] <= 1


// Output
// Print the required matrix, n lines containing n elements.


// Sample Input 1 

// 3 
// 1 1 0
// 1 0 1
// 0 0 0 
// Sample Output 1

// 1 0 0
// 0 1 0
// 1 1 1
// Hint

// See we will firstly flip each row of the matrix,

// So the resultant matrix is

// 0 1 1
// 1 0 1
// 0 0 0

// Now we will invert each row.

// Resultant matrix will be,

// 1 0 0
// 0 1 0
// 1 1 1