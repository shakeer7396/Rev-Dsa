// Alternating characters Ended
// Description

// You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.


// Input
// Input Format
// The input consists of multiple testcases.

// The first line contains an integer t - the number of testcases.

// Each of the next t lines contains a string s.

// Constraints
// 1 <= t <= 10

// 1 <= length of s <= 10^5


// Output
// Output Format
// For each testcase print the minimum number of deletions required.


// Sample Input 1 

// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB
// Sample Output 1

// 3
// 4
// 0
// 0
// 4
// Hint

// Capture.PNG
// https://oj.masaischool.com/public/upload/5d903eefeb.png

// Alternating characters - Editorial
// Difficulty:
// Easy

// Prerequisite:
// String

// Problem Statement:
// You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// Hint:
// Apply brute force and keep deleting as you traverse

// Short Explanation:
// It is given in the question that the resultant string shouldn't have two adjacent matching characters.

// If there are n adjacent matching characters, delete n-1 of those characters and repeat this process to the end of the string.

// Detailed Explanation:
// Start from index 0 and keep iterating till index n-2.

// At each index check if current element is same as the next element.

// If it is same, then increase the counter by 1, else move to the next element and at the end print the final answer.

// Note that you do not have to actually delete, ust find out the minimum number of operations required for the same.

// Pseudo Code
//     ans=0
//     for i form 0 to n-2:
//         if s[i]=s[i+1]:
//             ans=ans+1

//     print ans

// Time Complexity:O(n)

// Space Complexity:O(1)


function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let line=1
    for(let i=1;i<=N;i++){
        let arr=input[line++].trim()
        Alternating_characters(arr)
    }
}
function Alternating_characters(str){
    let count=0
    let stack=[str[0]]
    for(let i=1;i<str.length;i++){
        if(str[i]==stack[stack.length-1]){
            count++
        }
        stack.push(str[i])
    }
    console.log(count);
}
if (process.env.USERNAME === "shake") {
  runProgram(`5
  AAAA
  BBBBB
  ABABABAB
  BABABA
  AAABBB`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}