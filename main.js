// const input = require('prompt-sync')() // for node
const input = require('sync-input') //for jetbrains

let coffeeMachine = {
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

while (true) {
    console.log(`
Write action (buy, fill, take, remaining, exit):`)

    const action = input()

    if (action === 'buy') {
        console.log(`
What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:`)

        const buy = input()

        if (buy !== 'back') {

            const totalWater = coffeeMachine.water / latte.water
            const totalMilk = coffeeMachine.milk / latte.milk
            const totalBeans = coffeeMachine.beans / latte.beans
            const totalCups = coffeeMachine.cups / latte.cups

            const totalCoffeeMachine = Math.min(
                Math.floor(totalWater),
                Math.floor(totalMilk),
                Math.floor(totalBeans),
                Math.floor(totalCups)
            )

            let inputData

            if (buy === '1') {
                inputData = espresso
            }
            if (buy === '2') {
                inputData = latte
            }
            if (buy === '3') {
                inputData = cappuccino
            }

            if (totalCoffeeMachine < 1) {

                function notEnough() {
                    if (totalWater < 1) {
                        return 'water'
                    }

                    if (totalMilk < 1) {
                        return 'milk'
                    }

                    if (totalBeans < 1) {
                        return 'beans'
                    }

                    if (totalCups < 1) {
                        return 'cups'
                    }
                }

                console.log(`Sorry, not enough ${notEnough(totalWater, totalMilk, totalBeans, totalCups)}!`)
            } else {
                console.log('I have enough resources, making you a coffee!')

                const newData = Object.keys(coffeeMachine).reduce((o, k) => {
                    o[k] = coffeeMachine[k] - inputData[k];
                    return o
                }, {})

                coffeeMachine.water = newData.water
                coffeeMachine.milk = newData.milk
                coffeeMachine.beans = newData.beans
                coffeeMachine.cups = newData.cups
                coffeeMachine.money = coffeeMachine.money + inputData.money
            }
        } else {
            continue
        }
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

        coffeeMachine.water = coffeeMachine.water + fillWater
        coffeeMachine.milk = coffeeMachine.milk + fillMilk
        coffeeMachine.beans = coffeeMachine.beans + fillBeans
        coffeeMachine.cups = coffeeMachine.cups + fillCups
    }

    if (action === 'take') {
        console.log(`
I gave you $${coffeeMachine.money}`)

        coffeeMachine.money = coffeeMachine.money - coffeeMachine.money
    }

    if (action === 'remaining') {
        console.log(`
The coffee machine has:
${coffeeMachine.water} ml of water
${coffeeMachine.milk} ml of milk
${coffeeMachine.beans} g of coffee beans
${coffeeMachine.cups} disposable cups
$${coffeeMachine.money} of money`)
    }

    if (action === 'exit') {
        break
    }
}
