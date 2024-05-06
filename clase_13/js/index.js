/* ACTIVIDAD:
UN if y UN else en javascript */



/*      IF      */

/*
let numA = 11;
let numB = 10;

if (numA > numB) {
    console.log(numA + " > " + numB);
} else {
    console.log(numA + " < " + numB);
}

let edadUsuario = prompt("Ingresa tu edad: ", "");
let edadPermitida = 18;
let plataMinimaAceptada = 100;

if (edadUsuario >= edadPermitida) {
    console.log("Podes entrar al boliche");
} else {
    let cantidadPlata = prompt("Cuanta plata tenes?", "");
    if (cantidadPlata > plataMinimaAceptada) {
        console.log("Soborno aceptado");
    } else {
        console.log("Vete pendejo");
    }

}



let usuarioPedido = prompt("Ingrese su usuario: ","");
let contraseniaPedido = prompt("Ingrese su contraseña: ","");

let nombreUsuario = "Mateo";
let contraseniaGuardada = "123";

if (usuarioPedido == nombreUsuario && contraseniaPedido == contraseniaGuardada) 
{
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}
*/

//      OPERADORES TERNARIOS
let edad = 18;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";

console.log(mensaje);

/*       SWITCH CASE       */
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

/*      While     */

/*
let num = 10;

while (num < 12)
{
    console.log("Hola");
    console.log(num);
    num++;
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
*/
