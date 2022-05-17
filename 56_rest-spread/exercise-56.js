function sum(...num) {
  return num.reduce((preNum, currNum) => preNum + currNum, 0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));