const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 2.4, 4.1, 6];

// Your code below

// grades.filter(lowerThree, greaterThree);

function lowerThree(g) {
  return g < 3;
}

function greaterThree(g) {
  return g >= 3;
}

const smth = grades.filter(lowerThree);
const smthTwo = grades.filter(greaterThree);
console.log(smth);
console.log(smthTwo);
