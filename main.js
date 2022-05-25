const input = require('sync-input')

const coffeeMachine = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550
}

const espresso = {
    water: 250,
    milk: 0,
    beans: 16,
    cups: 1,
    money: 4
}

const latte = {
    water: 350,
    milk: 75,
    beans: 20,
    cups: 1,
    money: 7
}

const cappuccino = {
    water: 200,
    milk: 100,
    beans: 12,
    cups: 1,
    money: 6
}


console.log(`Starting to make a coffee
Grinding coffee beans
Boiling water
Mixing boiled water with crushed coffee beans
Pouring coffee into the cup
Pouring some milk into the cup
Coffee is ready!`)

console.log(`The coffee machine has:
${coffeeMachine.water} ml of water
${coffeeMachine.milk} ml of milk
${coffeeMachine.beans} g of coffee beans
${coffeeMachine.cups} disposable cups
$${coffeeMachine.money} of money

Write action (buy, fill, take):`)

const action = input()

if (action === 'buy') {
    console.log('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:')

    const buy = Number(input())

    let inputData

    if (buy === 1) {
        inputData = espresso
    } else if (buy === 2) {
        inputData = latte
    } else if (buy === 3) {
        inputData = cappuccino
    } else {
        console.log('oops! something went wrong')
    }

    const newData = Object.keys(coffeeMachine).reduce((o, k) => {
        o[k] = coffeeMachine[k] - inputData[k];
        return o
    }, {})

    console.log(`
The coffee machine has:
${newData.water} ml of water
${newData.milk} ml of milk
${newData.beans} g of coffee beans
${newData.cups} disposable cups
$${coffeeMachine.money + inputData.money} of money`)
}

if (action === 'fill') {
    console.log('Write how many ml of water you want to add:')
    const fillWater = Number(input())

    console.log('Write how many ml of milk you want to add:')
    const fillMilk = Number(input())

    console.log('Write how many grams of coffee beans you want to add:')
    const fillBeans = Number(input())

    console.log('Write how many disposable coffee cups you want to add:')
    const fillCups = Number(input())

    console.log(`
The coffee machine has:
${coffeeMachine.water + fillWater} ml of water
${coffeeMachine.milk + fillMilk} ml of milk
${coffeeMachine.beans + fillBeans} g of coffee beans
${coffeeMachine.cups + fillCups} disposable cups
$${coffeeMachine.money} of money`)
}

if (action === 'take') {
    console.log(`I gave you $${coffeeMachine.money}

The coffee machine has:
${coffeeMachine.water} ml of water
${coffeeMachine.milk} ml of milk
${coffeeMachine.beans} g of coffee beans
${coffeeMachine.cups} disposable cups
$${coffeeMachine.money - coffeeMachine.money} of money`)
}
