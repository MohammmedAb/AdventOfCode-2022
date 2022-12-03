var fs = require('fs');

function rucksack(filename) {
  const contents = fs.readFileSync(filename, 'utf8');
  const contentsArr = contents.split(/\r?\n/);

  var firstSearchArray = [],
    secondSearchArray = [],
    founded = [];

  for (let i = 0; i < contentsArr.length; i++) {
    if (i % 3 === 0) {
      var [first, second, third] = [
        contentsArr[i],
        contentsArr[i + 1],
        contentsArr[i + 2],
      ];

      [...first].forEach((stringChar) => {
        firstSearchArray.push(stringChar.charCodeAt(0));
      });
      [...second].forEach((stringChar) => {
        secondSearchArray.push(stringChar.charCodeAt(0));
      });

      [...third].forEach((stringChar) => {
        if (
          firstSearchArray.includes(stringChar.charCodeAt(0)) &&
          secondSearchArray.includes(stringChar.charCodeAt(0))
        ) {
          if (stringChar.charCodeAt(0) <= 90) {
            founded.push(stringChar.charCodeAt(0) - 38);
          } else {
            founded.push(stringChar.charCodeAt(0) - 96);
          }
          firstSearchArray = [];
          secondSearchArray = [];
        }
      });
    }
  }

  const sum = founded.reduce((partialSum, a) => partialSum + a, 0);
  console.log('sum:', sum);

}

rucksack('input.txt');