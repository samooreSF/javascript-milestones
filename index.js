//indexing and template literals

function index(string,value){

  let waffles = string;
  let firstName = "Shaah";
  console.log(waffles[0]);
  console.log(waffles[1]);
  console.log(`The last character of the string is: ${waffles[waffles.length-1]}`);
  console.log(`CharAt() can also be used to finda a string at a value: ${waffles.charAt(value)}`);
  console.log('Appending a to the string creates: ',waffles +'a');
  console.log(`Uses a template literal that says Hello ${firstName}`);//template literals

}
index('hello',3); //You can change the string entered here to experiment
//  H E L L O
//  0 1 2 3 4 indexing
