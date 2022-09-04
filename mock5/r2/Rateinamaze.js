// Rat in a maze Ended
// Description

// Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 at a cell in the matrix represents that rat can be travel through it.

// Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell.


// Input
// Input Format
// The first line contains an integer n - the dimension of the maze

// The next n lines each contain n integers

// The ith line contains n integers, the jth of which is m[i][j]

// Constraints
// 2 <= n <= 5

// 0 <= m[i][j] <= 1


// Output
// Output Format
// Print the list of paths in lexicographically increasing order, if there is no possible path print -1.


// Sample Input 1 

// 4
// 1 0 0 0
// 1 1 0 1
// 1 1 0 0 
// 0 1 1 1
// Sample Output 1

// DDRDRR DRDDRR
// Hint

// The rat can reach the destination at (3, 3) from (0, 0) by two paths - DRDDRR and DDRDRR, when printed in sorted order we get DDRDRR DRDDRR.