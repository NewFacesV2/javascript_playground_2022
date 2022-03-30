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

function outerfunc() {
    var msg = "hello world"

function innerfunc() {
    console.log(msg)
}

console.log(innerfunc())
}

console.log(outerfunc())




