//read text file
var fs = require('fs');

var sum = 0;
var elfsCal = [];
const top3Elfs = [];
var totalTop3=0;

function maxElf(filename) {
  const contents = fs.readFileSync(filename, 'utf8');
  const contentsArr = contents.split(/\r?\n/);

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

  for (let i = 0; i < 3; i++) {
    const max = Math.max(...elfsCal);
    console.log(max);

    top3Elfs.push(max);
    totalTop3 += max;
    elfsCal.splice(elfsCal.indexOf(max), 1);
  }
  
  console.log('top 3: ',top3Elfs);
  console.log('total top 3: ',totalTop3);
  return totalTop3;
}

maxElf('input.txt');
