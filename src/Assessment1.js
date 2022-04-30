class MyDate {    //I have created a class to store all of my code. This class is named MyDate.
  constructor(date, month, year) {   //This is the date constructor, which will create dates based on the inputs for date, month, year.
    this.monthNames = [             // This is an array which contains the names of all the months, I can later use this to hoist the correct month name based on the month number chosen.
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  //This is an array containing 12 numbers, the max numbers of the month for each given month, I can access this array later to throw errors if the day entered is above the limit.
    this.daysInMonth = this.monthDays[month - 1];      //Here we are assigning the days in a month to monthDays by using the number of the selected month. Because we are accessing an array, it starts at 0. To combat this I have added [month - 1], this will -1 from the chosen month which will correlate to the correct value in the days of month array.


    /*Input validation for both the month and date. I have made it so that the month has to be equal or less than 12 AND greater or equal to 1. Otherwise it will throw an error and stop the code.
      Same thing has been done with the days, but instead of using a static value for the max days input, I can use this.daysInMonth that we created earlier,
      which contains the max days in each month. If the value is above this limit, it throws an error and stops the code.

    */
    if (month <= 12 && month >= 1) {                  
                                                       
      this.month = month;                                            
    } else {
      throw new Error("Invalid Month Selected");
    }

    if (date <= this.daysInMonth && date >= 1) {
      this.date = date;
    } else {
      throw new Error("Invalid date Selected");
    }

    this.year = year;    //I didnt put any input validation for year, because there is technically no limit for year.
  }

  /* This is my print method inside the class. it prints the date on 3 lines, in 3 different formats. This is where I can access the 
  monthNames array. Using ${this.monthNames[this.month - 1]} it will grab the month name based on the month number chosen - 1 (because array)
  
  */
  print() {
    return `The date is ${this.date}/${this.month}/${this.year}.\nThe date is ${
      this.monthNames[this.month - 1]
    } ${this.date} ${this.year}.\nThe date is ${this.date} ${
      this.monthNames[this.month - 1]
    } ${this.year}`;
  }
// Increment method which increments the day by 1. I have set conditions so if the increment goes over the days in the month, it sets the month to the next month, and days to 1. Also if the incrememnt causes month to go above 12, it increments year by 1, and set month and date to 1.
  increment() {
    if (this.date >= this.daysInMonth) {
      this.date = 1;
      if (this.month >= 12) {
        this.year += 1;
        this.month = 1;
      } else if (this.month < 12) {
        this.month++;
        this.date = 1;
      }
    } else {
      this.date += 1;
    }
  }
// Decrement method which is the same as the increment method but inverted.
  decrement() {
    if (this.date <= 1) {
      this.date = this.daysInMonth;
      if (this.month <= 1) {
        this.year -= 1;
        this.month = 12;
      } else {
        this.month -= 1;
      }
    } else {
      this.date -= 1;
    }
  }
 subtract(day, month, year) {
   
/* 
  total up the days, plus the total number of days in all the previous months (eg. if month is 6, total up the days of months 1 to 5 then add the days) then add days * 365
*/

//  const startDate = date4
//  const endDate = newDate
//  return startDate - endDate
 }
}


// const date1 = new MyDate(31, 5, 2022);
// date1.increment();
// // console.log(date1.print());

// const date2 = new MyDate(4, 8, 2022);
// date2.decrement();
// console.log(date2.print());

// const date3 = new MyDate(08, 3, 2022);
// date3.decrement();
// // console.log(date3.print());

// const date4 = new MyDate(05, 12, 2022);
// console.log(date4.subtract(04, 12, 2012))


