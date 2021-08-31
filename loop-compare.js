const cube ={
     name: 'magic cube', 
     price: 200,
     color: 'multi'
};
// get the keys and values using in 
for (let prop in cube){
    console.log(prop, cube[prop])
}

//get the same thing by using  of 
const keys=Object.keys(cube)
for (let prop of keys){
    console.log(prop, cube[prop])
}

//advance way 
for (const [keys, value] of Object.entries(cube)){
    console.log( keys, value)
}


const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;

if (first === third) {
    // console.log('objects are equal');
}
else {
    // console.log('Objects are different');
}

