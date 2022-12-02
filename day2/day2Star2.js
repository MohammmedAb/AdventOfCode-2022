
var fs = require('fs');


var game={
  A:1,
  B:2,
  C:3,

  X:1,
  Y:2,
  Z:3,

}

const gamePoint=[1,2,3]
//win = +1 , loss = -1

var score=0;
var p2;

function rockPaperScissors(filename) {
  const contents = fs.readFileSync(filename, 'utf8');
  const contentsArr = contents.split(/\r?\n/);

  // console.log(contentsArr);

  contentsArr.forEach((i) => {
    const [p1, howToEnd] = i.split(' ');
    // console.log('P1:',p1,':',game[p1]);
    // console.log('howToEnd:',howToEnd,':',game[howToEnd]);
    
    if (howToEnd ==='X') { //loss      
      p2=gamePoint[game[p1]-1-1] || gamePoint[gamePoint.length-1];
      score+=p2+0;

    }else if(howToEnd ==='Y'){ //draw
      p2=gamePoint[game[p1]-1]
      score+=p2+3;

    }else{ //win
      p2=gamePoint[game[p1]-1+1] || gamePoint[0]
      score+=p2+6;
    }
  });

  console.log('Total Score',score);
}

rockPaperScissors('input.txt');
