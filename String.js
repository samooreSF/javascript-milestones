//String exercises

//Assign, print , and concantenate values

let string1 = 'Hello';
let string2 = 'friend';

// string1 = 'cool';   EXTRA SANITY CHECKS TO UNCOMMENT
// string2 = 'cool';

console.log("This statement prints the value of string1: ", string1);
console.log('This code should print string1 and string2 combined ',string1+string2);


console.log(`The code prints the true/false if string1 contains string2: ${string1.includes(string2)}`);
console.log(`The code prints the true/false if string1 contains string2: ${string1.includes(string2)}`);

console.log('-------------------------------');


//Function for string lengths and UpperCase/Lowercase

function uppercase() {
let waffles = 'Hello';

console.log(`print the uppercase of a string: ${waffles.toUpperCase()}`);
console.log(`print all letters as lowercase of a string: ${waffles.toLowerCase()}`);

console.log(`print the string length: ${waffles.length}`);
}
console.log(uppercase());
