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
 * Create a variable called firstName and assign it a string of your first name.
 * Create a variable called lastName and assign it a string of your last name.
 * Create a variable called full name and assign it your full name using the
 * firstName and lastName variables.
 */

let firstName = 'Zach'
let lastName = 'Yaffee'
let fullName = `${firstName} ${lastName}`
let testName = firstName + ' ' + lastName

/*
 * Prompt 02:
 *
 * Create a variable holding the sentence "She sells sea shells by the sea
 * shore", but by adding one word to the string at a time.
 */

let string = ''
string += 'She '
string += 'sells '
string += 'sea '
string += 'shells '
string += 'by '
string += 'the '
string += 'sea '
string += 'shore'

/*
 * Prompt 03:
 *
 * Check if the string in the sentence variable includes the word 'fox'
 */

let sentence = "The quick brown fox jumped over the lazy dog.";

// if (sentence.includes('fox')) console.log('includes fox')

/*
 * Prompt 04:
 *
 * Use the replace method to replace 'Andy Dwyer' with your name.
 */

let andy = "The best character on Parks and Rec is Andy Dwyer - hands down!";

let zach = andy.replace('Andy Dwyer', fullName)

// console.log(zach)

/*
 * Prompt 05:
 *
 * Create the string "eeny, meeny, miny, moe" by concatenating the strings
 * together using the concat method
 */
let eeny = "eeny";
let meeny = "meeny";
let miny = "miny";
let moe = "moe";

let finalResult = eeny.concat(' ', meeny.concat(' ', miny.concat(' ', moe)))
// console.log(finalResult)

/*
 * Prompt 06:
 *
 * Split the string below into an array of characters
 */

let toArray = "Goodnight Moon";

let stringArray = toArray.split('')
// console.log(stringArray)
