 const name = 'Tata'
 const nik = '6403052010930001'
 const dob = '1985-10-20'
 
 
 var personLogic = require('./domain/person/person.logic')
 var person1 = new personLogic(name, nik, dob);
person1.print(person1.name,person1.getWeekType(), person1.getAge());


// ======
var personAge = require('./domain/personAge/personAge.logic')
  var age1 = new personAge(name, nik, dob);
  age1.print();
