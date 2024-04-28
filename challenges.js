// Challenge #01

// (calcAverage) =>

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// // const AverageScore = calcAverage (44, 23, 71);
// // console.log(AverageScore);

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
//   } else if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
//   } else {
//     console.log(`No team wins...`);
//   }

//   // console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
//   // console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
// }

// console.log(checkWinner(scoreKoalas, scoreDolphins));

// Challenge #02
// const bill = Number;

// function calcTip(bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// }

// // console.log (calcTip(100));
// const tip1 = console.log(calcTip(125));
// const tip2 = console.log(calcTip(555));
// const tip3 = console.log(calcTip(44));

// // const tips = [tip1, tip2, tip3];
// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// const bills = [125, 555, 44];

// Challenge #03
/* Write your code below. Good luck! 🙂 */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}´s BMI (${mark.calcBMI()}) is higher than ${
      john.fullName
    }´s (${john.calcBMI()})!`
  );
} else {
  console.log(
    `${john.fullName}´s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    }´s (${mark.calcBMI()})!`
  );
}
