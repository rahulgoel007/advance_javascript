let name = {
  firstName: 'Rahul',
  lastName: 'Goel',
};

let printName = function (hometown, state) {
  console.log(
    this.firstName + ' ' + this.lastName + ' from ' + hometown + ' ,' + state
  );
};

// function borrowing
printName.call(name, 'Kandela', 'Rajasthan');

printName.apply(name, ['Kandela', 'Rajasthan']);

// bind method
let printMyname = printName.bind(name, 'Kandela', 'Rajasthan');
console.log(printMyname);
printMyname();
