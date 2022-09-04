// Making anagrams Ended
// Description

// A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

// Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions required to make a and b anagrams. Any characters can be deleted from either of the strings.


// Input
// Input Format
// The first line contains a single string, a.

// The second line contains a single string, b.

// Constraints
// 1 <= |a|,|b| <= 2*10^5

// The strings a and b consist of lowercase English alphabetic letters, ascii[a-z].


// Output
// Output Format
// Print the minimum total characters that must be deleted


// Sample Input 1 

// cde
// abc
// Sample Output 1

// 4
// Hint

// Delete the following characters from the strings make them anagrams:

// Remove d and e from cde to get c.

// Remove a and b from abc to get c.

// It takes 4 deletions to make both strings anagrams.



// Making anagrams - Editorial
// Difficulty:
// Easy

// Prerequisite:
// String

// Problem Statement:
// A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

// Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions required to make a and b anagrams. Any characters can be deleted from either of the strings.

// Hint:
// Two strings are anagrams of each other if and only if the frequency of every character in both the strings are same

// Short Explanation:
// Since the order of these characters does not matter, look at it this way. The two string can be assumed to be generated from a 3rd string by adding some character to it arranging it thereafter.

// For example- let's consider string a="adbc" and string b="cefd".

// Let string temp="cd" be a third string.

// Now if we add characters 'a' and 'b' to string temp and rearrange it we get string a.

// Similarly if we add characters 'e' and 'f' to string temp and rearrange it we get string b.

// So we can conclude that string temp is that 3rd string using which we can make both a and b by adding some characters and rearranging.

// We have to find the largest string (maximum number of characters) from which we can create a and b.

// And the number of characers required to be deleted from a and b to make such string is our answer.

// Detailed Explanation:
// Two strings, a and b, will be anagrams of one another if they share all of the same characters and each character has the same frequency in both strings. Keep a count array for each string that stores the number of occurrences of each of character. Suppose character c occurs x times in string a and y times in string b; in this case, we'll have to perform |x-y| deletions for all of the characters.

// Pseudo Code
//     Create map/dicionary with key:value pair as character data type:integer data type- cnta,cntb

//     for i from 0 to size of a-1:
//         increment the value of character a[i] as key in cnta

//     for i from 0 to size of b-1:
//         increment the value of character b[i] as key in cntb

//     ans=0

//     for var from 'a' to 'z':
//         ans=ans+|cnta[var]-cntb[var]|

//     return ans
// Time Complexity:O(n+m)

// Space Complexity:O(n+m)