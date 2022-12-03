var fs = require('fs');

function rucksack(filename) {
  const contents = fs.readFileSync(filename, 'utf8');
  const contentsArr = contents.split(/\r?\n/);

  // console.log(contentsArr);

  var searchArray=[],founded = [];

  contentsArr.forEach((arrayEle) => {
    var [first, second] = [
      arrayEle.slice(0, arrayEle.length / 2),
      arrayEle.slice(arrayEle.length / 2, arrayEle.length),
    ];

    [...first].forEach((stringChar) => {
      searchArray.push(stringChar.charCodeAt(0));
    });

    [...second].forEach((stringChar) => {
      if (searchArray.includes(stringChar.charCodeAt(0))) {
        if (stringChar.charCodeAt(0) <= 90) {
          founded.push(stringChar.charCodeAt(0)-38);
        }else{
          founded.push(stringChar.charCodeAt(0)-96);
        }
        searchArray = [];
      }
    });

  });
  const sum=founded.reduce((partialSum, a) => partialSum + a, 0);
  console.log('sum:',sum);
}

rucksack('input.txt');