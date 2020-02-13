//Determine if Value is even or Odd

function even_odd(num){
//2 cannot go into an odd number; You can use module to see if 2 completely goes into a #
if(num % 2 === 0 ){
  console.log('2 can go into the number so it will return true');
  return true;
}
console.log('The number is not even so it will return false');
return false;
}
console.log(even_odd(43));//function call



//Increase or the Decrease the value of a number

function increment(num,val){ //val is how much you want to increment the num by

  num+=val; //Use val variable to increment num.
  //num+=1; //You can use a for loop to increment by one a certain amount of times
  //num+=3;
  return num;

}
console.log(increment(20,3));

function decrement(num,val){ //val is how much you want to increment the num by

  num-=val; //Use val variable to increment num.
  //num-=1; //You can use a for loop to increment by one a certain amount of times
  //num-=3;
  return num;
}
console.log('20 - 3 is equal to;');
console.log(decrement(20,3));
