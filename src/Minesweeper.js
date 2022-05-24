// declaring a constant variable named minefield. The value is an array.
const minefield = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];

// function that includes all the code to convert the array
function bombsNearbyweeper(minefield) {
  //Helper function that allows the program to navigate through the array. It also returns 0 for out of bounds cases.
  function getlocation(row, col) {
    if (row < 0 || col < 0) {
      return 0;
    }

    if (row >= minefield.length) {
      return 0;
    }

    if (col >= minefield[row].length) {
      return 0;
    }
    // This is my bomb initialiser, if the row or col inside the array has a 1 (true), it will return the value 1 which we will store for later.
    if (minefield[row][col] === 1) return 1;
    return 0;
  }
  // for loop that iterates through the minefield rows
  for (let row = 0; row < minefield.length; row++) {
    //initializing the new minefield.
    let newMinefield = [];
    // Iterates through the columns as long as columns are less than the length of the rows.
    for (let col = 0; col < minefield[row].length; col++) {
      // If statement using the helper function from earlier. If the location in the row and col is equal to 1, that location will become a 9 instead.
      //The value 9 is to make sure it is above the numbers of the values surrounding the bomb. We will change the 9 to 'x' Later.
      if (getlocation(row, col) === 1) {
        newMinefield += 9;
        /* Else, Using the coordinates below, it will iterate through each possible surrounding cell of the bomb.
there is only 8 possible coordinates around each bomb, so 8 coordinates are needed.  */
      } else {
        let bombsNearby = 0;

        bombsNearby += getlocation(row - 1, col + 1);

        bombsNearby += getlocation(row - 1, col);

        bombsNearby += getlocation(row - 1, col - 1);

        bombsNearby += getlocation(row, col - 1);

        bombsNearby += getlocation(row, col + 1);

        bombsNearby += getlocation(row + 1, col - 1);

        bombsNearby += getlocation(row + 1, col);

        bombsNearby += getlocation(row + 1, col + 1);
        //This line will add all of the new values to the new minefield
        newMinefield += bombsNearby;
      }
    }

    /* Moving the values from newMinefield to a new array called newMinefield2 because
the previous array newMinefield was not displaying the values as an array. Could not figure out why.
My solution was to split the array and then use .map to change all the values to integers.  */

    let newMinefield2 = newMinefield.split("").map(Number);
    /*We now have an array of arrays again, but the bombs are still 9 instead of "x" */

    /* This for in will check the all the index values inside the array
if the index value is a 9, it will then change it to an "x"*/
    for (i in newMinefield2) {
      if (newMinefield2[i] === 9) {
        newMinefield2[i] = "x";
      }
    }

    //Finally, simply console log the new array with all the correct values.
    console.log(newMinefield2);
  }
}

//calling the bombsNearbyweeper function to run the code.
bombsNearbyweeper(minefield);
