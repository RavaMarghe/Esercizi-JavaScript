const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};


const person2 = Object.assign({}, person1);
person2.address = Object.assign({}, person1.address);


person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

console.log(person2);
console.log(person1);