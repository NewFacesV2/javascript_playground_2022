// let d;


//NOTE 4 main ways to make a date object

// d = new Date(); //NOTE This method calls the dateConstructor. With no arguments provided inside the () it will automatically go to the current date and time
// d = new Date(1164411006456); //NOTE This method is the amount of milliseconds since 1970, which is Unix time. This particular example will lead to 25/11/2006 10:30:06.
// d = new Date("2019-08-02T11:30:00+10.00"); //NOTE this method Parsing in a date/time string. MDN says not to use this method because depending on the browser it may break
//NOTE  Iso 8601 date formatted string above
// d = new Date (2019, 7, 2, 11, 30, 27, 0); //NOTE Parsing in the individual values of the date. Month index starts at 0 and ends at 11. So January is 0, December is 11


// console.log(d.toString())

// console.log(d.toString());

// console.log(d);

//NOTE Getters

// console.log(d.getFullYear()); //NOTE for example using the last  method of date and time, this command will display the year from the arguments we have inserted. So- 
// - 2019 in this instance. It will only display the year, on a single line. Note that below, the (d.getDate()) is used rather than (d.getDay()) which is what my brain-
// - Thought it would be written as.
// console.log(d.getMonth())
// console.log(d.getDate())
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getMilliseconds())

// console.log(d.getUTCHours())

//NOTE Setters

// d.setMinutes(10);  //NOTE this will take the values from the date and time we set above in the 4th method of date and time, and it will change the values of minutes, Date, and hours.
//NOTE So the date will remain the same except the date will change from the 2nd, to the 5th. and the Hours to 4 instead of 11, and the minutes to 10 instead of 30
// d.setDate(5);
// d.setUTCHours(4)
// console.log(d.toString())

// console.log(d.toISOString());
// console.log(d.toLocaleString("en-AU")) //NOTE displaying the d (date) variable in the console in Australian date/time format
// console.log(d.toLocaleString("en-US")) //NOTE displaying the d (date) variable in the console in USA date/time format

//NOTE toString Learning
//NOTE whilst doing this date and time exercise, I came across toString. Wanted to learn more about it.

/* toString takes an object and converts it into a string format


*/

// number = new Number(17);

// console.log(number) //NOTE this will pring the number 17 as a Number: 17. It is strictly a number value.
// console.log(number.toString()) //NOTE this will print the number 17 as a string, which essentially means converting to text
// console.log(number.toString(2)) //NOTE this will print the binary version of 17, 10001
// console.log(number.toString(7)) //NOTE these numbers go from 2-36, I am not sure what every number does, but this can complete alot of tasks






