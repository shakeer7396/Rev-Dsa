// Mark and toys Ended
// Description

// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

// Note: Each toy can be purchased only once.


// Input
// Input Format
// The first line contains two integers, n and k, the number of priced toys and the amount Mark has to spend.

// The next line contains n space-separated integers prices[i]

// Constraints
// 1 <= n <= 10^5

// 1 <= k <= 10^9

// 1 <= prices[i] <= 10^9


// Output
// Output Format
// Print the maximum number of toys


// Sample Input 1 

// 7 50
// 1 12 5 111 200 1000 10
// Sample Output 1

// 4
// Hint

// He can buy only 4 toys at most. These toys have the following prices: 1,12,5,10

// Mark and toys - Editorial
// Difficulty:
// Easy

// Prerequisite:
// Sorting

// Problem Statement:
// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

// Note: Each toy can be purchased only once.

// Hint:
// Since there is a restriction on the price limit, what kind of toys should mark buy?

// Short Explanation:
// The best way to buy toys is to buy all the cheapest toys

// Detailed Explanation:
// Given thatn<=10^5in the constraints, we must use an O(nlogn) or better algorithm to pass all test cases.

// Mark wants to buy the greatest number of toys, so he purchases them in increasing order of price.

// Sort the array of prices then keep an item count and a total cost (or decrement the initial cash by prices[count]) as you iterate through the sorted list of prices.

// Pseudo Code
//     sort(prices.begin(),prices.end());
//     int i=0;
//     while(i<prices.size()){
//         if(k>prices[i]){
//             k-=prices[i];
//         }
//         else{
//             return i;
//         }
//         i++;
//     }
//     return prices.size();
// Time Complexity:O(nlogn)

// Space Complexity:O(1)