function capitalizeFirstLetter(str){

    const capitalize = str.charAt(0).toUpperCase() + str.slice(1)
    return capitalize
}

const propmt = require("prompt-sync")()

const string = propmt("enter a string: ")
const result = capitalizeFirstLetter(string)
console.log(result)