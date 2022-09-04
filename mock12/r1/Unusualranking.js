// Unusual Ranking Ended
// Description

// Adam's class has an unusual ranking system. The students are awarded their ranks based on scores of two subjects, Maths and Science.

// Criteria for ranking:

// 1. A student getting more marks in Maths has a better rank

// 2. If you two students have same marks in Maths, then the student having more marks in Science gets better rank

// 3. If two students have same marks in both the subjects, the student will lower Roll Number gets better rank.


// Input
// Input Format

// The first line contains the number of students N in the class

// Then N lines follow, ith line of which contains the marks of student with roll number i in maths and science

// Constraints

// 1<=N<=5000

// 1<=Marks<=100


// Output
// Print the roll number rank wise in ascending order, i.e. the roll number with rank 1 comes first, then second and so on.


// Sample Input 1 

// 4
// 50 31
// 58 52
// 55 38
// 50 72
// Sample Output 1

// 2 3 4 1 
// Hint

// Since the second student scores the highest in Maths and no other students got marks equal to 58 in Maths, second student gets the 1st Rank

// The second highest score in Maths is 55 scored by third students so he gets 2nd rank

// Since two students got 50 marks in Maths, after comparing the marks in Science, the student will roll number 4 get 3rd Rank and the student with roll number 1 gets the 4th Rank.