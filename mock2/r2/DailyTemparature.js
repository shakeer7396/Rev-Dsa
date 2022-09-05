// Daily Temperatures Ended
// Description

// Given an array of integers temperatures represents the daily temperatures, print an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.


// Input
// Input Format

// The first line contains the number of testcases - t

// For each testcase:

// The first line contains the number of days, - n
// The second line contains the temperatures for each day
// Constraints

// 1<=t<=10

// 1<=n<=10^5


// Output
// Print n integers where the ith value represents after how many days there will a warmer day, it such a does not exist print 0 for the ith day


// Sample Input 1 

// 2
// 4
// 30 40 50 60
// 8
// 73 74 75 71 69 72 76 73
// Sample Output 1

// 1 1 1 0
// 1 1 4 2 1 1 0 0
// Hint

// In the first sample test case,
// For Day 1, the next day is warmer, so the answer is 1

// For Day 2, the next day is warmer, so the answer is 1

// For day 3, the next day is warmer, so the answer is 1

// For day 4, we don't have the data after this day, so the answer is 0 
// In the second test case,
// For Day 1, the next day is warmer, so the answer is 1

// For Day 2, the next day is warmer, so the answer is 1

// For day 3, the next warmer day is 4 days later, so the answer is 4

// For day 4, the next warmer day is 2 days later, so the answer is 2

// For day 5, the next day is warmer, so the answer is 1

// For day 6, the next day is warmer, so the answer is 1

// For day 7, there is no warmer day after this, so the answer is 0

// For day 8, we don't have the data after this day, so the answer is 0 


// Daily Temperatures - Editorial
// Difficulty: Medium
// Prerequisite: Stacks
// Problem Statement
// Given an array of integers temperatures represents the daily temperatures, print an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Hint
// The question can be solved using a stack

// Short Explanation
// We can use a monotonic decreasing stack to hold temperatures. Monotonic decreasing means that the stack will always be sorted in descending order. Because the problem is asking for the number of days, instead of storing the temperatures themselves, we should store the indices of the days, and use temperatures[i] to find the temperature of the ith day.

// On each day, there are two possibilities. If the current day's temperature is not warmer than the temperature on the top of the stack, we can just push the current day onto the stack - since it is not as warm (equal or smaller), this will maintain the sorted property.

// If the current day's temperature is warmer than the temperature on top of the stack, this is significant. It means that the current day is thefirstday with a warmer temperature than the day associated with the temperature on top of the stack. When we find a warmer temperature, the number of days is the difference between the current index and the index on the top of the stack. We can declare ananswerarray before iterating through the input and populateansweras we go along.

// Detailed Explanation
// Initialize an arrayanswerwith the same length astemperaturesand all values initially set to0. Also, initialize a stack as an empty array.
// Iterate throughtemperatures. At each indexcurrDay:
// If the stack is not empty, that means there are previous days for which we have not yet seen a warmer day. While the current temperature is warmer than the temperature ofprevDay(the index of the day at the top of the stack):
// Setanswer[prevDay]equal to the number of days that have passed betweenprevDayand the current day, that is,answer[prevDay] = currDay - prevDay.
// Push the current indexcurrDayonto the stack.
// Returnanswer.
// Pseudocode

//         int n = temperatures.length;
//         int[] answer = new int[n];
//         Deque<Integer> stack = new ArrayDeque<>();

//         for (int currDay = 0; currDay < n; currDay++) {
//             int currentTemp = temperatures[currDay];
//             // Pop until the current day's temperature is not
//             // warmer than the temperature at the top of the stack
//             while (!stack.isEmpty() && temperatures[stack.peek()] < currentTemp) {
//                 int prevDay = stack.pop();
//                 answer[prevDay] = currDay - prevDay;
//             }
//             stack.push(currDay);
//         }
// print(answer)
// Time Complexity:
// O(N)for traversing the array

// Space Complexity:
// O(N)for maintaning the stack


function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++].trim()
        let arr=input[line++].trim().split(" ").map(Number)
        console.log(DailyTemperatures(N,arr))
    }
}
function DailyTemperatures(N,arr){
    let ans=[]
    for(let i=0;i<N;i++){
        let curr=0
        for(let j=i+1;j<N;j++){
            if(arr[i]<arr[j]){
                curr=j-i
                break
            }
        }
        ans.push(curr)
    }
    return ans.join(" ")
}
if (process.env.USERNAME === "shake") {
  runProgram(`2
  4
  30 40 50 60
  8
  73 74 75 71 69 72 76 73`);
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