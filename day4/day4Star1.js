var fs = require('fs');

function rucksack(filename) {
  const contents = fs.readFileSync(filename, 'utf8');
  var contentsArr = contents.split(/\r?\n/);
  //if a <=c and b>=d or c<=a and d>=b

  // console.log(contentsArr);
  var res=0;

  contentsArr.forEach((arrayEle) => {
    var ab = (arrayEle.split(',')[0].split('-'));
    var cd = (arrayEle.split(',')[1].split('-'));
    var a = parseInt(ab[0]);
    var b = parseInt(ab[1]);
    var c = parseInt(cd[0]);
    var d = parseInt(cd[1]);
    
    if (a <= c && b >= d || c <= a && d >= b) {
      res++;
    }

  });
  console.log('res', res);
}

rucksack('input.txt');