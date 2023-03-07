const calculatePercentageDiscount = (originalPrice, discountedPrice) => {

const discount = originalPrice - discountedPrice
const discountPercent = (discount / originalPrice) * 100
return Math.round(discountPercent * 100) / 100

}
const originalPrice = 800
const discountedPrice = 565
const result = calculatePercentageDiscount(originalPrice, discountedPrice)
console.log(result)