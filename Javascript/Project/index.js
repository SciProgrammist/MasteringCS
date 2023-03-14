/**
 * Algoritmos para crear pedidos y cobrar los pedidos del usuario.
 */

//Objeto JS para el informacion del usuario.
const usuario = {
    nombre: "Alexander",
    edad: 30,
    deuda: 0
}

//Arreglo que tiene los pedidos hechos por el usuario.
let pedido = [];
//Variable que tendra el costo del pedido
let costoPedido = 0;

//Funcionalidad para mostras los items que tenemos en el documento productos.
const mostrarMenu = () => {
    console.log("CODIGO  -  NOMBRE PRODUCTO - COSTO");
    // productos.forEach(producto => console.log(`${producto.codigo} -${producto.nombre} -$${producto.costo}`));
    // there many different ways to describe a for, and this is one of them for an array.
    for (let producto of productos) {
        console.log(`${producto.codigo} -${producto.nombre} -$${producto.costo}`);
    }
}

//Funcionalidad para pedir productos (agrega elementos al arreglo para pedidos)
const pedirProducto = cod => {
    if (!cod || typeof cod != 'string') return "ingrese un codigo valido";

    //Se buscara si el codigo existe en un arreglo ya dado
    const productoEncontrado = productos.find(producto => producto.codigo === cod);
    if (!productoEncontrado) return "El producto no existe";

    /**
     * Si el producto encontrado en el uso de la funcion ".find" existe se agregara al 
     * arreglo de pedidos.
     */

    pedido.push(productoEncontrado);
    console.log("El producto ha sido agregado a su pedido. Su pedido es: ");
    return verPedido();

}

//Funcionalidad para ver los productos.
const verPedido = () => pedido;

//Funcion para calcular el costo.

const calcularCosto = () => {
    let costo = 0;
    for (let producto of pedido) {

        costo += producto.costo;
    }
    costoPedido = costo;
    return costoPedido;
}

const finalizarPedido = () => {
    //Se calcula el costo a pagar con los productos que hay en el arreglo de pedido.
    calcularCosto();
    //Se le agrega el dato al campo deuda de nuestro objeto usuario.
    usuario.deuda = costoPedido;


    //En arreglo de pedidos se restablece en zero para que el usuario pueda hacer nuevos pedidos.
    pedido = [];
    //La variable de costo de pedido se vuelve a su valor pedretirmado
    costoPedido = 0;
    //Se manda a imprimir en pantalla el nombre de usuario con el monto a pagar
    return `${usuario.nombre}, debes pagar $ ${usuario.deuda}. `;

    //NOTA: todo esto se hace porque se manipula el objeto usuario.

}

//Funcion para pagar deuda 
const pagarPedido = montoEntregado => { 
    if (montoEntregado < usuario.deuda) {
        usuario.deuda = 0;
        return `No son los suficientes fondos para pagar la deuda`;

    } else if (montoEntregado === usuario.deuda) {
        usuario.deuda = 0;
        return `Tu pedido ha sido pagado.`;

    } else if (montoEntregado > usuario.deuda) {
        usuario.deuda = 0;
        return `Tu pedido ha sido pagado y tu cambio es de  ${montoEntregado - usuario.deuda}`;

    } else {

        return `Valor no valido.`
    }


} 