function canPlay() {
  const name =  {
    personName: 'Paul'
  };

  if (true) {
  personName = ('George'); // Argh! Voglio che personName sia una variabile di sola lettura
  Object.freeze(personName);
  }

  personName += ' plays football';

  console.log(name.personName);
}

canPlay();