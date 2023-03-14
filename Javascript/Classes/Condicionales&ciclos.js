/**
 * CONDICIONALES
 */
/**
 * Invitacion a una fiesta
 * If you are younger than 65 years and an adult, you can assist to the party.
 * otherwise, if you got a permit fron your parents, you can come.
 * else stay at home.
 */
let persona = "Juan Alexis"
let edad = 15
let permiso = false;

if((edad>18) && (edad<65)){
     console.log(`${persona} puedes venir a la fiesta.`)
} else if (permiso && edad<18){
    console.log(`Puedes venir, tienes permiso.`)
} else {
    console.log(`${persona} entonces quedate en casa.`)
}

/**
 * CONDICIONALES MULTIPLES
 */

/**
 * What kind of servant of God you are.
 * 
 * if you are humble and hardworking you are Josep
 * if you are commited and brave you are peter
 * if you give a sicrifice to God with the whole of your heart and sole, 
 * you are any good servant of Jehovah.
 * 
 */
let condition;
condition = "a sicrifice with a whole heart."
switch(condition){
    case 'humble and hardworking':
        console.log("You are Josep")
        break
    case "commited and brave":
        console.log("you are peter")
        break
    case "a sicrifice with a whole heart.":
        console.log("a good servant of Jehovah.")
        break
    default:
        console.log("What are you waiting for?")
        break
}
/**
 * CICLOS
 * BUCLES O LOOPS
 */

// for
for(let i = 0 ; i<11; i++){
    console.log(`Numero de iteracion: ${i}`)
}
//Given a text print every character that makes up the string.
let texto = "betoquiroga"
 for (let i = 0; i<texto.length; i++){
    console.log(texto[i])
 }

 //Ciclo while 
 let jueguetes = 10

while (jueguetes>=1) {
    console.log(`Regalamos un juguete. Nos quedan ${jueguetes}`)
    jueguetes--
}