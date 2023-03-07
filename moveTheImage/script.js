
var image = document.getElementById('image')

var x = 0
var y = 0

var step = 10

document.addEventListener("keydown", function(event){
    var keyCode = event.keyCode

    if (keyCode === 37) { 
        x -= step
      } else if (keyCode === 38) { 
        y -= step
      } else if (keyCode === 39) { 
        x += step
      } else if (keyCode === 40) {
        y += step
      }
      image.style.left = x + "px"
      image.style.top = y + "px"
})