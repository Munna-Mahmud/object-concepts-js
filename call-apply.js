const kibria={
    name: 'kibria',
    money: 4000,
    isrich: true,
       takaDen: function(bonus, extra, tax){
           this.money=this.money-bonus - extra - tax;
           console.log(this)
           return this.money;
       }
   };
   kibria.takaDen(100)

   const heroBalam={
       name: 'Hero Balam',
       money: 5000,
       id: 12
   }

   const normalGolam= {
       name: 'Golam er ghore Golam',
       money: 2000,
       id:101
   } 
//call
 //  kibria.takaDen.call(heroBalam, 2000, 50, 200) // direct action 

 //apply method
 kibria.takaDen.apply(normalGolam, [100, 300, 50]); 
