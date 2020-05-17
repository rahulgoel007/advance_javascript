let name = {
  firstname: 'Rahul',
  lastname: 'Goel',
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstname +
      ' ' +
      this.lastname +
      ' , ' +
      hometown +
      ', ' +
      state +
      ', ' +
      country
  );
};

let printMyName = printName.bind(name, 'Kandela', 'Rajasthan');
printMyName('India');

Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(name, 'Kandela', 'Rajasthan');
printMyName2('India');
