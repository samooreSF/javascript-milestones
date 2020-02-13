//Initiate an array and return its length

let coolArray = ['a','b','c','d','e'];
//indexes         0   1   2   3   4
let k = 3
//Change the value of K to experiment

console.log('The 1st element of the array is: ',coolArray[0]);
console.log('The 2nd element of the array is: ',coolArray[1]);
console.log('The last element of the array is: ',coolArray[coolArray.length-1]);
console.log('The length of the array is: ',coolArray.length);
console.log('The letter at element k is: ',coolArray[k]);
//if the element is larger than the arrays length -1 than it will print undefined
console.log('----------------');

//Change the values in an array

function change(array){
  let k = 3
  array[0] = 'z';
  array[1] = 'l';
  array[array.length-1]='g';
  array[k] = 'yo';

  return array;
}
//PRINT AN ALTERED ARRAY
console.log('original array was [a,b,c,d,e]');
console.log(change(['a','b','c','d','e']));
console.log('------------');

function append(array){

  array.push('Hello');//append element
  array.push('My')
  array.unshift('First');//add element to the front of the array
  array.shift(0);//Remove element at front of the array
  return array;
}
console.log('Look within the append function to see different methods used');
console.log(append([]));
