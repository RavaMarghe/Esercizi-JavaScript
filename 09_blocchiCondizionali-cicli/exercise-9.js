function getKeys(obj) {
  
  for (let x in person) {
    console.log(x);
  }

}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);