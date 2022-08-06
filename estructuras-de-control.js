//Estructura de control

//IF ELSE
const puntaje = 1000;
if (puntaje == 1000) {
  //DOS SIGNOS IGUAL SIGNIFICA COMPARACION TRES SIGNOS IGUALES VE QUE SEAN IDENTICOS EN CONTENIDO Y FORMATO
  console.log('es igual pues');
} else {
  //si no se cumple la condicion IF SE EJECUTA ELSE
  console.log('no es igual pues');
}












//IF CON DOS CONDICIONES IF
let rol = 'editor';

if (rol === 'admin') {
  console.log(' tienes acceso a todo el sistema');
} else if (rol == 'editor') {
  console.log('tienes acceso a editar');
} else {
  console.log('no tienes acceso');
}















//SWICH USAR CUANDO TIENES MUCHAS CONDICIONES IF
const metodoDePago = 'bitcoin';
switch (metodoDePago) {
  case 'tarjeta':
    console.log('pagaste con tarjeta'); //codigo que se ejecuta SI se cumple la condicion CASE:
    break; //break DETIENE LA VERIFICACION

  case 'efectivo':
    console.log('pagaste con efectivo');
    break;

  case 'bitcoin':
    console.log('pagaste con bitcoin');
    break;

  default:
    console.log('aun no pagaste');
    break;
}







//ESTRUCTURA DE CONTROL PARA LOOPS
//FOR LOOP
//iniciamos y definimos el INDICE = 0; seguido de eso va la condicion que se tiene que cumplir i < 10; y luego el incremento i++
for (let i = 0; i < 10; i++) {
  // i++ SIGNIFICA QUE INCREMENTA i de a 1 en 1 hasta que se cumpla la condicion
  console.log(i);
}

//PREGUNTA PARA CONSEGUIR TRABAJO.
//Analiza si el numero que esta "loopeando" es par o impar
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    //SI LA DIVISION DEL NUMERO QUE ESTA EN i MIENTRAS VA LOOPEANDO EL RESTO DA cero seria par
    console.log(`el numero ${i} es par`);
  } else {
    //SI NO ES PAR
    console.log(`el numero ${i} NO ES PAR`);
  }
}

//EJEMPLO
const carrito = [
  { nombre: 'monitor 20 pulgadas', precio: 500 },
  { nombre: 'television 50 pulgadas', precio: 100 },
  { nombre: 'tablet', precio: 200 },
  { nombre: 'audifonos', precio: 50 },
  { nombre: 'celular', precio: 300 },
];

for (let i = 0; i < carrito.length; i++) {
  //SE EJECUTA EL CODIGO CUANDO i SEA MENOR A LA LONGITUD DEL ARRAY EN ESTE CASO (carrito.length)
  console.log(carrito[i]); //Muestra en consola cada elemento del array, SI QUEREMOS ACCEDER A UNA PROPIEDAD seria console.log(carrito[i].nombre)
}













//WHILE LOOP
let i = 0; //declaramos el indice por fuera del while
while (i < 10) {
  // Condicion
  console.log(i); // Codigo a ejecutar siempre que la condicion sea verdadera

  i++; //Incremento
}

let index = 0;
while (index <= 20) {
  if (index % 2 === 0) {
    console.log(`el numero ${index} es PAR`);
  } else {
    console.log(`el numero ${index} NO ES PAR`);
  }
  index++;
}















// DO WHILE
//Ejecuta el codigo ALMENOS UNA VEZ antes de verificar si la condicion es verdadera a diferencia de WHILE que PRIMERO VERIFICA SI LA CONDICION inicial es VERDADERA y luego ejecuta el codigo
let a = 0; //definimos valor inicial
do {
  console.log(carrito[a].nombre);
  a++;
} while (a < carrito.length);

let q = 0;
do {
  console.log('hola' + q);
  q++;
} while (q < 10);


















//ITERATOR for of
/*
La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), TypedArray, Map, Set e iterables definidos por el usuario.

Sintaxis
for (variable of iterable) {
  statement
}
variable: En cada iteración el elemento (propiedad enumerable) correspondiente es asignado a variable.
iterable: Objeto cuyas propiedades enumerables son iteradas.
*/
// Ejemplos
// Iterando un Array
let iterable = [10, 20, 30];

for (let value of iterable) {
  //Es posible usar const en lugar de let si no se va a modificar la variable dentro del bloque.
  value += 1;
  console.log(value);
  // 11
  // 21
  // 31
}

// Iterando un String
let iterable2 = 'bombonera';
for (let value of iterable2) {
  console.log(value);
}

















//OPERADORES TERNARIOS

/*
Operador condicional (ternario)
El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.

Sintaxis
condición ? expr1 : expr2 

Parámetros
condición = Una expresión que se evalúa como true o false.
expr1, expr2 = Expresión con valores de algún tipo.
Si la condición es true, el operador retorna el valor de la expr1; de lo contrario, devuelve el valor de expr2. Por ejemplo, para mostrar un mensaje diferente en función del valor de la variable isMember, se puede usar esta declaración:
*/
function cuota(params) {
    let isMember = false
    console.log("La Cuota es de:  " + (isMember ? "$2.00" : "$10.00")); 

}
cuota()

// También puedes asignar valores a variables dependiendo del resultado de la condición ternaria
var elvisLives = Math.PI > 4 ? "Sip" : "Nop";
console.log(elvisLives);



// También es posible realizar evaluaciones ternarias múltiples (Nota: El operador condicional es asociativo):
let firstCheck = false
let secondCheck = false
access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido"; //TRADUCCION: si firstCheck es false y secondCheck es false entonces retorna "Acceso Permitido" y lo almacena en la variable access
console.log( access ); // muestra "Acceso Permitido"



let randomNumber = parseInt(Math.random() * 99);
console.log(randomNumber);
//Tambien se puede llamar a funciones dependiendo de la condicion
let evalua = randomNumber < 80 ? cuota() : console.log("No es mayor");



// También puede realizar más de una operación por caso, separándolas con una coma:
let stop = false
var age = 19

let eva = age >= 18 ? (console.log("OK, puedes continuar."), console.log("Aguarda unos instantes...")) : console.log("A ocurrido un error")


