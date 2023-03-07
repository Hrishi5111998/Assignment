function countVowel(str){
    const count = str.match(/[aeiou]/gi).length
    return count
}

const propmt = require("prompt-sync")()

const string = propmt("enter string: ")
const result = countVowel(string)
console.log(result)


