const kibria={
    name: 'kibria',
    money: 4000,
    isrich: true,
       takaDen: function(bonus){
           this.money=this.money-bonus;
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
 const heroTakaDe=kibria.takaDen.bind(heroBalam)
 heroTakaDe(500)
 heroTakaDe(1000)

const golamTakaDe= kibria.takaDen.bind(normalGolam);
golamTakaDe(500)

