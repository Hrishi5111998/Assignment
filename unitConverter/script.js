const prompt = require("prompt-sync")()

function celsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}

const celsiusTemp = prompt("enter temperature in celsius: ")
const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp)
console.log("Temperature in fahrenheit: " + fahrenheitTemp)

