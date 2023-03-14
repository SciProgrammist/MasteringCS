/**
 * FUNCIONES -Parametros
 */
let user = 932.12

//Declaracion de mi funcion saludar

function saludar(nombre) {
    if(typeof nombre === "string") {
        console.log(`Hola, muy buenos dias ${nombre}!`)
    } else {
        console.log("Escriba un nombre correcto.")
    }
}

// Llamado a la funcion saludar.
// saludar(user)

function obtenerNombreCompleto(nombre, apellidos) {
   let nombreCompleto = `${nombre} ${apellidos}`
   return nombreCompleto
}

// let param = obtenerNombreCompleto("Beto","Quiroga M.")
// console.log(param)

/**
 * FUNCIONES - FUNCIONES DE PRIMERA CLASE.
 * The whole function can be saved in a varible, which becomes it
 * as a first class, and then the varible with the function can be use
 * as such, like the example below:
 */
 let firstclass_f = obtenerNombreCompleto

 console.log(firstclass_f('Alexander', 'Pineda'))

 /**
  * FUNCIONES - FUNCIONES ANONIMAS
  */
//we are declaring a varible name sumar and assigning it a function.
 let sumar = function (a, b, c) {
    return a +b +c
 }

 let resultado = sumar(2,4,5)
console.log(resultado)

// Anonymous function can also help us to auto invocated, like the following
// example below, NOTE: This use to be useful for frameworks, know is in decadency.
let val;

(function(a,b,c) {
    val = a+b+c
}(10, 4, 5))

console.log(val)

/**
 * FUNCIONES COMO CONSTANTES.
 */
//To this point it is important to use the CONST keyword for anonymous functions.
// when we assign the function to a declered variable.

const saludarr = function(nombre) {
    console.log(`Hola ${nombre}`)
}

console.log(saludarr)

/**
 * SCOPE
 * Any variable that is declered between the parenthesis makes it from that scope
 * and it doesn't matter if it has the same name of a globarl variable 
 * (which is not recommended because someone could change the value of the variable ...
 * ... so it would be better to declare constants instead) use scope wisely to prevent 
 * the sofware from missbehaving.
 */
const NAME = "Alexys"

const saludar_ = function (){
    let nombre = "Beto Quiroga"
    console.log(`Hola ${nombre}`)
}

saludar_()
console.log(NAME)

/**
 * FUNCIONES FLECHA - arrow functions
 *          => 'Operador que permite simplificar nuestras funciones.'
 */

console.log('functions simplified with the row operator.')

const sumare = function(a, b){
    return a+b;

}

const restare = function(c, d){
    return c-d;
}

console.log(`sumare 4 y 5: ${sumare(5,4)}`);
console.log(`restare 5 y 4: ${restare(5, 4)}`);

const lo_sumare = (a,b) => a+b;
const lo_restare = (c,d) => c-d;  

console.log(`sumare 4 y 5: ${lo_sumare(5,4)}`);
console.log(`restare 5 y 4: ${lo_restare(5, 4)}`);

//it can be any simple oration:

//const saludare = (nombre) => `Hola ${nombre}, buenos dias`; 
const saludare = nombre => `Hola ${nombre}, buenos dias`; 
//when our function only needs one parameter you can avoid typing the parenthesis.
console.log(saludare('Yanci'));
/* if your function doesn't need any parameters then you must leave the () empty as the
 * following commented example: const foo = () => `Do something...`
 */

//Now if you need to make a block of code you can do it as follows

const te_saludare = nombre => {
    if(typeof nombre === 'string') {
        console.log(`Hola ${nombre}`);
    } else {
        console.error('Tipo de dato equivocado!!!')
    }
}

