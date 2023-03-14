
/**
 * Array and its functions 
 */

// let amigos = ['Pedro','Gabriel','Erick','Daniel'];
// let numbers = [0, 1, 2, 3, 5];
// console.log(amigos);

// Add elements to the array and know its new size.
//let dato = amigos.push('Juan');

// Remove elements form the array and know which value it used to have.
//let dato = amigos.pop();

/**
 * To slice our array in two new arrays [].slice(from, to)
 */

// Note: this method doesn't change the original array.

// let dato = amigos.slice(0,2)

// console.log(dato);
// console.log(amigos);

/**
 * Array - Loops
 */

// Foreach needs as a parameter a function

// amigos.forEach(function(amigo){
//  console.log(amigo)
// });

   //Now we refactor with the arrow function
// amigos.forEach( amigo => {
//     console.log(amigo)
// });

    //We can reach till this level of simplicity.
// amigos.forEach( amigo => console.log(amigo));

/* 
 * Denifing a function.
 */

// const contare = function contar(){
// let total = 0;
// numbers.forEach(number => total += number );
//  return console.log(total);
// }
// contare();

/*
 * .map(); it returns the value of each iteration and makes a new array with it.
 */

// let dato = amigos.map(amigo => `Hola ${amigo}`);
// console.log(dato);

/**
 *  Filter 
 */ 

// let numeros = [10, 436, 45, 74, 33, 9, 2, 54 ];
// let nuevoArray = [];

// let newdato  = numeros.filter(num => num>50);
// console.log(newdato);

/**
 * Find,
 * Includes,
 * Some,
 * every,
 * 
 *  */ 

let numeros = [10, 436, 45, 74, 33, 9, 2, 54]

    //* find return the first number that validates the condition.
        // let dato = numeros.find(num => num%2 === 1);
        // console.log(dato);    

    //* Include it has to be exactly the value we are looking for (avoid < > and <= >=) 
    // it will return either tru or false.
        // let dato = numeros.includes(10);
        // console.log(dato);
        
    //* Some is used when you want to check if your array validates a condition 
    // in this case it can be any condition, the function returns either tru or false.
        // numeros.push('beto');
        // let dato = numeros.some( num => typeof num === 'string');
        // console.log(dato);

    //* every is used when you want to check if ALL the elements in the collection
    //  are equal to the validation you are doing.
    numeros.push('beto');
    let dato = numeros.every( num => typeof num === 'number');
    console.log(dato);