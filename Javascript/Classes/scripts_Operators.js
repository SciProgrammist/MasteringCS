/**
 * OPERADORES DE ASIGNACION
 */
// = operador asignacion 
let alumno
let profe
alumno = "Beto"
alumno = profe

// 'suma' + 'resta' - 'multiplicacion' * 'division' / 'residuo' %
let operacion = 60 % 4
console.log(operacion)

// operadores con = abreviadas
let a = 10
let b = 3
a += b // a = a + b asignacion aritmerica
// y asi para todas las operacines que tengan la misma variable *= -= += /= %=
console.log(a)
//the exponential operator in javascript is ** which is the base number first and then the following will be the exponent.
console.log(10 ** 2) //a **= b
/**
 * OPERADORES ARITMETICOS
 * (+)
 */

let nombre = "Beto"
let apellido = "Quiroga"

let nombreCompleto = nombre + " " + apellido
console.log(nombreCompleto)

// Template String ``
let nickname = `Mi nombre es ${nombre} y mi apellido es ${apellido}`
console.log(nickname)

/**
 * OPERADORES DE COMPARACION 
 */

// ES IGUAL == (Compare only the value)
// ES ESTRICTAMENTE IGUAL === (Compare value and data type)
// ES DIFERENTE != (Verifies the values are different)
// ES ESTRICTAMENTE DIFERENT !== 
let asd = 50
let dsa = "50"
// ==
let resultado = asd == dsa
console.log(resultado)
// ===
//resultado = asd === dsa
console.log(resultado)
// !=
console.log(asd != dsa) //false
//console.log(asd !== dsa) //True
//IMPORTANT the <= >= < > are only for numerial values.
/**
 * OPERADORES LOGICOS 
 * 
 * AND (&&)
 * OR (||)
 */

let a_ = 10
let b_ = 20
let c_ = 30

// Saber si b es mayor que a y mayor que c
let resp = (b_ > a_) && (b_ > c_)
console.log(resp) // false
resp = (b_> a_) || (b_ < c_)
console.log(resp) // true

/**
 * OPERADORES UNARIOS
 * i++, i--
 */

let i = 10;
i++
i++
i--
console.log(i)

/**
 * OPERADORES TERNARIOS
 *  TRUE? do this if is true : do this if is false
 */

let aa = 5
let bb = 8

let cc = bb<aa? "¡¡¡ES VERDAD!!!" : "¡¡¡ESTO ES FALSO!!!"
console.log(cc)
/**
 * TYPE COERCION 
 * the capility that Js has about to convert any type of data to the ones that is required
 */