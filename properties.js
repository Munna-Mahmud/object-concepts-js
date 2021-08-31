 const cube ={ name: 'magic cube', price: 200, color: 'multi', size: 'mini', number: '2BBv4' }// all the white color called key and yellow color called values

 // get the just keys
 const keys = Object.keys(cube);
 console.log(keys) // output : [ 'name', 'price', 'color', 'size', 'number' ]

// get values 
const values = Object.values(cube);
console.log(values) //[ 'magic cube', 200, 'multi', 'mini', '2BBv4' ]


// to freeze all we cant do anything 
Object.freeze(cube);

// add the new values
cube.price=400

// seal means we cant delete this values
Object.seal(cube)

//to delete a properties
delete cube.number

// console.log(cube)
console.log(cube)

