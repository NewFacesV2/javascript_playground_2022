// Data types

//Strings, NUmbers, Boolean, null, undefined, Symbol

// const name = 'john';
// const age = 51;

// //Concatenation

// console.log('my name is ' + name + ' and I am ' + age);
// // this is not preferred method of Concatenation

// console.log(`my name is ${name} and I am ${age}`)
//much better, dont have to worry about spacing

// const s = 'Hello world';

// console.log(s.substring(0, 5).toUpperCase()); // This will take characters 0 to 5 only, and also display in upperCase
// console.log(s.split('')) // Split will take all the values within the string and split them up into an array

// const b = 'technology, computers, it, code';

// console.log(b.split(', ')); // using ', ' will split the string at the comma, and put the items into an array at each comma.

//Arrays - variables that hold multiple values

// const numbers = new Array(1,2,3,4,5)

// console.log(numbers) // Number array, pretty simple

// const fruits = ['apples', 'oranges', 'pears', 5, true]


// fruits.push('mangoes');   // .push, adding a value to the end of the array

// fruits.unshift('Strawberries')   // .unshift, putting an object at the beginning of array

// fruits.pop()  // pop removes the value from the end of the array

// console.log(Array.isArray(fruits))     // quickly testing to see if fruits is an array, it is. TRUE!

// console.log(fruits.indexOf('oranges'))     // we are seeing where oranges is inside the array, it is number 2

// console.log(fruits)


// object literals

const iain = {
    firstName: 'iain',
    secondName: 'Henderson',
    age: 26,
    hobbies: ['gaming', 'camping', 'fishing'],
    address: {
        street: '31 Abraham Heights',      //an object
        city: 'Nelson',
        country: 'NZ'
    }

}

// const { firstName, secondName, address: { city } } = iain;     //desconstructing the object

// console.log(firstName)
// console.log(city)


// iain.email = 'iain@gmail.com'   // adding a property to the object

// console.log(iain)

//NOTE Arrays of objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        iscompleted: true
    },
    {
        id: 2,
        text: 'Do dishes',
        iscompleted: false             // creating an array of objects!  
    },
    {
        id: 3,
        text: 'drink beer',
        iscompleted: true
    },
];


// console.log(todos[1].text)      // displaying only the second object in the array [1].
//                                 .text it taking only the text from the object 


//JSON DERULO

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)                    // converting to a JSON string

// FOR LOOPS

// for(let i = -0; i <= 10; i++) {                
//     /* - This for loop create a variable named i. we then set the value for i to 0
//        - We then use ; to indicate a new line, on the same line
//        - then we have i >= 10, this is the condition of the loop
//        so the loop will continue until i is no longer lesser than or equal to 10, it will stop after 10.
//        - i++ means the loop is going to add +1 to the value of 0, over and over again
//        until it is no longer inside the paramaters of the condition >=10
    
//     */
//     console.log(`For loop number: ${i}`);   // We are not console logging so that it will say "for loop number:" before every iteration
//     // We are then adding the ${i} at the end to call the variable.
// }

              
// //While loops

// let i = 0;
// while(i <= 10) {
//     console.log(`while loop number: ${i}`);
//     i++;                                       //NOTE Why is this i++ not inside the while arguments brackets ()??? 

// } 

// for(let i = 0; i < todos.length; i++) { // Here we have changed the condition of the for loop to increment i++ as long as it is less than the numbe of items inside the todos array, which is 3
//     console.log(todos[i].text)   // this console log will display the text portion of each item in the array, and stops at the length of the array, which is the 3 items!

// }

// for(let todo of todos) {
//     console.log(todo);      //NOTE using of. dont understand this one
// }

//forEach, map, filter //NOTE IMPORTANT

// const todoText = todos.map(function(todo) {   //NOTE Map, dont understand fully whats going on here
// return todo.text;

// });

// console.log(todoText)

//  const todoCompleted = todos.filter(function(todo) {  //FILTERING is creating a variable called toDoCompleted
//                                                      //The value of todocompleted is todos.filter(function(todo)
//      return todo.iscompleted === true;              //Breaking this down - todos(the object)filter(filter command)function(creating a function)(todo)(naming the function)
//                                                    // RETURN todo(calling the function).iscompleted === true. Making todoCompleted only the objects which are iscompleted: true
// });

//  console.log(todoCompleted)

// const todoCompleted = todos.filter(function(todo) {
//     return todo.iscompleted === true;

// }).map(function(todo){                  //This is using filter + map, to return only the items that are isCompleted === true, and only returning the text value for those items.
//     return todo.text;
// })

// console.log(todoCompleted)

//Conditionals

// const x = 10;                               //Here we have conditional if statements.

// if(x === 10) {                              // if x is exactly equal to 10 then console log "x is ten"
//     console.log('x is ten')

// } else if(x > 10) {                         //else if (x > 10) means that if the value is not 10, and the value is less than 10, console log "x is less than 10"
//     console.log('x is greater than 10')

// } else {                                    // JUST using else, because we have already covered if x is 10, or less than 10. So any other number or value would be considered as simple else, and therefore would have to be greater than 10
//     console.log('x is less than 10')

// }



// const x = 4;
// const y = 10;                             

// if(x > 5 || y > 10) {                                       // within the f statement we can use 'or' symbolised by || 
//     console.log('x is more than 5 or y is more than 10')   // this means that the console log will print if any of MULTIPLE conditions are met
//                                                           // Multiple conditions within an if statement, very cool. I understand this.
//                                                          // if I want the console log to only print if both conditions are met, I can use && in the place of ||
// }

//Ternary operator, shorthand if statement //NOTE ? = then : = else
  // Used to assign variables based on an if statement

//   const x = 10;

//   const color =  x >= 10 ? 'red' : 'blue';  // Here we are creating a variable named color
//                                           // we are then changing the value of colour to a string of either 'red' or 'blue' based on the value of another variable, x
//   console.log(color.toUpperCase())


//switch

//   const x = 10;

//   const color =  x > 10 ? 'red' : 'blue';

//   switch(color) {
//       case 'red':
//       console.log('color is red');
//       break;
//       case 'blue':
//           console.log('color is blue');
//       break;
//       default:
//           console.log('color is not red or blue');
//           break;
    
//   }

//   function addNumbs(num1 = 2, num2 = 2) {      //Basic function adding 2 numbers and returning the total to addnumbs. then when we console log addnumbs, we get the stored returned value
// //       return num1 + num2;                  // You dont have to put numbers in the parameters for the function, but you can.
// //                                           //If you just use num1, num2, you will have to put the numbers inside the console.log(addnumbs())
// //   }
  
// //   console.log(addNumbs());




// //   const addNumbs = (num1, num2) => num1 + num2   // This is adding numbers and console logging the result more simply
  

// //  console.log(addNumbs(5, 5))


// //  const multiplythis = (num1, num2) => num1 * num2

// //  console.log(multiplythis(5, 5))

// // OBJECT ORIENTED PROGRAMMING //NOTE IMPORTANT


// //Class

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);

//     }

//     getBirthYear() {
        // return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// //Istantiate Object

// const person1 = new Person('john', 'doe', '4-3-1980');
// const person2 = new Person('Mary', 'Jane', '3-5-1970')

// console.log(person2.getFullName());
// console.log(person1);

// class Date {
//     constructor(Day, Month, Year) {
//     this.Day = Day;
//     this.Month = Month;
//     this.Year = Year;

// }
 
// getEntireYear() {
//     return this.Year.getFullYear();
// }
// }

// const date1 = new Date(05, 04, 1996)

// console.log(date1)
// console.log(date1.Year)
// console.log(date1.Month)
// console.log(date1.Day)

//NOTE CODING PRACTICE STUDY GROUP

//TODO 

/* create a function that takes an array as a parameter ["1", "2", "3"] and return the array values all in number type */

// function toNumbers(arr) {
//     return typeof arr

// }

// console.log(parseInt(["1", "2", "3"]))

// //rhyleis answer

// const convert = (arr) => arr.map((elem) => parseInt(elem));
// numbers = convert(["1", "2", "3"]);

// numbers.forEach((elem) => {
//     console.log(typeof elem);
// })


//Create a function that takes any argument and tells me whether the number is odd or even.

// function function1(num1) {
//     return num1 % 2

//NOTEeven or odd?

//  function evenOrOdd(num) {
//      if (num % 2 === 0) {
//          return "even"
// } else {
//     return "odd"
// }

// }

//  console.log(evenOrOdd())

// //NOTE Logic gates (and, or, not)

// function and(a, b) {                    //and
//     if(a && b) {
//         return "true"
//     } else {
//         return "false"    
// }
// }

// console.log(and(1,1))                   //or

// function or(a,b) {
//     return a || b
// }

// console.log(or(1,1))                    //not

// function not(n) {
//     if (n === 1) {
//         return 0

//     } else {
//         return 1
//     }
// }

// console.log(not(0))
    

//NOTE 13/4 LAST LESSON BEFORE BREAK

// Write a function that takes a number from (1-12) and returns it's corresponding month

// let month = {
//     1: January,
//     2: February,
//     3: March,
//     4: April,
//     5: May,
//     6: June,
//     7: July,
//     8: August,
//     9: September,
//     10: October,
//     11: November,
//     12: December
// }

// function nameOfMonth() {
//     return month
// }

// console.log(nameofMonth(3))

// function nameOfMonth(num) {
//     let answer = ""
//     switch (num) {
//         case 1:
//             console.log("January");
//             break;
//         case 2:
//             console.log("February");
//             break;
//         case 3:
//             console.log("March");
//             break;
//         case 4:
//             console.log("April");
//             break;
//         case 5:
//             console.log("May");
//             break;
//         case 6:
//             console.log("June");
//             break;
//         case 7:
//             console.log("July");
//             break;
//         case 8:
//             console.log("August");
//             break;
//         case 9:
//             console.log("September");
//             break;
//         case 10:
//             console.log("October");
//             break;
//         case 11:
//             console.log("November");
//             break;
//         case 12:
//             console.log("December");
//             break;
//     }
//     return answer;
// }
// nameOfMonth(1)

// function nameOfMonth(num) {
//     if (num === 1) {
//     return "January"
//     }
//     if (num === 2) {
//         return "February"
//     }
//     if (num === 3) {
//         return "March"
//     }if (num === 4) {
//         return "April"
//     }if (num === 5) {
//         return "May"
//     }if (num === 6) {
//         return "June"
//     }if (num === 7) {
//         return "July"
//     }if (num === 8) {
//         return "August"
//     }if (num === 9) {
//         return "September"
//     }if (num === 10) {
//         return "October"
//     }if (num === 11) {
//         return "November"
//     }if (num === 12) {
//         return "December"
//     }
    
// } 

// console.log(nameOfMonth(3))

// const birthday = new Date('August 19, 1975 23:15:30')
// const day1 = birthday.getDay();

// console.log(day1)

// function getDay(day) {
//     var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//     var date = new Date(day)

//     return days[date.getDay()]

// }

// console.log(getDay(7/6/2019))


//create a function that returns true if the length of a string is even and false if the length of the string is odd

// function isEven(str) {
//     var len = string.length
//     return  (len % 2 == Math.round(len/2))
// }

// console.log(isEven())

//ES6
// const isEven = (string) => string.length % 2 == 0

//create a function takes 2 arguments first one is array second is string.
//indexArray (["Ali", "Kahwaji", "NMIT", "Nelson"], "NMIT") -> 2

// function getIndex (array, string) {
//     return array.indexOf(string)

// }

// console.log(getIndex(["Q", "W", "R"], "W"))

// //ES6
// const getIndex = (array, string) => array.findIndex(val => val === string)

//create a function that returns the total of all odd numbers
//up to and incuding the number passes in as an parameter

// var sum = 0;
// for (var i = 1; i <= 5; i++) {
//   if (i % 2 == 1)
//     sum += i;
// }
// console.log(sum);

// function oddNumbersSum(num) {
//     let total = 0
//     for (let i = 1; i <= num; i+2) {
// total += i
//     }
// return total
// }

// console.log(oddNumbersSum(5))

//Create a function that takes an array of strings and numbers and filter out the array so it returns only an array of numbers

//example: onlyNumber (["Ali", 7010, "Kahwaji", 2022]) -> [7010, 2022]

// function onlyNumbers(arr) {
//     return arr.filter(val => Number.isInteger(val))
// }

// console.log(onlyNumbers(["iain", 1, 2, 3]))

//create a function that a number as an argument, increment the number by 1 and return the result

// function addByOne(num) {
//     return num + 1
// }

// console.log(addByOne(1)) // -> 2
 
  


