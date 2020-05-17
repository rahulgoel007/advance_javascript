let user = {
  name: 'Rahul Goel',
  address: {
    personal: {
      city: 'Bangalore',
      state: 'Karnataka',
      area: 'HSR Layout',
    },
    office: {
      city: 'Bangalore',
      area: {
        landmark: 'Whitefield',
      },
    },
  },
};
let magic = (obj, parent, finalObj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      magic(obj[key], parent + '_' + key, finalObj);
    } else {
      finalObj[parent + '_' + key] = obj[key];
    }
  }
};

let finalObj = {};
magic(user, 'user', finalObj);

console.log(finalObj);
