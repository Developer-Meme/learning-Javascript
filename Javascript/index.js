//learning Javascript from scratch from bro code
//Date: 18th June 2024
/*To output some text i can write
*/
//console.log(`Developer Meme`)
//console.log(`Like luffy i love meat`)
//To create an alert box u write
//window.alert(`Hello World`)
//window.alert(`Future Nextjs senior developer`)

//In Javascript this is a single line comment
/*this
is a
multi-line
comment
*/ 

/*To change the content of an Html element i have to select it first 
then change the text content then set it equal to the text of your choosing
*/
//document.getElementById("myRuby").textContent=`Hey there!`;
//document.getElementById("myDove") .textContent=`Am Developer Meme`;

/*A VARIABLE is a container that stores a value.
the value behaves as if it were the value it contains
There are 2 ways of using variables 1]Declaration let x; 2]Assignment x-100
*/
//one variables only has one value it cant be changed there cant be 2 x ...only one x or y
//this is variable declaration and once u assign a variable you can give it a value
/*
let p;
p=100; //this is variable assignment
console.log(p);
//when put together it becomes let x = 100;
//this is combining declaration and assignment together this is when i know the value
//example if am using user-input i will assign the value later
let s = 22;
console.log(s);
*/

//DATE: 19th June 2024
/*
//DATA TYPES
//1]Number
let age = 22;
let price = 10.99;
let gpa = 3.5;
console.log(`I am ${age} years old`);
console.log(`The price of bread is $${price}`);
console.log(`My GPA is ${gpa}`);
//If you need to display the type of datatype you can use the typeof operator before the variable's value
console.log(typeof gpa);//the above are all numbers
*/
/*
//2]String-a string is a series of characters
let firstName = "Victor";
let favoriteFood = "beef";
let email = "victor123@gmail.com";
//the type of datatype is coded after u display the variable if you use it before there will bw an error
// this error will be displayed -ReferenceError: Cannot access 'firstName' before initialization at index.js:51:9
//this is because the variable has not been declared yet and the rest of the code wont work
//strings can contain numbers and special characters but string numbers cant be used in arithmetics
console.log(typeof firstName);
console.log(`My name is ${firstName}`);
console.log(`My favorite food is ${favoriteFood}`);
console.log(`My email is ${email}`);
*/
/*
//3]Boolean- a boolean is a true or false value they are used as flags in my program
let online = false;
let forSale = false;
let isStudent = true;

console.log(typeof online)
console.log(`Bro is online: ${online}`);
console.log(`Am selling my dog: ${forSale}`);
console.log(`I am a Computer Science Student: ${isStudent}`);
//we mostly use boolean with if statements to check things
//for example if someone is online do this and if he/she is'nt do something else
*/
