const input = require('sync-input')

const cup = {
    water: 200,
    milk: 50,
    beans: 15
}

console.log(`Starting to make a coffee
Grinding coffee beans
Boiling water
Mixing boiled water with crushed coffee beans
Pouring coffee into the cup
Pouring some milk into the cup
Coffee is ready!
Write how many ml of water the coffee machine has:`)
const totalWater = input()

console.log('Write how many ml of milk the coffee machine has:')
const totalMilk = input()

console.log('Write how many grams of coffee beans the coffee machine has:')
const totalBeans = input()

console.log('Write how many cups of coffee you will need:')
const cups = input()

const totalCups = Math.min(
    Math.floor(totalWater / cup.water),
    Math.floor(totalMilk / cup.milk),
    Math.floor(totalBeans / cup.beans)
)

if (cups == totalCups) {
    console.log('Yes, I can make that amount of coffee')
} else if (cups > totalCups) {
    console.log(`No, I can make only ${totalCups} cups of coffee`)
} else if (cups < totalCups) {
    console.log(`Yes, I can make that amount of coffee (and even ${totalCups - cups} more than that)`)
} else if (totalCups == 0 && cups > totalCups) {
    console.log(`No, I can make only ${cups - totalCups} cups of coffee`)
}
