//Printing out integers 40 to 60
console.log('Prints out Integers Using a for loop');
console.log('Look at structure of for loop');
for (let i = 40;i <= 60; i++) {
  console.log(i);
}
console.log('--------');
console.log('You can also use a for loop with an if statement');
for(let i =1; i<= 60;i++) {
  if(i%2 === 0) {
    console.log(i);
  }
}
console.log('---------------');


//Printing out all even integers 40 to 60
console.log('Prints out only even integers by adding 2 instead of 1 to i');
for (let i =40;i<=60; i+=2) {
  console.log(i);
}
console.log('---------------');

//Printing out integers through min and max variables

console.log('Print out every integer between min and max');

let min = 11;
let max = 21;
console.log('Print even integers between min and max using boolean & if statement');
for (let i=min;i <=max;i++) {
  if(i%2===0) {
    console.log(i);
  }
}
console.log('----------------');

//Multiples of number

function multiple(num,multiple) {
  for (let i = 0; i < multiple; i++) {
    let value = num * (i + 1);
    console.log(`${num} times ${i + 1} is ${value}`);
  }
}
//Practice changing the values of the call to function
console.log('You can change the values within the call to function');
multiple(13,4);
console.log('---------------------');
multiple(3,5);
