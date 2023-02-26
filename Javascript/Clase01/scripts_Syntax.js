// 01 CLASS
// This is a comment of one line.
/**
 * This is comment with multiple lines and this is how you make it,
 * e.g "This file generates a list of users, looking each with their ID
 * in the database "
 * 
 */
//Ctrl+}
// var hola = "Saludos"
// console.log(hola)
// console.log("Adios")

//*************** TYPE OF DATA *******************************
console.log(typeof 50) //NUMBER - FOR ALL TYPES OF NUMBERS, EITHER INTEGER OR DECIMAL.
console.log(typeof 'Beto Quiroga') //STRING - FOR charts and string of texts.
console.log(typeof true) //BOOLEAN -false, true.

// DATA TYPE - COLECTION.
/**
 * OBJECTS:
 * Collection of data (Information)
 * that has a identifier and a value.
 */
// ARRAY (collection of values of the same type)
let array = ["Jose", "Jose", "Juan", "Otro"]
console.log(typeof array)
console.log(array)

// OBJECT
let ok = {
    nombre: "Beto",
    Apellido: "Quiroga"
}
console.log(typeof ok)
console.log(ok)

// NULL LookOut! null is JS is an object too.
console.log(typeof null)
console.log(typeof undefined) // Undefined is a type of data.

/**
 * VARIABLES
 */

// Declaretion 
let alumno //undefined
//Asignation 
alumno = "Alumno" // know has a value and is the type of String.
// Declaration and Asignation 
let profesor = "Alexys Lozada"
/**
 * ASIGNACION POR REFERENCIA
 */
let prof = "Alexys"
let alumn = prof
prof = "Alvaro"

console.log(prof)
console.log(alumn)

/**
 * Constantes
 */

const NOMBRE_EMPRESA = "EDteam"
const SITIO_WEB = "https://ed.team"