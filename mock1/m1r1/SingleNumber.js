// Single Number Ended
// Description

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


// Input
// Input Format

// The first line contains the number of testcases - t

// For each testcase:

// The first line contains the number of elements - n

// The second line contains the elements

// Constraints

// 1<=t<=10

// 1<=n<=10^5

// 1<=a[i]<=10^7


// Output
// Find the single number


// Sample Input 1 

// 1
// 3
// 1 2 2
// Sample Output 1

// 1

function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
     let N=+input[line++]
     let arr=input[line++].split(" ").map(Number)
     findNum(N,arr)
    }
}
function findNum(N,arr){
    let obj={}
    for(let i=0;i<N;i++){
        if(obj[arr[i]]){
            obj[arr[i]]+=1
        }
        else{
            obj[arr[i]]=1
        }
    }
    let res
    for(let key in obj){
        if(obj[key]==1){
            res=key
        }
    }
    console.log(res);
}
if (process.env.USERNAME === "shake") {
  runProgram(`1
  3
  1 2 2`);
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