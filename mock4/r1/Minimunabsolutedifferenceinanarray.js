// Minimum absolute difference in a array Ended
// Description

// The absolute difference is the positive difference between two valuesaandb, is written|a-b|or|b-a|and they are equal. Ifa=2andb=3,|2-3|=|3-2|=1.

// Given an array of integers, find the minimum absolute difference between any two elements in the array.


// Input
// Input Format
// The first line contains a single integern, the size ofarr.

// The second line containsnspace-separated integers,arr[i].

// Constraints
// 2 <= n <= 10^5

// -10^9 <= arr[i] <= 10^9


// Output
// Output Format
// Print the minimum absolute difference found


// Sample Input 1 

// 3
// 3 -7 0
// Sample Output 1

// 3
// Hint

// The first line of input is the number of array elements. The array, [3,-7,0] There are three pairs to test: (3,-7), (-7,0), and (3,0). The absolute differences are: 10, 7 and 3 respectively

// Remember that the order of values in the subtraction does not influence the result. The smallest of these absolute differences is 3.


// Minimum absolute difference in a array - Editorial
// Difficulty:
// Easy

// Prerequisite:
// Greedy

// Problem Statement:
// The absolute difference is the positive difference between two valuesaandb, is written|a-b|or|b-a|and they are equal. Ifa=2andb=3,|2-3|=|3-2|=1.

// Given an array of integers, find the minimum absolute difference between any two elements in the array.

// Hint:
// The most obvious approach is find the minimum absolute difference between each number in the array and each other number in the array, and then take the minimum of those results. That approach is not ideal because we would need to find the difference between the first element and the n-1 elements to its right, the second element and the n-2 elements to its right, the third element and the n-3 elements to its right, and so on.

// Short Explanation:
// Instead, we can simply sort the array to ensure that the absolute difference between each element and its adjacent element(s) is minimal. Working with sorted data allows us to minimize the number of calculations by simply finding the difference between each pair of adjacent elements in the sorted array.

// Detailed Explanation:
// Sort the array ofnnumbers using a built-in method in your submission language of choice (you can write a sorting algorithm yourself, but built-in methods are almost always faster).

// Create a variable to track the running minimum absolute difference between any two elements and initialize it to some valid possible minimum (e.g., the absolute difference between the highest and lowest possible values foraiin the Constraints, the absolute difference between the first and last elements of the sorted array, etc.).

// Iterate through the array and calculate the absolute value of the difference between each pair of adjacent elements. You can alleviate the need to take the absolute value of the difference betweena[i]anda[i+1]by calculating the difference asa[i+1]-a[i]; this is because sorting ensures thataiis always≤ a[i+1], so the result of this calculation will always be positive.

// Check the absolute difference between each adjacent pair of elements against the running minimum absolute difference variable. If the absolute difference between some pair of adjacent elements is less than the value stored in the running minimum variable, set that pair's absolute difference as the new running minimum.

// Print the final value of the running minimum absolute difference variable.

// Pseudo Code
//     sort arr
//     for i in from 0 to n-2:
//         mini=minimum of (mini and | arr[i]-arr[i+1] | )

//     print mini
// Time Complexity:O(nlogn)

// Space Complexity:O(1)