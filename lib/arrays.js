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
 * Create an array called people that contains three names in it.
 */

let people = ['Peter', 'Paul', 'Mary']

/*
 * Prompt 02:
 *
 * Create an array called countries that contains four countries in it.
 */

let countries = [
    'Brazil',
    'Chile',
    'Ecuador',
    'Cuba'
]

/*
 * Prompt 03:
 *
 * Create an array called cities taht contains five cities in it.
 */

let cities = [
    'New Orleans',
    'Paterson',
    'Denver',
    'Haifa',
    'Cairo'
]

/*
 * Prompt 04:
 *
 * Create an empty array called favoriteNumbers. On a separate line for each,
 * add a number to the favoriteNumbers array so there are 4 numbers in it.
 */

let favoriteNumbers = []

// for (i = 0; i < 4; i++) {
//     favoriteNumbers.push(i)
// }

favoriteNumbers.push(0)
favoriteNumbers.push(1)
favoriteNumbers.push(2)
favoriteNumbers.push(3)

/*
 * Prompt 05:
 *
 * Create an empty array called actors. On a separate line for each, add an
 * actor to the actors array so there are 5 actors in it.
 */
// const otherActors = ['Leo', 'Ryan', 'Meryl', 'Forest', 'Anthony']

let actors = []

// for (i = 0; i < 5; i++) {
//     actors.push(otherActors[i])
// }

actors.push('Leo')
actors.push('Ryan')
actors.push('Meryl')
actors.push('Forest')
actors.push('Anthony')

/*
 * Prompt 06:
 *
 * Create an array called sesameStreetCharacters with "Elmo", "Big Bird",
 * "Cookie Monster", "Ernie", and "Bert" in it. On a separate line for each,
 * remove the last 3 characters.
 */

let sesameStreetCharacters = ['Elmo', 'Big Bird', 'Cookie Monster', 'Ernie', 'Bert']

// for (i = 0; i < 3; i++) {
//     sesameStreetCharacters.pop()
// }

sesameStreetCharacters.pop()
sesameStreetCharacters.pop()
sesameStreetCharacters.pop()

/*
 * Prompt 07:
 *
 * Create an array called starWarsCharacters with "Luke", "Leia", "Han",
 * "R2-D2", "Chewbacca", and "C-3PO" in it. Create a variable called han and
 * assign it the string "Han" from the array (i.e. retrieve it from the array).
 * Do the same for luke, leia, and chewbacca.
 */

let starWarsCharacters = ['Luke', 'Leia', 'Han', 'R2-D2', 'Chewbacca', 'C-3PO']

let han = starWarsCharacters[2]
let luke = starWarsCharacters[0]
let leia = starWarsCharacters[1]
let chewbacca = starWarsCharacters[4]

/*
 * Prompt 08:
 *
 * Create an array called jerseyShore with "JWoww", "The Situation", "DJ Pauly
 * D", "Snookie", and "Sweetheart" in it. On separate lines for each, remove
 * "Snookie" and "DJ Pauly D"
 */

let jerseyShore = ['JWoww', 'The Situation', 'DJ Pauly D', 'Snookie', 'Sweetheart']

jerseyShore.splice(3, 1)
jerseyShore.splice(2, 1)


/*
 * Prompt 09:
 *
 * Create an array called months with all 12 months as strings in it (i.e.
 * "January", "February", "March", etc). In a single line, delete "September",
 * "October", and "November".
 */

// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// months.splice(8, 3)

/*
 * Prompt 10:
 *
 * Create an array called months with all 12 months as strings in it (i.e.
 * "January", "February", "March", etc). Create a loop that prints out each
 * month from the array on a separate line.
 */

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// months.forEach(month => console.log(month))


/*
 * Prompt 11:
 *
 * Create an empty array called randomNumbers. Write a for loop that will add
 * 4 random numbers to the randomNumbers array using Math.random() and push.
 */

let randomNumbers = []

for (let i = 0; i < 4; i++) {
    randomNumbers.push(Math.floor(Math.random() * 10))
}

/*
 * Prompt 12:
 *
 * Create an array name foods and add 10 foods to it. Create another array
 * called favoriteFoods but leave it empty. Create an array that loops through
 * the foods array and adds the current item to the favoriteFoods array if the
 * string is longer than 6 characters (i.e. string.length > 6).
 */

let foods = ['broccoli', 'black beans', 'onion', 'celery', 'walnuts',
            'beef', 'chicken', 'rice', 'tomato', 'garlic'
]

let favoriteFoods = []

foods.forEach(food => {
    if (food.length > 6) favoriteFoods.push(food)
})

//console.log(favoriteFoods)