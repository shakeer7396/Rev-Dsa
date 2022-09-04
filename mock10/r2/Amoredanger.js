// Armor Damage Ended
// Description

// You are playing a game that has n levels numbered from 0 to n - 1. You are given a 0-indexed integer array damage where damage[i] is the amount of health you will lose to complete the ith level.

// You are also given an integer armor. You may use your armor ability at most once during the game on any level which will protect you from at most armor damage.

// You must complete the levels in order and your health must be greater than 0 at all times to beat the game.

// Find the minimum health you need to start with to beat the game.


// Input
// Input Format

// The first line contains the number of floors, N and the armor , K

// The second line contains the damage on each floor.

// Constraints

// 1<=N<=10^5

// 1<=K<=10^5

// 1<=damage[i]<=10^5


// Output
// Print the minimum health required.


// Sample Input 1 

// 4 4
// 2 7 4 3
// Sample Output 1

// 13
// Hint

// One optimal way to beat the game starting at 13 health is:
// On round 1, take 2 damage. You have 13 - 2 = 11 health.
// On round 2, take 7 damage. You have 11 - 7 = 4 health.
// On round 3, use your armor to protect you from 4 damage. You have 4 - 0 = 4 health.
// On round 4, take 3 damage. You have 4 - 3 = 1 health.
// Note that 13 is the minimum health you need to start with to beat the game.