// Frog Jumps II Ended
// Description

// There are N stones, numbered 1,2,…,N. For each i (1≤i≤N), the height of Stone i is hi​ .

// There is a frog who is initially on Stone 1. He will repeat the following action some number of times to reach Stone N:

// If the frog is currently on Stone i, jump to one of the following: Stone i+1,i+2,…,i+K. Here, a cost of ∣hi​ − hj∣ is incurred, where j is the stone to land on. Find the minimum possible total cost incurred before the frog reaches Stone N.


// Input
// Input Format

// The first line contains the numbers N and K

// The second line contains the heights of the stones

// Constraints

// 1<=N<=10^5

// 1<=K<=100

// 1<=hi<=10^4


// Output
// Print the minimum cost incurred before the frog reaches Stone N


// Sample Input 1 

// 5 3
// 10 30 40 50 20
// Sample Output 1

// 30
// Hint

// If we follow the path 1 → 2 → 5, the total cost incurred would be ∣10−30∣+∣30−20∣=30.