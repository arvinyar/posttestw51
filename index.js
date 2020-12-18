 const name = 'Arvin'
 const nik = '31720217109200'
 const dob = '1992-10-18'
 
 
 var personLogic = require('./domain/person/person.logic')
 var person1 = new personLogic(name, nik, dob);
person1.print();


// ======
var personAge = require('./domain/personAge/personAge.logic')
  var age1 = new personAge(name, nik, dob);
  age1.print();

  var validateNik = require('./domain/validateNik/validateNik.logic')
  var validate = new validateNik(name, nik, dob);
  validate.print();
