const fs = require('fs');

let lyrics = process.argv[2];
var text = fs.readFileSync(lyrics, 'utf-8');
console.log('You can remove extra whitespace using trimEnd()');
text = text.trimEnd();

//console.log('print out line of string using regular expression',text.split(/\r?\n/));

let line = text.split(/\r?\n/);
function maximum(line) {
let max = line[0].split(' ');
let maxLen= max.length;
//console.log(maxLen);
for(let i=0;i<line.length; i++) {
  if(maxLen < line[i].split(' ').length) {
    maxLen = line[i].split(' ').length;
    max = line[i];
  }
  }
  console.log('The longest sentence is: ',max);
  console.log('------------------------');
}

function minimum(line) {
let min = line[0].split(' ');
let minLen= min.length;

for(let j=0;j<line.length; j++) {
  if(minLen > line[j].split(' ').length) {
    minLen = line[j].split(' ').length;
    min = line[j];
  }
  }

  console.log('The shortest sentence is: ',min);
}
maximum(line);
minimum(line);
