const prompt = require("prompt-sync")()
let result

const operator = prompt("enter operator (either of them +, -, *, /): ")
const num1 = parseInt (prompt("enter first number: "))
const num2 = parseInt(prompt("enter second number: "))


switch(operator){
    case '+':
        result = num1 + num2
        console.log(`${num1} + ${num2} = ${result}`)
         break

    case '-':
        result = num1 - num2
        console.log(`${num1} - ${num2} = ${result}`)
        break
    
    case '*':
        result = num1 * num2
        console.log(`${num1} * ${num2} = ${result}`)   
        break
        
    case '/':
        result = num1 / num2
        console.log(`${num1} / ${num2} = ${result}`)
        break

    default:
        console.log('Invalid operator')
        break     
}

