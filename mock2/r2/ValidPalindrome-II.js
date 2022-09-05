// Valid palindrome II Ended
// Description

// Ankush and sachin are friends. Ankush had a string which he "claimed" to be a palindrome, but Ankush "claims" Sachin added one character to the string now.

// But you don't trust Ankush, you want to find out if he was lying about having a palindrome string.

// Note: If Sachin would've added a character to the string then after removing the character the string could be or could not be a palindrome, but since Ankush's  "claims" sachin added a character, it is also possible that sachin did not add a character.

// So, find out if you can retrieve a palindrome string by deleting at most one character.


// Input
// Input Format
// The input consists of multiple testcases.

// The first line contains an integer t - the number of testcases.

// The next t lines each contain the string s.

// Constraints
// 1 <= t <= 100

// 1 <= |s| <= 10^5


// Output
// Output Format
// Print YES if you can retrieve a palindrome string by deleting at most 1 character, else NO


// Sample Input 1 

// 3
// aba
// abca
// abc
// Sample Output 1

// YES
// YES
// NO
// Hint

// First testcase
// You can get a palindrome by either not deleting any character or by deleting the character 'b'.

// Second testcase
// You can get a palindrome by either deleting the character 'c' or by deleting the character 'b'.

// Third testcase
// You can not get a palindrome string by deleting atmost one character

// Valid palindrome II - Editorial
// Difficulty:
// Medium

// Prerequisite:
// String

// Problem Statement:
// Ankush and sachin are friends. Ankush had a string which he "claimed" to be a palindrome, but Ankush "claims" Sachin added one character to the string now.

// But you don't trust Ankush, you want to find out if he was lying about having a palindrome string.

// Note: If Sachin would've added a character to the string then after removing the character the string could be or could not be a palindrome, but since Ankuhsh "claims" sachin added a character, it is also possible that sachin did not add a character.

// So, find out if you can retrieve a palindrome string by deleting at most one character.

// Hint:
// The main idea to solve this problem is to use Palindrome Checking, from the start and back sides of the input string.
// Short Explanation:
// Since the time complexity is O(n) ten the best approach would be two pointers, one at the start and one at the end, from there if the characters at the two indexes are same then increment the starting one and decrement the latter one. If they are not the same, then you have to delete one of these characters to get a palindrome, check if the string is palindrome for the both the cases.

// Detailed Explanation:
// Initialize l = 0, and r = n – 1, where n = length of the string.

// Iterate till characters s[l] and s[r] are equal while, l must be less than or equal to r.

// Now, whenever, characters at the lth and rth position are unequal, we need to delete either the lth character or rth character of the input string.

// So, there are two cases:

// If the input string is already a palindrome string otherwise,

// If S(l,r-1) is a palindrome string or S(l+1,r) is a palindrome string.

// Note that l and r are the indexes where characters differ.

// Return true, of any of the cases are true in 5, otherwise false.

// Pseudo Code
//     bool isPal(ll l,ll r,string s){
//         while(l<r){
//             if(s[l]!=s[r]){
//                 return false;
//             }
//             l++;r--;
//         }
//         return true;
//     }
//     bool validPalindrome(string s) {
//         ll l = 0,r = s.length() - 1;
//         while(l<r and s[l]==s[r]){
//             l++;r--;
//         }
//         return isPal(l+1,r,s) or isPal(l,r-1,s);
//     }

// Time Complexity:O(n)

// Space Complexity:O(1)


let str="abca"
let N=str.length
let left=0
let right =N-1
function CheckPal(str,N,left,right){
    while(str.length>0 && str[right]===str[left] && left<right){
        left++
        right--
    }
    return Validate(str,N,left+1,right) || Validate(str,N,left,right-1) 
}
console.log(CheckPal(str,N,left,right));

function Validate(str,N,left,right){
    while(left<right){
        if(str[left]!==str[right]){
            return false
        }
        left++
        right--
    }
    return true
    
}
