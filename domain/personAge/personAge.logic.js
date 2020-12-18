var personAge = require('../person/person.logic')

class personAgeLogic extends personAge{
  constructor(...args) {
    super(...args)
  }


personByAge(){
        if(super.getAge() < 20) {
          return "Generasi Z"
        } else if (super.getAge() >= 20 && super.getAge() < 30) {
          return "Milenial Muda"
        } else if (super.getAge() >= 30 && super.getAge() < 40) {
          return "Milenial Tua"
        } else {
          return "Baby Boomer"
        }

      }

print(){
  console.log(`Merupakan seorang ${this.personByAge()}`)
}

}


module.exports = personAgeLogic;