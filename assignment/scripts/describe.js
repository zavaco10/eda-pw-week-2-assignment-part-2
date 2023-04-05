// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We made a variable [name] and set the value to 'Dane'. Then wrote and if/else statement saying if [name] 
// equal in value and type to 'Mary' then the console.log will return the string 
// 'Hi, Mary'. If if is not equal then the console.log will return 'How do you do?' 
//We will console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declared our variable [secret] to the yet unknown value of the if/else statement. Inside the if/else we declared a variable
// [code] and assigned it the value of 123. In the statement, if [code] is equal in value and type to 123
// then [secret] will return 'super' to the [secret] variable and mulitply the value of [code] by 2, being 246. If [code]'s multiplied number is greater than 250
// then [secret] will return 'duper'. Console.log would return 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We've declared the variable [isStudent] and assigned it a boolean value of true, declared variable [age] and assigned it 34,  
// and declared variable [zip] and assigned 55407. The following if/else if statement says if the variables [isStudent] is true and the [zip] is greater 
// than 80000 the console.log will return the string 'You're a student on the West Coast!'. If that wasn't correct the code would move to the next statement to evaluate. 
// If [isStudent] is false or the [age] is less than 30 the console.log would return 'What are your hobbies?'. If neither of those values are true it'll evaluate the next statement.
// If only [isStudent] is true concole.log will return the string 'Welcome to Prime!'. If none of the values in the statements are correct console.log will
// return 'How about the weather?'. If I were the [isStudent] console.log would return 'Welcome to Prime!'.


// 
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
FIX-let colorOne = 'red'; //colorOne needs to be set to 'blue'
FIX-let colorTwo = 'blue';  //colorTwo needs to be set to 'red'
FIX-colorTwo = 'purple';

let mix = true;

if (mix === true) {
  colorOne = 'purple';
  FIX-colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

FIX-if (temp > 39 || time >= 4) {   //the pipes '||' need to be changed to '&&'. pipes is an 'or' operator, && is the 'and' operator
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

FIX-if(minAge <= age) {   //variables age and minAge locations need to be switched. and the less than operator needs to be changed to a greater than operator.
  console.log('no entry');
} else {
  console.log('enter');
}
*/

