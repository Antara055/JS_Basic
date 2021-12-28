const flower=["rose","lily","lotus","tulip"];
console.log(flower.length) //length of array

//fetcing element of array
let first=flower[1]
console.log(first)
let last=flower[flower.length-1]
console.log(last)

//
flower.forEach(function(item){
    console.log(item);
})
//Added element at end of array
let newItem=flower.push("jasmine")
console.log(flower)

//Removing element at end of array
let deleteLast=flower.pop()
console.log(deleteLast)
console.log(flower)

//Added element at begining of array
let newItemBegining=flower.unshift("marigold")
console.log(flower)

//Removing element from begining of array
let deleteFirst=flower.shift()
console.log(flower)

//checking index
let pos=flower.indexOf("lotus")
console.log(pos)

//splice can add and delete also from perticular index
const letter=["a","b","c","d","e"]
letter.splice(2,1);
console.log(letter)
letter.splice(0,1,"aa","bb")
console.log(letter)

let wel="hi hello";
let get=wel.slice(0,7) //form 0 to 7index it will store
console.log(get)
let split=wel.split(" ")
console.log(split)
let join=letter.join("*")//convert array into string with specific sepatator like here "*"
console.log(join)

let afterCov=flower.toString() //concatinate array to string
console.log(flower)
console.log(afterCov)

//concat multiple array into single array
const fruits1=["apple","mango"]
const fruits2=["banana","grapes"]
const fruits3=["kiwi"]
const allFruits=fruits1.concat(fruits2,fruits3);
console.log(allFruits)
