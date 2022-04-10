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

//   function addNumbs(num1 = 2, num2 = 2) {   //Basic function adding 2 numbers and returning the total to addnumbs. then when we console log addnumbs, we get the stored returned value
//       return num1 + num2;                  // You dont have to put numbers in the parameters for the function, but you can.
//                                           //If you just use num1, num2, you will have to put the numbers inside the console.log(addnumbs())
//   }
  
//   console.log(addNumbs());




//   const addNumbs = (num1, num2) => num1 + num2   // This is adding numbers and console logging the result more simply
  

//  console.log(addNumbs(5, 5))


//  const multiplythis = (num1, num2) => num1 * num2

//  console.log(multiplythis(5, 5))

// OBJECT ORIENTED PROGRAMMING //NOTE IMPORTANT

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
                                                                             //this is object oriented programming in ES5.
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

//Istantiate Object

const person1 = new Person('john', 'doe', '4-3-1980');
const person2 = new Person('Mary', 'Jane', '3-5-1970')

console.log(person2.getFullName());
console.log(person1);

 





  


