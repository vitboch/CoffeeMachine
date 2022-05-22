const input = require('sync-input')

console.log(`Starting to make a coffee
Grinding coffee beans
Boiling water
Mixing boiled water with crushed coffee beans
Pouring coffee into the cup
Pouring some milk into the cup
Coffee is ready!
Write how many cups of coffee you will need:`)

const cups = input('> ')
const water = cups * 200
const milk = cups * 50
const coffeeBeans = cups * 15

console.log(`For ${cups} cups of coffee you will need:
${water} ml of water
${milk} ml of milk
${coffeeBeans} g of coffee beans`)
