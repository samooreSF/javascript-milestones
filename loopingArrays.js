//print out elements of an array

let coolArray = ['a','b','c','d',4];

console.log('Print every element in an array');
//Using of in the for loop will make sure to not print the indexes of the Array
for (let i of coolArray) {
  console.log(i);
}
console.log('-------------------');
console.log('Print every other element');

for (let i = 0; i < coolArray.length; i+=2) {
  console.log(coolArray[i]);
}

console.log('-----------------------');
console.log('Print array in reverse order using for loop')
//You can subtract from the max index and go backward using the for loop

for (let i = coolArray.length-1; i > 0; i-- ) {
  console.log(coolArray[i]);
}
console.log('  ');
//Or you can use reverse()
console.log('using reverse() to reverse array order');
let reversed = coolArray.reverse();
console.log(reversed);
console.log('----------------------------');
console.log('Get the max element of an array');
function max(array) {

let max = array[0];

for (let i=0; i<array.length; i++) {
  if(max < array[i]) {
    max = array[i];
  }
}
return max;
}
let numArray = [5,10,15,100,25,30,35,40,-2,50];
//console.log(max([5,10,15,100,25,30,35,40,45,50]));
console.log('Using Math.max() is the easiest way')
console.log('Maxium value is: ',Math.max(...numArray));
//the ... is serving as a spread operator similar to (* args)in python
console.log('--------------');

function min(array) {
let min = array[0];

for (let i=0; i<array.length; i++) {
  if(min > array[i]) {
    min = array[i];
  }
}
return min;
}
console.log('Get the max element of an array');
//console.log(min([5,10,15,100,25,30,35,40,-2,50]));
console.log('Using Math.min() is the easiest way')
console.log('Smallest value is: ',Math.min(...numArray));
console.log('--------------');

function greaterThan(array,num) {
  let greaterthan = [];
  for (let i =0; i<array.length; i++) {
    if(array[i] > num) {
      greaterthan.push(array[i]);
    }
  }
  return greaterthan;
}
console.log('All the numbers greater than k value',greaterThan([5,76,8,6,5,66],10));
console.log(greaterThan([23,3,4,43,44,76],23));
console.log('-------------------');


function even(array) {
  for (let i =0;i<array.length; i++) {
    if(array[i]%2===0) {//% sees if a number completely goes into another
      console.log(array[i]);
    }
  }

}
console.log('All even numbers in array: ')
even([23,34,54,67,56,76,33]);
