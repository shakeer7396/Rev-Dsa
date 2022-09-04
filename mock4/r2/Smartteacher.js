// Smart Teacher Ended
// Description

// You are a teacher and you have asked your students to not scribble over wrong letters, simply write # to so the teacher will consider the previous undeleted character as deleted.

// Say for example , tad#bc### results in t as the first # deleted d leaving tabc### and the three #'s then delete abc respectively in order c, b, a.

// You have a students solution and the correct answer for n questions.

// '#' deletes the previous undeleted character if it exists.

// Output for each question CORRECT or WRONG if both the answer and solution after deleting respective elements come out to be same or different.


// Input
// Input Format
// The first line contains the number of questions t.

// Next 3*t lines we have the description of the t questions.

// For each question there is 3 lines of input.

// The first line of input contains n, the size of answer and solution.

// The second line contains a string of size n, the students answer to the question.

// The third line contains a string of size m, the solution to the question.

// Both the solution and answer contain alphabets and '#' characters.

// Constraints
// 1 <= t <=1000

// 1 <= n,m <= 10^4


// Output
// Output Format
// For each testcase output n lines the ith of which [ 1 <= i <= n ] is CORRECT if the ith answer and ith solution are same or WRONG if they are different.


// Sample Input 1 

// 3
// 4
// ab#c
// ad#c
// 4
// ab##
// c#d#
// 3
// aab
// aa#
// Sample Output 1

// CORRECT
// CORRECT
// WRONG
// Hint

// In the first test case both answer and solution become "ac" so CORRECT.

// In the second test case both answer and solution become empty string, so CORRECT.

// In the third test case answer becomes aab and solution is a so WRONG.


// Smart Teacher - Editorial
// Difficulty:
// Easy

// Prerequisite:
// Stack

// Problem Statement:
// You are given two strings which contain alphabets and # where # deletes the previous undeleted character if it exists else nothing.

// And you have to output CORRECT if they are equal else WRONG.

// Hint:
// Use stack to find the final both strings and compare.

// Short Explanation:
// For each # check the previous undeleted character if it exists and delete.

// Detailed Explanation:
// For both strings, create a stack and as we move if we obtain a # character delete the topmost element from stack if stack is not empty and else keep adding the character in the stack.

// After the iteration empty the stack and add the characters in a string.

// Compare both the strings.

// Pseudo Code
// create a stack
// for i from 0 to n-1:
//     if s[i] == '#':
//         if stack is not empty:
//             pop stack
//     else:
//         push s[i]

// string str
// while stack is not empty:
//     add top most element to str
//     stack pop

// similarly for answer 
// string str2

// if str == str2:
//     Output CORRECT
// else:
//     Output WRONG
// Time Complexity:O(n)

// Space Complexity:O(n)