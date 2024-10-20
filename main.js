// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const filterArr = num.filter((item) =>{
//     if (item % 2==0){
//         return true
//     }
// })
// console.log(filterArr);


// const strings = ["apple", "banana", "cherry", "fig", "grape", "watermelon"];
// const filterArr = strings.filter((item) =>{
//     if (item.length>5){
//         return true
//     }
// })
// console.log(filterArr)


// const people = [
//     { name: "John", age: 17 },
//     { name: "Jane", age: 22 },
//     { name: "Mark", age: 19 },
//     { name: "Anna", age: 16 },
//     { name: "Bob", age: 24 }
//   ];
// const filteArr = people.filter((item) =>{
//     if (item.age>18){
//         return true
//     }
// })
//  console.log(filteArr)


// const num = [-3, 0, 2, -5, 7, -1, 10, -12, 5];
// const filterArr = num.filter((item) => {
//     if (item > 0)
//         return true
// })
// console.log(filterArr);


// const strings = ["", "hello", "world", "", "javascript", " ", "react"]
// const filterArr = strings.filter((item) =>{
//     if (item.length>1){
//         return true
//     }
// })
// console.log(filterArr);


// const num = [5, 12, 8, 20, 33, 7, 15, 1];
// const filteArr =num.filter((item) =>{
//     if (item>10){
//         return true
//     }
// })
// console.log(filteArr);


// const users = [
//     { name: "Alice", active: true },
//     { name: "Bob", active: false },
//     { name: "Charlie", active: true },
//     { name: "Dave", active: false }
//   ];
//   const filteArr = users.filter((item) =>{
//     if (item. active == true){
//         return true
//     }
// })
// console.log(filteArr);


// const numbers = [3, -2, 5, -8, -7, 0, 4, -1]
// const filteArr = numbers.filter((item) => {
//   if (item < 0) {
//     return true
//   }
// })
// console.log(filteArr);


// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "admin" },
//   { name: "Dave", role: "user" }
// ];
// const filterArr = users.filter((item) => {
//   if (item.role == 'admin'){
//     return true
//   }
// })
// console.log(filterArr);


// const items = [
//     { name: "Item 1", value: 5 },
//     { name: "Item 2", value: 8 },
//     { name: "Item 3", value: 12 },
//     { name: "Item 4", value: 7 }
// ];
// const filterArr = items.filter((item) => {
//     if (item.value % 2 == 0) {
//         return true
//     }
// })
// console.log(filterArr);










// const num = [1, 2, 3]
// const numMap = num.map((item) => {
//   return item * 2
// })
// console.log(numMap);


// const world = ['привет', 'мир']
// const worldMap = world.map((item)=> {
//   return (item.toLocaleUpperCase())
// })
// console.log(worldMap);


// const num = [1, 2, 3, 4]
// const numMap = num.map((item) => {
//   return item + ""
// })
// console.log(numMap);


// const animals = ['кот', 'собака', 'тигр']
// const animalsMap = animals.map((item) => {
//   return item + '!'
// })
// console.log(animalsMap);


// const users = [
//   { name: "Alice", active: true },
//   { name: "Bob", active: false },
//   { name: "Charlie", active: true },
//   { name: "Dave", active: false }
// ];
// const newerMap = users.map((item) => {
//   return item.name
// })
// console.log(newerMap);










// const users = [
//   { name: "Alice", active: true },
//   { name: "Bob", active: false },
//   { name: "Charlie", active: true },
//   { name: "Dave", active: false },
// ];
// const findArr = users.forEach(element => {
//     if (element.active) {
//         console.log(element)
//     }
// })


// const num = [1, 3, 7, 8, 10]
// const findArr = num.find((item) => {
//     return item == 8
// })
// console.log(findArr);


// const animals = ['кот', 'собака', 'тигр', 'слон']
// const findArr = animals.find((item) => {
//     return item.length > 3
// })
// console.log(findArr);


// const num = [5, 9, 12, 3, 18]
// const findArr = num.find((item) => {
//     return item > '10'
// })
// console.log(findArr)


// const name = [
//     { name: 'Алекс', age: 25 },
//     { name: 'Мария', age: 17 },
//     { name: 'Иван', age: 19 }
// ]
// const findArr = name.find((item) => {
//     return item.name == "Мария"
// })
// console.log(findArr);


// const num = [3, 5, -2, -8, 7]
// const findArr = num.find((item) =>{
//     return item < 1
// })
// console.log(findArr);