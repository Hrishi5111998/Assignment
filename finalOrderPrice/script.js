const calculateFinalOrderPrice = cart => {
let totalCost = 0
cart.forEach(item =>{
    totalCost += item.unitPrice * item.quantity
})
  return totalCost  

}

const cart = [
    {unitPrice: 10, quantity: 5},
    {unitPrice: 15, quantity: 7}
]


const result = calculateFinalOrderPrice(cart)
console.log(result)