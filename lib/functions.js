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
 * Create a function that prints the string "Hello World"
 */

const helloWorld = () => {console.log("Helloooooooooooooo World!")}

/*
 * Prompt 02:
 *
 * Create a function that takes a single parameter and logs it to the console.
 */

const logger = (entry) => {console.log(entry)}

/*
 * Prompt 03:
 *
 * Create a function that takes a parameter name and prints the string "Hello
 * Zakk", if 'Zakk' is passed in as the name argument.
 */

const helloPerson = (person) => {console.log(`Hello ${person}`)}

/*
 * Prompt 04:
 *
 * Write a function printCool that accepts one parameter, name as an argument.
 * The function should print the name and a message saying that that person is
 * cool.
 *
 * i.e. printCool("Captain Reynolds") // => "Captain Reynolds is cool."
 */

const printCool = (name) => {console.log(`${name} is like totally cool.`)}

/*
 * Prompt 05:
 *
 * Write a function calculateCube that takes a single number and prints the
 * volume of a cube made from that number:
 *
 * i.e. calculateCube(5) // => 125
 */

const calculateCube = (num) => {console.log(num**3)}

/*
 * Prompt 06:
 *
 * Write a function isAVowel that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise. The vowel could be upper
 * or lower case.
 *
 * i.e. isAVowel("a"); // => true
 */

const isAVowel = (alpha) => {return ['a', 'e', 'i', 'o', 'u'].includes(alpha.toLowerCase())}

//console.log(isAVowel('I'))
/*
 * Prompt 07:
 *
 * Create a function that takes a string as a parameter and returns a reversed
 * version of the string (using the reverse method):
 *
 * Bonus: Use an arrow function
 */

const stringReverse = (string) => {
    let tempArr = string.split('')
    let revArr = tempArr.reverse()
    return revArr.join('')
}

//console.log(stringReverse('glower'))

/*
 * Prompt 08:
 *
 * Write a function getTwoLengths that accepts two parameters (strings). The
 * function should return an array of numbers where each number is the length of
 * the corresponding string.
 *
 * i.e. getTwoLengths("Hank", "Hippopopalous"); // => [4, 13]
 */

const getTwoLengths = (str1, str2) => {
    return [str1.length, str2.length]
}


/*
 * Prompt 09:
 *
 * Write a function getMultipleLengths that accepts a single parameter as an
 * argument: an array of strings. The function should return an array of numbers
 * where each number is the length of the corresponding string.
 *
 * i.e. getMultipleLengths(["hello", "what", "is", "up", "dude"]); // => [5, 4, 2, 2, 4]
 */

const getMultipleLengths = (strArray) => {
    return strArray.map(str => str.length)
}

//console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))

/*
 * Prompt 10:
 *
 * Define a function maxOfThree that takes three numbers as arguments and
 * returns the largest of them. If all numbers are the same, it doesn't matter
 * which one is returned. If the two largest numbers are the same, one of them
 * should be returned.
 *
 * i.e. maxOfThree(6, 9, 1); // => 9
 */

const maxOfThree = (x, y, z) => {
    if (x >= y) {
        if (x >= z) return x
        else return z
    }
    else {
        if (y >= z) return y
        else return z
    }
}

//console.log(maxOfThree(10, 11, 10))

/*
 * Prompt 11:
 *
 * Write a function printLongestWord that accepts a single argument, an array of
 * strings. The method should return the longest word in the array. In case of
 * a tie, the method should return the word that appears first in the array.
 *
 * i.e. printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]); // => "Peanutbutter"
 */

const printLongestWord = (strArray) => {
    let longest = ''
    strArray.forEach(str => {
        if (str.length > longest) longest = str
    })
    return longest
}

/*
 * Prompt 12:
 *
 * Create a function that takes a string as a parameter and returns the
 * uppercase version of the string (using the toUpperCase) method.
 *
 * Bonus: Use an arrow function
 */

const stringUpper = (string) => {
    return string.toUpperCase()
}

/*
 * Prompt 13:
 *
 * Write a function that takes a sentence as a parameter and returns the words
 * in the sentence in reverse order.
 */

const sentenceReversed = (sentence) => {
    return sentence.split(' ').reverse().join(' ')
}

// console.log(sentenceReversed('there is a house in new orleans'))

/*
 * Prompt 14:
 *
 * Write a function that takes a phone number (as a number) and returns
 * a formatted string. So if the number 2025171777 is pass in, the string
 * '(202) 517-1777' will be returned
 */

const formatNum = (num) => {
    let strNum = num.toString().split('')
    let aCode = strNum.slice(0, 3).join('')
    let part1 = strNum.slice(3, 6).join('')
    let part2 = strNum.slice(6, 10).join('')
    return `(${aCode}) ${part1}-${part2}`
}

// console.log(formatNum(2025171777))