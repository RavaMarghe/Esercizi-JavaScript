// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000


function calculateSalary(ruolo = 1000) {
 if (ruolo === 'ceo') {
     console.log(2200);
 } else if (ruolo === 'manager' | 'cto') {
     console.log(1800);
 } else if (ruolo === 'developer') {
     console.log(1500);
 } else {
     console.log(1000);
 }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);