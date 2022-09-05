// Counting valleys Ended
// Description

// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactlystepssteps, for every step it was noted if it was an uphill,U, or a downhill,Dstep. Hikes always start and end at sea level, and each step up or down represents a1unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.

// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.


// Input
// Input Format
// The first line contains an integersteps, the number of steps in the hike.

// The second line contains a single stringpath, of characters that describe the path.

// Constraints
// 2 <= steps <= 10^6

// path[i]='U' || path[i]='D


// Output
// Output Format
// Print the number of valleys walked through


// Sample Input 1 

// 8
// UDDDUDUU
// Sample Output 1

// 1
// Hint

// First testcase
// If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

// Capture.PNG

// The hiker enters and leaves one valley.


// Counting valleys - Editorial
// Difficulty:
// Medium

// Prerequisite:
// String, Implementation

// Problem Statement:
// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactlystepssteps, for every step it was noted if it was an uphill,U, or a downhill,Dstep. Hikes always start and end at sea level, and each step up or down represents a1unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.

// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// Hint:
// Count the change in the sign of current height.

// Short Explanation:
// Iterate over the path and maintain the current height at each index, then whenever the previous height is negative and current is non-negative we increment the answer by 1.

// Detailed Explanation:
// Our goal is to count the number of valleys. A valley is a sequence of steps starting with a step downward from sea level and ending with a step upward to sea level. Letlevelbe a variable denoting the current altitude. If we take a step upwards,levelis incremented by one; if we take step downwards,levelis decremented by one.

// Since we know that the sequence of input steps starts and ends at sea level, then we can say that ourlevelvariable is0at the beginning and end of the hike. The number of valleys can be counted as the number of steps taken upwards to sea level (i.e., whenlevelgoes from-1to0. This is true, because each such step ends the sequence of steps below sea level, signifying the end of a valley.

// Pseudo Code
//     height = 0
//     prev_height = 0
//     cnt = 0
//     for i in range(len(s)):
//         if (s[i] == 'U'):
//             height += 1
//         elif s[i] == 'D':
//             height -= 1
//         if height == 0 and prev_height < 0:
//             cnt += 1
//         prev_height = height
//     print cnt
// Time Complexity:O(n)

// Space Complexity:O(1)


function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let str=input[1].trim()
    countValleysInStr(N,str)
}
function countValleysInStr(N,str){
    let count1=0
    let count2=0
    for(let i=0;i<N;i++){
        if(str[i]=="U"){
            count1++
            if(count1==0){
                count2++
            }
        }
        else{
            count1--
        }
    }
    console.log(count2);
}
if (process.env.USERNAME === "shake") {
  runProgram(`8
  UDDDUDUU`);
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