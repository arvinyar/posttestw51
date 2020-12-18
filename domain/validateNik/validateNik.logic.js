var validateNikLogic = require('../person/person.logic')

class validateNik extends validateNikLogic{
  constructor(...args) {
    super(...args)
  }


validateLength(){
        if(this.nik.length != 16){
            return "tidak sesuai"
        } else{
            return "sesuai"
        }

}   

validateDob(){
    if(super.getWeekType() == 0){
        return "tidak bisa dibandingkan, tanggal tidak valid"
    }
    var huruf = 0
    if(this.validateLength() === 'tidak sesuai'){
        return "tidak bisa dibandingkan, NIK tidak 16 digit"
    } else{
        for(var i =0;i<this.nik.length; i++){
            if(isNaN(this.nik[i])){
                huruf = huruf+1
            }
        }
        if(huruf>0){
            return "tidak bisa dibandingkan, ada input huruf di NIK"
        } else{
            var day_nik = this.nik[6].concat(this.nik[7])
            var month_nik = this.nik[8].concat(this.nik[9])
            var year_nik = this.nik[10].concat(this.nik[11])

            var date_dob = this.dob.split("-");
            var year_dob = date_dob[0][date_dob[0].length-2].concat(date_dob[0][date_dob[0].length-1])
            var month_dob = date_dob[1]
            var day_dob = date_dob[2]

            if(Number(year_nik) == Number(year_dob) && Number(month_nik) == Number(month_dob) && Number(day_nik) == Number(day_dob) ){
                return "sama dan valid"
            } else{
                return "tidak sama dan tidak valid"
            }

            }
        }
    }


print(){
    console.log(`Panjang NIK ${this.validateLength()}`)
    console.log(`NIK dan dob ${this.validateDob()}`)
}



}


module.exports = validateNik;