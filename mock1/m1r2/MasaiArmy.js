// Masai Army Ended
// Description

// According to the regulations of Masai's army, a reconnaissance unit should consist of exactly two soldiers. Since these two soldiers shouldn't differ much, their heights can differ by at most d centimeters.

// Captain Bob has n soldiers in his detachment. Their heights are a1, a2, ..., an centimeters. Some soldiers are of the same height. Bob wants to know, how many ways exist to form a reconnaissance unit of two soldiers from his detachment.

// Ways (1, 2) and (2, 1) should be regarded as different.


// Input
// Input Format

// The first line contains the number of testcases, t

// For each testcase:

// The first line contains the integers, n and d

// The second line contains the height of the soldiers

// Constraints

// 1<=t<=10

// 1<=n<=100

// 1<=d<=10000

// 1<=height<=10000


// Output
// Print the total number of ways to form a reconnaissance unit of two soldiers from his detachment.


// Sample Input 1 

// 1
// 5 10
// 10 20 50 60 65
// Sample Output 1

// 6
// Hint

// The pairs include:

// (10,20) , (20,10), (50,60), (60,50) , (60,65), (65,60)


function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0].trim()
    let line=1
    for(let i=0;i<tc;i++){
        let [N,K]=input[line++].trim().split(" ").map(Number)
        let arr=input[line++].trim().split(" ").map(Number)
        Masai_Army(N,K,arr)
    }
}function Masai_Army(N,K,arr){
    let count=0
    for(let i=0;i<N;i++){
        for(let j=i+1;j<N;j++){
            if(Math.abs(arr[i]-arr[j])<=K){
                count++
            }
        }
    }
    console.log(count*2);
}
if (process.env.USERNAME === "shake") {
  runProgram(`1
  5 10
  10 20 50 60 65`);
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