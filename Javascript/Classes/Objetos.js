

/**
 * Objetos
 */

let alumno = {
    nombre: "Beto",
    edad: 21,
    suscriptor: false,
    ciudad: "Lima"
}

//Ways to access to the attributes of our object alumno
// 1st one through the dot operator.
console.log(alumno.ciudad)
// 2nd is with index access.
console.log(alumno["edad"]);

//To asign a variable the values of an object as an array.
let valores = Object.values(alumno)
console.log(valores); //The array will have each object's attribute.

//To asign the keys of each object's attribute.
let llaves = Object.keys(alumno);
console.log(llaves);
