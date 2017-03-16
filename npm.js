var _ = require("lodash");

var users = [
  {
    firstName: 'Janez',
    lastName: 'Novak'
  },
  {
    firstName: 'Franc',
    lastName: 'Horvat'
  },
  {
    firstName: 'Lojzka',
    lastName: 'Kranjc'
  },
  {
    firstName:'Micka',
    lastName: 'Kovač'
  }
];

var fullUsers = _.map(users, function (u) {
    return u.firstName + " " + u.lastName;
});

console.log(fullUsers);