document.querySelector('#grandparent').addEventListener(
  'click',
  (e) => {
    console.log('Grandparent Clicked!');
    //e.stopPropagation();
  },
  true
);

document.querySelector('#parent').addEventListener(
  'click',
  (e) => {
    console.log('Parent Clicked!');
  },
  true
);

document.querySelector('#child').addEventListener(
  'click',
  (e) => {
    console.log('Child Clicked!');
  },
  true
);

// Event bubbling is used by default if we are not passing the 3rd arqument in the event listener function
// If we give false in place of true it will be like event bubbling otherwise its event capturing
