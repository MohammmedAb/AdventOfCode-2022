var fs = require('fs');

var sum = 0;
var elfsCal = [];

function maxElf(filename) {
  const contents = fs.readFileSync(filename, 'utf8');

  const contentsArr = contents.split(/\r?\n/);

  console.log(contentsArr);

  contentsArr.forEach((line) => {
    if (line !== '') {
      sum += parseInt(line);
    } else {
      elfsCal.push(sum);
      sum = 0;
    }
  });
  elfsCal.push(sum);


  console.log(elfsCal);
  const max = Math.max(...elfsCal);
  console.log(max);

  return max;
}

maxElf('inputExample.txt');
