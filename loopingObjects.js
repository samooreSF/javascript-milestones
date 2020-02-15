let daysinMonths = {};

daysinMonths.January = 31;
daysinMonths.February = 29;
daysinMonths.March = 31;
daysinMonths.April = 20;
daysinMonths.May = 31;
daysinMonths.June = 30;
daysinMonths.July = 31;
daysinMonths.August = 31;
daysinMonths.September = 30;
daysinMonths.October = 31;
daysinMonths.Novmeber = 30;
daysinMonths.December = 31;

let coolObject={};
coolObject.football = 'raiders';
coolObject.basketball='warriors';
coolObject.tennis='Serena';
coolObject.soccer = 'Ronaldo';
coolObject.baseball ='Judge';

for (let key in coolObject) {
  console.log(`(${key},${coolObject[key]})`);
}
console.log('Returns an array of key,value pairs');
console.log(Object.entries(coolObject));

var items = Object.entries(coolObject);
//console.log(items);
console.log('Convert the dicitonary to an array first');
console.log('Use .sort() to alphabetically sort array')
console.log(items.sort().reverse());
console.log('----------------------');
console.log('The months with 31 days are : ');
for(let key in daysinMonths) {
  if(daysinMonths[key] === 31) {
    console.log(key);
  }

}
