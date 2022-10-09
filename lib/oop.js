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
 * Define a class Person with the following properties:
 *
 *   - name
 *   - age
 *   - favoriteColor
 *
 * Create 2 instances of your Person class
 */

class Person {
    constructor(name, age, favColor) {
        this.name = name,
        this.age = age,
        this.favColor = favColor
    }
}

let person1 = new Person ('Jolene', 22, 'green')
let harambe = new Person ('Harambe', 12, 'violet')

/*
 * Prompt 02:
 *
 * Create a BankAccount class with the folowing properties:
 *
 *   - type (should default to 'checking')
 *   - amount (should default to 0)
 *   - withdraw (a method that should decrease the value of amount by the amount
 *     withdrawn)
 *   - deposit (a method that should increase the value of amount by the amount
 *     deposited)
 *   - transaction history (an array of objects describing each transaction
 *     (withdraw and deposit) on the account)
 *
 * Create an instance of your BankAccount class. Use your deposit and withdraw
 * methods, then print the transaction history.
 */

class BankAccount {
    constructor () {}
    type = 'checking'
    balance = 0
    transactionHistory = []
    withdraw (amount) {
        this.balance -= amount
        this.transactionHistory.push({'withdrawal': amount})
    }
    deposit (amount) {
        this.balance += amount
        this.transactionHistory.push({'deposit': amount})
    }
}

/*
 * Prompt 03:
 *
 * Define a class Flower with the following properties:
 *
 *   - color (string)
 *   - petals (number)
 *   - smellsPrety (boolean)
 *   - sniff (method, should print "such a pleasing smell" is smellsPretty is
 *     true or "yuck!" if it's false)
 *   - describe (method, should print "This is a red flower", if the value of
 *     color is "red")
 *   - loveMe (method, should print "They love me", "They love me not", "They
 *     love me", etc for however many petals there are)
 *
 * Create 2 instances using your Flower class. Set all the properties and use each method.
 */

class Flower {
    constructor (color, petals, smellsPretty) {
        this.color = color,
        this.petals = petals,
        this.smellsPretty = smellsPretty
    }
    sniff () {
        if (this.smellsPretty) console.log('such a pleasing smell')
        else console.log('yuck!')
    }
    describe () {
        console.log(`this is a ${this.color} flower`)
    }
    loveMe () {
        for (let i = 0; i < this.petals; i++) {
            console.log((i % 2) ? "They love me not" : "They love me")
        }
    }
}

// let flower = new Flower ('red', 5, true)
// flower.loveMe()

/*
 * Prompt 04:
 *
 * Define a class SuperHero with the following properties:
 *
 *   - name (string)
 *   - health (number)
 *   - superpower (string)
 *   - power (a number)
 *   - attack (method: take an instance of the SuperHero class and subtract
 *     power from their health)
 *
 * Create two instances of your SuperHero class and have them attack each other.
 */

class SuperHero {
    constructor (name, health, superpower, power) {
        this.name = name
        this.health = health
        this.superpower = superpower
        this.power = power
    }
    attack (superHero) {
        superHero.health -= this.power
    }
}

let superman = new SuperHero ('Superman', 1000000, 'all of them', 1000000)
let batman = new SuperHero ('Batman', 10, 'most of them', 10)

batman.attack(superman)
superman.attack(batman)