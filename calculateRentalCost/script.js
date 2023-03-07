function calculaterentalCost(numberOfDays, carType){
    let costPerDay

    if(carType === 'economy'){
        costPerDay = 4000
    }else if(carType === 'midsize'){
        costPerDay = 10000
    }else if(carType === 'luxsury'){
        costPerDay = 20000
    }else{
        return 'Invalid car type'
    }

    const rentalCost = costPerDay * numberOfDays
    return rentalCost
}

const prompt = require("prompt-sync")()

const carType = prompt("Enter car type: ")
const numberOfDays = prompt("Enter number of days: ")

const rentalCost = (calculaterentalCost(numberOfDays, carType))
console.log(rentalCost)