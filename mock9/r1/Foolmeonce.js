// Fool Me Once Ended
// Description

// You are at a magic show and the magician is showing one of his tricks. You being a coder believe that you are smarter than him and challenge him that you can also perform the trick in the same time.

// He takes a deck of cards and shuffles it n times. Each time he takes some k number of cards from the top and places them at the bottom without changing the order and after n shuffles, he tells the card at the top of the deck.

// Can you tell what card is at the top.


// Input
// Input Format
// The first line contains the number of testcases t.

// Next 4*t lines we have the description of the t testcases.

// For each testcase there are 4 lines of input.

// The first line contains an integer n, the number of cards in his deck.

// The second line contains n integers, the numbers on the cards in his deck.

// The third line contains an integer m, the number of shuffles he makes.

// The fourth line contains m integers, the number of cards he moves in each shuffle.

// Constraints
// 1 <= t <=1000

// 1 <= n,m <= 1000

// 1 <= numbers on his cards <= 1000

// 1 <= number of cards for each shuffle <= n-1


// Output
// Output Format
// For each testcase output the number on the topmost card after he completes m shuffles.


// Sample Input 1 

// 1
// 5
// 2 1 5 4 3
// 5
// 3 2 1 2 1
// Sample Output 1

// 3
// Hint

// Initial deck - 2 1 5 4 3

// After the first shuffle, i.e. he chooses first 3 cards from the top and adds them to the bottom the deck is - 4 3 2 1 5

// After the second shuffle, deck is - 2 1 5 4 3

// After the third shuffle, deck is - 1 5 4 3 2

// After the fourth shuffle, deck is - 4 3 2 1 5

// After the fifth shuffle, deck is - 3 2 1 5 4

// So the card at the top is 3.