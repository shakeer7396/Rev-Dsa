// Product of array except self Ended
// Description

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)


// Input
// Input Format
// The input consists of multiple testcases.

// The first line of input contains an integer t - the number of testcases.

// The following 2*t lines contain the description of the t testcases.

// The first line of each testcase contains an integer n - the size of the array.

// The second line of each testcase contains n space-separated integersnums[1],nums[1],...nums[i]..,nums[n]

// Constraints
// 1 <= t <= 10^3

// 2 <= nums.length <= 10^5

// -30 <= nums[i] <= 30


// Output
// Output Format
// For each testcase output the n integers, where n is the size of the array of that testcase, where the ith (1<=i<=n) integer is the product of the array except for the ith element


// Sample Input 1 

// 2
// 4
// 1 2 3 4
// 5
// -1 1 0 3 -3
// Sample Output 1

// 24 12 8 6
// 0 0 9 0 0
// Hint

// First testcase
// arr[1] = nums[2]*nums[3]*nums[4] = 24

// arr[2] = nums[1]*nums[3]*nums[4] = 12

// arr[3] = nums[1]*nums[2]*nums[4] = 8

// arr[4] = nums[1]*nums[2]*nums[3] = 6



let arr = [1,2,3,4]
let N=arr.length
// [24,12,8,6]
const ProductOfArray=(arr,N)=>{
    let left=[]
    let right=[]
    let ans=[]
    let prod=1
    for(let i=0;i<N;i++){
        left.push(prod*=arr[i])
    }
    prod=1
    for(let i=N-1;i>=0;i--){
        right.push(prod*=arr[i])
    }
    right.reverse()
    ans[0]=right[1]
    ans[N-1]=left[N-2]
    for(let i=1;i<N-1;i++){
        ans[i]=(left[i-1]*right[i+1])
    }
    console.log(ans.join(" "));
}
ProductOfArray(arr,N)