
let r = 6
let str = ""
for(let i = 1; i <= r; i++){
    for(let j = 1; j <= r-i; j++){
       str += "* "
    }
    str += "\n"
}
console.log(str)