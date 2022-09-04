// Rock Paper Scissor Ended
// Description

// Given two strings s and t consisting of only 'r', 'p' and 's' as the characters representing rock, paper and scissor respectively, you have to print "First" if the first string total score is greater than second, if second string total score is greater than first then print "Second" otherwise if there is a draw print "Draw".

// Rules -
// If rock and paper fights paper wins.
// If rock and scissor fights rock wins.
// If paper and scissor fights scissor wins.
// If any same category fights draw.

// For win add 1 to the winning string score, for draw add 1 to both and for loss do nothing.


// Input
// Input Format

// The first line contains integer numbers N - the length of the string.

// The second line contains the string s.

// The third line contains the string t.

// Constraints

// 2 <= N <= 100


// Output
// Print the required answer.


// Sample Input 1 

// 5
// rpsrr
// prrsp
// Sample Output 1

// Second
// Hint

// Score of first string

// x = 0 + 1 + 0 + 1 + 0 = 2

// Score of second string

// y = 1 + 0 + 1 + 0 + 1 = 3