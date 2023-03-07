function double(arr){

    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2
    }
    return arr
}
let array = [5,7,9,3,4,5]
const doubleArr = double(array)
console.log(doubleArr)