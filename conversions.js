//convert a number to a string

let num = 45 ;

num = num.toString() ;
console.log('convert a number to string using toString()', num);

//convert a string to a number

let string = "543";
let string2 = '546random';


console.log('Look at print statements to understand syntax');
console.log('You can use Number() function to convert string',Number(string));
console.log('You can also use parseInt() to convert to a whole number',parseInt(string));
console.log('parseInt should get rid of any extra strings',parseInt(string2));

//Splitting and Joining Arrays

function split(array) {
  let split = array.split('');
  return split;
}

console.log('Split a string into an array of individual characters: ',split('apple'));

function join(array) {

  let joined = array.join('|');
  //joined = array.join('');
  return joined;
}

//console.log('You can join strings together using join: ',join(['one', '--two--', 'three']));
console.log('Look within the join function and uncomment different statements');
console.log('Joined strings with specufal characters: ',join(['one','two','three']));
