var fs = require('fs');

var game = {
  A: 1,
  B: 2,
  C: 3,

  X: 1,
  Y: 2,
  Z: 3,
};

var score = 0;

function rockPaperScissors(filename) {
  const contents = fs.readFileSync(filename, 'utf8');
  const contentsArr = contents.split(/\r?\n/);

  // console.log(contentsArr);

  contentsArr.forEach((i) => {
    const [p1, p2] = i.split(' ');
    // console.log('P1:',p1,':',game[p1]);
    // console.log('P2:',p2,':',game[p2]);

    if (game[p2] - game[p1] === 1 || game[p2] - game[p1] === -2) {
      //win
      score += game[p2] + 6;
    } else if (game[p2] - game[p1] === 0) {
      //draw
      score += game[p2] + 3;
    } else {
      //loss
      score += game[p2] + 0;
    }
  });

  console.log('Total Score', score);
}

rockPaperScissors('input.txt');
