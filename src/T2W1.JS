// Create a function that takes an array and returns both the minimum and maximum numbers in order.


// Declaring function findmax that will take the value of an array
function findmax (arr) {
 let array = []
 let min = arr[0] // = 1 
 let max = arr[0] // = 1

 // For loop to set index to 0, then if index is less than array length, increment. This will happen until the array length is hit
 for (let i = 0; i < arr.length; i++) {
     // will loop through and check if array Index (1) is smaller than min, it is not
     if (arr[i] < min) {
         min = arr[i]
     }
     if (arr[i] > max) {
         max = arr[i]
     }
 }

 array.push(min)
 array.push(max)

 return array
    
}

// console.log(findmax([1, 2, 3, 4, 5]))

//Create a function that concatentates a number of arrays together
/* Example
arraysConcat([1,2,3,4,5], [6,7,8,9]) -> [1,2,3,4,5,6,7,8,9]
*/

function arraysConcat(arr, arr2) {
    let array = arr + arr2
    return array
}
// console.log(arraysConcat([1 , 2 , 3], [4, 5, 6]))

function concatArray(...args) {
    return [].concat(...args)
}
// console.log(concatArray([1,2,4], [1 , 6, 5], [6, 8, 9]))

const concatsArray = (...a) => a.flat(Infinity)

// console.log(concatsArray([1, 2, 3], [4, 5, 6], [7, 8, 9]))

//Create a function that takes an array of numbers, a string, and returns an array of numbers as per the following rules:
// arrayRules([4, 3, 2, 1], "Asc") -> [1, 2, 3, 4]
//arrayRules ([5, 6, 7, 8,  9]), "Des" -> [9, 8, 7, 6, 5]
//arrayRules ([4, 3, 2, 1], "none") -> [4, 3, 2, 1]

function arrayManip(arr, str) {

  switch(str) {
      case 'Asc':
          return arr.sort((a, b) => a-b)

      case 'Des':
          return arr.sort((a,b) => b-a)

      default:
          return arr
  }
}

//create a function that returns the total number of items in nested arrays

//nestedArrays([1,[2, 3]]) -> 3

// function nestedArrays(arr) {
//    let array = array.flat(infinity)
//    return array
// }

// console.log(nestedArrays([1, 2, 3]))

const nestedArrays = arr => arr.flat(infinity).Length





