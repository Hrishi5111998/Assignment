window.onload = function(){
const check = words => {

        if(words.length > 8){
            words =  `<span style="background:yellow;"> ${words} </span>`
        }else{
             words
        }
        return words
    }
let str = document.querySelector('#paragraph').innerText
var newStr = str.trim().split(' ').map(check).join(' ')
document.querySelector('#paragraph').innerHTML = newStr
  
}




