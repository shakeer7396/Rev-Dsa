// Money vs Boss Ended
// Description

// You are very low on budget and want to spend minimum amount possible.

// You are going for a meeting with your boss and to reach there you have to climb a flight of stairs, but there is a catch.

// When you reach a stair, to go up from there you have to pay the price written on that stair and after that you have two options:

// You can go from step i to step i+1 or

// You can go from step i to step i+2

// Your boss also gives you an option, i.e. you can start from the stair at index 0 or index 1

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase.

// Return the minimum cost to reach the top of the floor.


// Input
// Input Format
// The first line contains an integer, n, the number of stairs.

// The second line contains n space separated integers, the ith (0 <= i <= n-1) of which is the price writen on the ith step.

// Constraints
// 1 <= n <= 10^5

// 0 <= cost[i] <= 999


// Output
// Output Format
// Print the minimum cost to reach the top of the floor


// Sample Input 1 

// 3
// 10 15 20
// Sample Output 1

// 15
// Sample Input 2 

// 10
// 1 100 1 1 1 100 1 1 100 1
// Sample Output 2

// 6
// Hint

// You will start at index 1.

// Pay 15 and climb two steps to reach the top.The total cost is 15.
// For the second test case
// You will start at index 0.

// Pay 1 and climb two steps to reach index 2.
// Pay 1 and climb two steps to reach index 4.
// Pay 1 and climb two steps to reach index 6.
// Pay 1 and climb one step to reach index 7.
// Pay 1 and climb two steps to reach index 9.
// Pay 1 and climb one step to reach the top.The total cost is 6.