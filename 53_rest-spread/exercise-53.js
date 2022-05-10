function sum(...num) {
    return num.reduce((num1, num2) => num1 + num2, 0);
}

console.log(sum(1, 2, 3, 4, 5));