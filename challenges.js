// Challenge #01

// (calcAverage) =>

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const AverageScore = calcAverage (44, 23, 71);
// console.log(AverageScore);

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
  } else if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
  } else {
    console.log(`No team wins...`);
  }

  // console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
  // console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
}

console.log(checkWinner(scoreKoalas, scoreDolphins));
