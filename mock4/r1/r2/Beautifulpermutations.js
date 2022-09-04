// Beautiful Permutations Ended
// Description

// Suppose you have n integers labeled 1 through n. A permutation of those n integers perm (1-indexed) is considered a beautiful arrangement if for every i (1 <= i <= n), either of the following is true:

// perm[i] is divisible by i.
// i is divisible by perm[i].
// Given an integer n, print the number of the beautiful arrangements that you can construct.


// Input
// Input Format

// The first and only line contains the integer n

// Constraints

// 1<=n<=15


// Output
// Print the number of the beautiful arrangements that you can construct.


// Sample Input 1 

// 2
// Sample Output 1

// 2
// Hint

// The permutations are {1,2},{2,1}


// Beautiful Permutations - Editorial
// Difficulty: Medium
// Prerequisite: Backtracking
// Problem Statement
// Suppose you have n integers labeled 1 through n. A permutation of those n integers perm (1-indexed) is considered a beautiful arrangement if for every i (1 <= i <= n), either of the following is true:

// perm[i] is divisible by i.
// i is divisible by perm[i].
// Given an integer n, print the number of the beautiful arrangements that you can construct.

// Hint
// Traverse all the possible permutation with modifications such that the conditions remain true

// Short Explanation
// We try to create all the permutations of numbers from 1 to N. We can fix one number at a particular position and check for the divisibility criteria of that number at the particular position. But, we need to keep a track of the numbers which have already been considered earlier so that they aren't reconsidered while generating the permutations. If the current number doesn't satisfy the divisibility criteria, we can leave all the permutations that can be generated with that number at the particular position. This helps to prune the search space of the permutations to a great extent. We do so by trying to place each of the numbers at each position.

// Detailed Explanation
// We try to create all the permutations of numbers from 1 to N. We can fix one number at a particular position and check for the divisibility criteria of that number at the particular position. But, we need to keep a track of the numbers which have already been considered earlier so that they aren't reconsidered while generating the permutations. If the current number doesn't satisfy the divisibility criteria, we can leave all the permutations that can be generated with that number at the particular position. This helps to prune the search space of the permutations to a great extent. We do so by trying to place each of the numbers at each position.

// We make use of a visited array of sizeN. Here, visited[i] refers to theithnumber being already placed/not placed in the array being formed till now(True indicates that the number has already been placed).

// We make use of acalculatefunction, which puts all the numbers pending numbers from 1 to N(i.e. not placed till now in the array), indicated by aFalseat the correspondingvisited[i] position, and tries to create all the permutations with those numbers starting from the posposindex onwards in the current array. While putting thepos-thnumber, we check whether theithnumber satisfies the divisibility criteria on the go i.e. we continue forward with creating the permutations with the numberiat thepos-thposition only if the numberiand pospossatisfy the given criteria. Otherwise, we continue with putting the next numbers at the same position and keep on generating the permutations.

// Pseudocode

//    solve(nums[], vis[], index, n)
//         if(index==n+1)
//             return 1;

//         res=0;
//         for(int i=0;i<nums.size();i++)
//             if(vis[nums[i]]==0 && (nums[i]%index==0 || index%nums[i]==0))
//                 vis[nums[i]]=1;
//                 res+=solve(nums,vis,index+1,n);
//                 vis[nums[i]]=0;


//         return res;

//     countArrangement() 
//       n // input  
//     nums[n] //input
//     vis[n]
//       for(int i=1;i<=n;i++)
//          nums[i]=i;
//        vis[i]=0;


//       ans=solve(nums,vis,1,n);
//       print(ans)

// Time Complexity:
// O(K)where K is the number of valid permutations

// Space Complexity:
// O(N)for making the visited array