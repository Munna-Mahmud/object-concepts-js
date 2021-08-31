const person={
 name: 'kibria',
 money: 4000,
 isrich: true,
 major: 'Rj',
 bestShow:{
     name: ' kapil sharma',
     ticket: 1000,
    },
    takeExam: function(){
        console.log(this.money, 'taking exam')
    },
    shopping: function(tshirt){
        this.money=this.money-tshirt;
        return this.money;
    }
};

person.takeExam()
const lastMoney= person.shopping( 200)
console.log(lastMoney)

