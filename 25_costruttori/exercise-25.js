const person = {
  get firstName() {
    return this.name;
  },
  set firstName(name) {
    this.name = name;
  },
  get lastName() {
    return this.surname;
  },
  set lastName(surname) {
    this.surname = surname;
  },
  fullName() {
    return `${this.name} ${this.surname}`;
  }
}

const john = Object.create(person);
const simon = Object.create(person);

john.firstName = 'Jhon';
john.lastName = 'Doe';

simon.firstName = 'Simon';
simon.lastName = 'Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins