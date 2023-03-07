const marks = [56, 84, 63, 74, 91]
let hightestMarks = 0

for(let i = 0; i < marks.length; i++){
//   if(marks[i] > hightestMarks){
//     hightestMarks = marks[i]
//     i++
//   }
hightestMarks = marks[i] > hightestMarks ? marks[i] : hightestMarks
}
console.log(hightestMarks)