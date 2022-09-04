// Line of Sight Ended
// Description

// You are a budding photographer, and recently you have started clicking pictures of sunrises. In your town, you have N positions, where photography is allowed by the authorities. These N positions are well connected by M bi-directional roads. But the sunrise can only be seen from K spots. The roads are well connected, so it takes only 1 unit of time to travel from one location to another, via these bi-directional roads.

// To get a good picture, you need to reach the spot from where the sunrise can be seen, in T units of time. Find the number of spots from where you can get the picture.


// Input
// First line: Four single space-separated integers denoting the value of N, M, K, and T.

// M lines follow:

// Each of the lines consists of two single space-separated integers u and v, denoting a bidirectional road between location u and location v.

// Next line: Ksingle space-separated integers denoting the locations from where the sunrise can be seen.

// Constraints:

// 1 <= N <= 100000
// N-1 <= M <= MIN( 100000, N*(N-1)/2 )
// 1 <= H <= N
// 1 <= K <= (N+1)/2


// Output
// Print a single integer denoting the number of spots from where the sunrise can be seen, within T units of time


// Sample Input 1 

// 4 2 1 1
// 1 2
// 3 4
// 2
// Sample Output 1

// 2
// Hint

// Given the bi-directional roads, the roads are arranged as given below,

// 1------2

// 3------4

// The spot from where the sunrise can be seen is located at position 2, and within 1 units of time, sunrise can be seen from position 1 and position 2.

// Therefore, the number of spots from which the sunrise can be seen within 1 unit of time is 2.