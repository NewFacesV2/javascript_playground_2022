//NOTE Week 6 Javascript training

// console.table({first:"test",val:9});
// console.log("Hello world")
// console.error("Hello world")
// console.dir(document)

// console.log("hello world");
// var a = "hello";
// console.log(a);

// var myName = "Iain"
// var myCourse = "Javascript"
// console.log(myName)
// var myAge = 25
// console.log(myAge)
// alert("Welcome");
/* Comment */

// var welcome = "Welcome"  //NOTE This is declaring a variable "welcome" and assigning the value "Welcome"
// // console.log(welcome)  //NOTE this would have printed the original variable value "welcome", I have blanked this line out for now
// var welcome = "Welcome to the gulag" //NOTE this line uses the same variable "Welcome" but I have changed the value to "Welcome to the gulag"
// console.log(welcome) //NOTE This line will print the variable "welcome" with the latest assigned value

// var myName = "iain" //NOTE declaring a variable "myName" an assigning the value "Iain"
// var myName = "ali" //NOTE Changing the value of myName to "ali"
// console.log(myName) //NOTE this will print the latest assigned value of "myName", which is currently "ali"

// var message;
// console.log(message);
// message = null;
// console.log(message);
// var myLight = false;
// console.log(myLight);
// myLight = true;
// if(myLight) {
//     console.log(myLight);
// }
// var score1,score2,score3,score4;
// var a = "hello"
// var b = 10;
// var c = false;
// console.log(a,b,c)

// let name = "iain"
// console.log(name)

// Local scope
// Global scope

// const msg = "hello world"
// console.log(msg)

// if(true) {

//     const msg = "hello world"
    
// }

// console.log(msg) // This will not print msg because the variable msg is locked inside the block of code { const msg }

// Block scope
// const msg = "hello world"
// if(false) {
//     const msg = "hello world"
//     console.log(msg)
// }
// console.log(msg)

// Function scope

// function call() {
//     var msg = "Hello world"
//     console.log(msg)
    
// }

// console.log(call())

//Global Scope

// var msg = "Hello world"

// function readMsg() {
//     console.log(msg)
// }

// console.log(readMsg())

//console.log(msg)

// function outerfunc() {
//     var msg = "hello world"

// function innerfunc() {
//     console.log(msg)
// }

// console.log(innerfunc())
// }

// console.log(outerfunc())

//NOTE DATA TYPES

/*
1 - Numbers
2 - Booleans
3 - Strings
4 - Objects
5 - 

*/

// let a = 1 // Number Datatype
// let b = "Hello" // B is a string
// let c = true // C is a boolean datatype
// let d; // D is undefined Datatype

// let sum = 1 + 1
// console.log(sum)

// let num = 3
// console.log(num)

// let test = 100 / "2"
// console.log(test)


// const value1 = '5';
// const value2 = 9;
// let sum = Number(value1) + value2;

// console.log(sum);

// let output = `the sum of ${value1} and ${value2} is ${sum}`
// console.log(output)

// let alphabet = '4'
// console.log(Number(alphabet));

// let Str = "Iain Henderson"
// console.log(Str)
// let Str1 = "nmit"
// // console.log(Str1)
// // let fullStr = Str + " " +  Str1
// // console.log(fullStr)

// // let newStr = `Hello to my new string! My name is ${Str} and I Study at ${Str1}`

// // console.log(newStr)

// //Boolean only two keywords true and false

// // let bol = true
// // console.log(bol)

// // console.log(3.01 > 3)
// // >= or <= or == or !=

// // console.log( 5 == 5.0)
// // console.log(9 < 8)
// // console.log(3 > 4)

// // let test = ["Hello", "Ali", 21, 2013] // Array Datatype
// // // console.log(test)
// // // console.log(test[2])
// // for(i=0;i<test.length; i++) {
// //     console.log(test[i])
// // }

// //

// // var cat = {
// //     fur: 'black',
// //     whiskers: 'many',   //Object
// //     paws: '5',
// // }

// // console.log(cat)

// //NOTE Numbers

// let sum = 20 + 50
// console.log(sum)


// let total = '10' / 2
// console.log(total)

// //NOTE Strings

// let a = 'basil'
// let b = 'tuxedo'

// let catType = `My cats name is ${a} he is a ${b} cat`
// console.log(catType)

// let make = 'toyota'
// let model = 'vitz'
// let katiesCar = `Katie drives a ${make} ${model}`
// console.log(katiesCar)

// //NOTE Booleans

// console.log(12 >= 7)
// console.log(12 >= 15)
// console.log(50 == 50)
// console.log(5 === 5.0)

// //NOTE Arrays

// let dinner = ["chicken", 'curry', 'brocolli']
// console.log(dinner[2])

// let pets = ['aspen', 'basil', 'chickens']
// for (i=0; i<pets.length; i++) {
//     console.log(pets[i])
// }


//NOTE Objects




// A function is a block of code designed to perform a particular set of tasks.  Syntax = Function function1() {}

// function div(num1, num2) {
//     return num1 - num2
// }

// console.log(div(3,10))

// function sum1(num1, num2, num3, num4) {
//     return num1 + num2 + num3 + num4;
// }

// let num1 = 4
// let num2 = 5
// let num3 = 6
// let num4 = 7

// total1 = `the total is ${num1} + ${num2} + ${num3} + ${num4}`

// console.log(sum1)

// function fourNumbers(num1, num2, num3, num4) {
//     let result = num1 + num2 + num3 + num4
//     return `the sum of 4 numbers is ${result}`
// }

// console.log(fourNumbers(1,2,3,4))

// function test1() {}

// console.log(test1())


