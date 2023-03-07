const btn = document.querySelector('.btn')

btn.addEventListener('click', function clickBtn(){
    const heading = document.querySelector('.text')
    if(heading.innerHTML === "The most affordable learning platform"){
        heading.innerHTML = "PW Skills"
    }else{
        heading.innerHTML = "The most affordable learning platform"
    }
})
