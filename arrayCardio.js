const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johanne', last: 'Keppler', year: 1571, passed: 1630 },
  { first: 'Nicolous', last: 'Corpenicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const title = (num) => {
  console.log('##########  EXAM ' + num + '  ##########');
};

const displayInventors = (inventors) => {
  inventors.map((inventor) =>
    console.log(
      'first: ' +
        inventor.first +
        ' last: ' +
        inventor.last +
        ' year: ' +
        inventor.year +
        ' passed: ' +
        inventor.passed,
    ),
  );
};

const exam1 = () => {
  title(1);
  fifteenthInventors = inventors.filter(
    (inventor) => inventor.year < 1600 && inventor.year > 1500,
  );

  fifteenthInventors.map((inventor) => console.log(inventor.first));
};

exam1();

const exam2 = () => {
  title(2);

  inventors.map((inventor) =>
    console.log(inventor.first + '  ' + inventor.last),
  );
};

exam2();

const exam3 = () => {
  title(3);
  inventors.sort((inventor1, inventor2) => {
    return inventor1.year - inventor2.year;
  });
  displayInventors(inventors);
};

exam3();

console.table(inventors);

const exam4 = () => {
  title(4);
  const totalAge = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);
  console.log(`Total Age: ${totalAge}`);
};

exam4();

const exam5 = () => {
  title(5);
  const ages = inventors.map((inventor) => {
    return inventor.passed - inventor.year;
  });
  console.log('ages', ages);
  const oldest = ages.sort((inventorPrev, inventorNext) => {
    return inventorNext - inventorPrev;
  })[0];

  console.log('oldest', oldest);
};

exam5();

const people = [
  'Graham, Bell',
  'John, Doe',
  'Micheal, Jordan',
  'Leo, John',
  'Henry, Cavil',
];

console.table(people);
const splitted = people.sort((prevPerson, nextPerson) => {
  const [pFirst, pLast] = prevPerson.split(', ');
  const [nFirst, nLast] = nextPerson.split(', ');
  pLast.toLocaleLowerCase();
  nLast.toLocaleLowerCase();
  return pLast > nLast ? 1 : -1;
});
console.table(splitted);
