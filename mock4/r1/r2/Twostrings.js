// Two strings Ended
// Description

// Given two strings, determine if they share a common substring. A substring may be as small as one character.


// Input
// Input Format
// The first line contains a single integer t, the number of test cases.

// The following t pairs of lines are as follows:

// The first line contains string s1.

// The second line contains string s2.

// Constraints
// s1 and s2 consist of characters in the range ascii[a-z].

// 1 <= t <= 10

// 1 <= |s1|,|s2| <= 10^5


// Output
// Output Format
// For each pair of strings, print YES or NO.


// Sample Input 1 

// 2
// hello
// world
// hi
// world
// Sample Output 1

// YES
// NO
// Hint

// We have t = 2 pairs to check:

// First testcase
// s1="hello",s2="world". The substrings "o" and "l" are common to both strings.

// Second testcase
// s1="hi",s2="world". s1 and s2 share no common substrings.


// Two strings - Editorial
// Difficulty:
// Easy

// Prerequisite:
// Maps

// Problem Statement:
// Given two strings, determine if they share a common substring. A substring may be as small as one character.

// Hint:
// Do you need to use brute force approach? Is there another way around to solve the problem.

// Short Explanation:
// There are two concepts involved in solving this challenge:

// Understanding that a single character is a valid substring.

// Deducing that we only need to know that the two strings have a common substring — we don't need to know what that substring is.

// Detailed Explanation:
// Thus, the key to solving this challenge is determining whether or not the two strings share a common character because if they have a common character then they have a common substring of lengh1.

// To do this, we create two sets,aandb, where each set contains the unique characters that appear in the string it's named after. Because sets don't store duplicate values, we know that the size of our sets will never exceed the26letters of the English alphabet. In addition, the small size of these sets makes finding the intersection very quick.

// If the intersection of the two sets is empty, we print NO on a new line; if the intersection of the two sets is not empty, then we know that stringsaandbshare one or more common characters and we print YES on a new line.

// Pseudo Code
//     vector<int>arr(26,0);
//     for(auto x : s1){
//         arr[x-'a']++;
//     }
//     for(auto x : s2){
//         if(arr[x-'a']>0){
//             return "YES";
//         }
//     }
//     return "NO"; 
// Time Complexity:O(n+m)

// Space Complexity:O(n+m)

// where n is the size of string s1 and m the size of string s2.