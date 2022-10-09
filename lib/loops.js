/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Create a loop that prints each number from 0 to 10.
 */

// for (i = 0; i < 11; i++) {
//     console.log(i)
// }

/*
 * Prompt 02:
 *
 * Create a loop that prints each number from 10 to 0.
 */

// for (i = 10; i >= 0; i--) console.log(i)

/*
 * Prompt 03:
 *
 * Create a loop that prints out the even numbers between 0 and 50.
 */

// for (i = 0; i < 51 ; i += 2) {
//     console.log(i)
// }

/*
 * Prompt 04:
 *
 * Create a loop that prints out the odd numbers between 50 and 0
 */

// for (i = 1; i < 50; i += 2) console.log(i)

/*
 * Prompt 05:
 *
 * Print out the numbers between 50 and 100.
 */

// for (i = 50; i < 101; i++) console.log(i)

/*
 * Prompt 06:
 *
 * Create an array with the members of the ninja turtles (Donatello, Leonardo,
 * Raphael, Michaelangelo).  Use a for loop to call toUpperCase() on each of
 * them and print out the result.
 */

// let turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

// for (i = 0; i < turtles.length; i++) {
//     console.log(turtles[i].toUpperCase())
// }

/*
 * Prompt 07:
 *
 * Write a for loop that prints the numbers in the following array in order
 */
const twoDArray1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < twoDArray1.length; i++) {
//     for (let j = 0; j < twoDArray1[i].length; j++) {
//         console.log(twoDArray1[i][j])
//     }
// }

/*
 * Prompt 08:
 *
 * Write a for loop that prints the numbers in the following array in order
 */
const twoDArray = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];

// for (let i = twoDArray.length - 1; i >= 0; i--) {
//     for (let j = twoDArray[i].length - 1; j >= 0; j--) {
//         console.log(twoDArray[i][j])
//     }
// }