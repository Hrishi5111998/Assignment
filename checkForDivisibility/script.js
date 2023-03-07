let arr = [4,5,6,7,9,45,32,14]
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        continue
    }
    if(arr[i] % 3 === 0){
        console.log(arr[i])
    }
}