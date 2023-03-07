
function colorMix (color1, color2){
   
    const key = color1 < color2 ? color1 + " \t " + color2 : color2 + " \t " + color1
    switch(key){
        case "red \t blue":
          return "purple"
        case "red \t yellow":
            return "orange" 
         case "blue \t yellow":
            return "green"
            default: 
            return "invalid color combination"
    }
}
console.log(colorMix("red", "blue"))
