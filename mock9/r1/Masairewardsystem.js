// Masai reward system Ended
// Description

// There is a new policy for the reward system for a contest here at Masai.

// Whenever a person solves a problem, that person gets a coin.

// The first person to solve a problem gets an additional coin.

// A contest has 26 problems, labelled A, B, C, ..., Z. You are given the order of solved problems in the contest, denoted as a string s, where the i-th character indicates that the problem si has been solved by some person. No person will solve the same problem twice.

// Determine the total number of balloons that everyone received (combined).

// Note that some problems may be solved by none of the people.


// Input
// Input Format
// The first line contains a single integer t — the number of test cases.

// The first line of each test case contains a single integer n — the length of the string.

// The second line of each test case contains a string s of length n consisting of uppercase English letters, denoting the order of solved problems.

// Constraints
// 1 ≤ t ≤ 100

// 1 ≤ n ≤ 50


// Output
// Output Format
// For each test case, output a single integer — the total number of balloons that everyone received.


// Sample Input 1 

// 2
// 3
// ABA
// 1
// A
// Sample Output 1

// 5
// 2
// Hint

// First testcase
// In the first test case, 5 balloons are given out:

// Problem A is solved. That person receives 2 balloons: one because they solved the problem, an an additional one because they are the first one to solve problem A.

// Problem B is solved. That person receives 2 balloons: one because they solved the problem, an an additional one because they are the first one to solve problem B.

// Problem A is solved. That person receives only 1 balloon, because they solved the problem. Note that they don't get an additional balloon because they are not the first one to solve problem A.

// The total number of balloons given out is 2+2+1=5.

// Second testcase
// In the second test case, there is only one problem solved. The team who solved it receives 2 balloons: one because they solved the problem, an an additional one because they are the first one to solve problem A.