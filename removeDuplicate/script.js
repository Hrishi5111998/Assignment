
function removeDuplicate(){
    let cart = ["apple", "banana", "orange", "apple"]
    let uniqueCart = []

    for(let i = 0; i < cart.length; i++){
        if(!uniqueCart.includes(cart[i])){
            uniqueCart.push(cart[i])
        }
    }
    console.log("original cart: " + cart)
    console.log("cart without duplicate: " + uniqueCart)
}
removeDuplicate()