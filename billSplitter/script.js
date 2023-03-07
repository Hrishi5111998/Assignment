function calculateBillSplitter(costPerDish, numberOfPeople){
    const totalCost = costPerDish * numberOfPeople
    const billPerPerson = totalCost / numberOfPeople

    const result = {
        totalBill: totalCost,
        billPerPerson: billPerPerson
    }
    return result
}

const prompt = require("prompt-sync")()

const costPerDish = prompt("Enter cost of dish: ")
const numberOfPeople = prompt("Enter number of people: ")

const result = calculateBillSplitter(costPerDish, numberOfPeople)
console.log(result)