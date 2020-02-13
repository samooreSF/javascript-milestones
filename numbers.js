/* Operators
 *See how different operators worl
*/


let num1 = 40; //Change Values to see how operators work

let num2 = 5;

console.log('value of num1 divided by num2 is: ', num1 / num2);
console.log('Value of num1 times num2 is: ', num1*num2);
console.log('Value of num1 plus num2 is: ',num1+num2);
console.log('The remainder of num2 into num1 is: ',num1%num2);
console.log(' 40 to the fifth power is: ', num1**num2);
console.log('The rounded down value of num2 divided by num1 is: ', Math.floor(num2/num1));
console.log('--------------------');

//Get the right most digit of a value using '%'

let val = 465; //Experiment to find which value will leave a remainder of 5. 465-460 = 5

console.log("The right most digit of the value is :", val%460);


//Determine if Value is even or Odd


let odd_num = 43; //2 cannot go into an odd number; You can use model to see if 2 completely goes into a #
if(odd_num % 2 === 0 ){
  console.log('If num is even the if statement will return true');
  return true;
}
console.log('The number is not even so it will return false');
return false;
