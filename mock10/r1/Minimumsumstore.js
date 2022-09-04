// Maximum Sum Score Ended
// Description

// You are given a 0-indexed integer array nums of length n.

// The sum score of nums at an index i where 0 <= i < n is the maximum of:

// The sum of the first i + 1 elements of nums.
// The sum of the last n - i elements of nums.
// Find the maximum sum score of nums at any index.


// Input
// Input Format

// The first line contains the number of elements, N

// The second line contains the elements of the array.

// Constraints

// 1<=N<=10^5

// -10^3<=A[i]<=10^3


// Output
// Print the maximum sum score of the array.


// Sample Input 1 

// 4
// 4 3 -2 5
// Sample Output 1

// 10
// Hint

// The sum score at index 0 is max(4, 4 + 3 + -2 + 5) = max(4, 10) = 10.
// The sum score at index 1 is max(4 + 3, 3 + -2 + 5) = max(7, 6) = 7.
// The sum score at index 2 is max(4 + 3 + -2, -2 + 5) = max(5, 3) = 5.
// The sum score at index 3 is max(4 + 3 + -2 + 5, 5) = max(10, 5) = 10.
// The maximum sum score of nums is 10.