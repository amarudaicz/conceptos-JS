Array.prototype.filter
//FILTER
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
*/
let filterItems = (fruta) => {
    filtrar = e => e.includes(fruta)
    return fruits.filter(filtrar)
}

let frutasConA = filterItems("a")
console.log(frutasConA);


let filtrarPorIndex = (index) =>{
    filtrarIndex = (e, i) => i == index
    return fruits.filter(filtrarIndex)
}

let fruta = filtrarPorIndex(4)
console.log(fruta);


//APLICAMOS DESTRUCTURING AL ARRAY DE FRUTAS PARA EXTRAER 2
let [manzana, , grapes] = frutasConA
console.log(manzana);
console.log(grapes);





















Array.prototype.flat()
/* 
El método flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
Sintaxis
var newArray = arr.flat([depth]);
Parámetros
depth Opcional
El nivel de profundidad que especifica qué tan profunda debe aplanarse una estructura de matriz anidada. El valor predeterminado es 1.
Valor de retorno
Una nueva matriz con los elementos de la sub-matriz concatenados en ella.
*/
//Ejemplos
//Aplanar matrices anidadas
let arr1 = [1, 2, [3, 4]];
let arrDesanidado = arr1.flat();
// [1, 2, 3, 4]
console.log(arrDesanidado);


let arr2 = [1, 2, [3, 4, [5, 6]]];
let arrMedioDesanidado = arr2.flat();
// [1, 2, 3, 4, [5, 6]]
console.log(arrMedioDesanidado);


let arr3 = [1, 2, [3, 4, [5, 6]]];
let arrDesanidado2 = arr3.flat(2);//ESPECIFICAMOS CUANTOS "NIDOS" QUEREMOS QUE ROMPA DEL ARRAY en este caso vemos que rompe 2 niveles dejando el array plano
// [1, 2, 3, 4, 5, 6]
console.log(arrDesanidado2);





















Array.prototype.at()
/**
 El método at() recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. Los valores negativos contarán desde el último elemento del array. 
 Esto no sugiere que haya algo mal con usar la notación de corchetes. Por ejemplo, array[0] devolvería el primer elemento. Sin embargo, en lugar de usar array.length para los últimos elementos; ej. array[array.length-1] para el último elemento, puede llamar array.at(-1). (Ver los ejemplos siguientes)
*/

//EJEMPLO
const array1 = [5, 12, 8, 130, 44];
let index = 2;
console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// expected output: "Using an index of 2 the item returned is 8"

let index2 = -2;//SI DECLARAMOS VALORES NAGATIVOS EMPIEZA DESDE EL FINAL
console.log(`Using an index of ${index2} item returned is ${array1.at(index2)}`);
// expected output: "Using an index of -2 item returned is 130"
console.log(array1.at(-2));





















Array.prototype.concat()
/*
SINTAXIS: var nuevo_array = viejo_array.concat(valor1[, valor2[, ...[, valorN]]])
El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
*/
const letras = ['a', 'b', 'c'];
const letras2 = ['d', 'e', 'f'];
const letrasUnidas = letras.concat(letras2);//CONCATENAMOS LOS DOS ARRAYS
console.log(letrasUnidas);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

//TAMBIEN SE PUEDE USAR PARA ARRAYS DE OBJETOS
let obj =[{id:2}, {id:3}]
let obj2 =[{id:4}, {id:5}]
const objs = obj.concat(obj2)
console.log(objs);





















Array.prototype.entries()
/**
 Pruébalo
 El método entries() retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.
 
 Sintaxis
 arr.entries()
 Valor de retorno
 Un nuevo objeto iterador Array.
*/
//EJEMPLO
const letras3 = ['a', 'b', 'c'];
const iterator = letras3.entries();

console.log(iterator.next().value);
// expected output: Array [0, "a"]

console.log(iterator.next().value);
// expected output: Array [1, "b"]





















Array.prototype.keys()
// El método keys() devuelve un nuevo objeto Array Iterator que contiene las claves de índice con las que acceder a cada elemento en el array.
const array = ['a', 'b', 'c'];
const iterator2 = array.keys();

//USANDO UN ITERADOR for of
for (const key of iterator2) {
    console.log(key);
}
// expected output: 0
// expected output: 1
// expected output: 2





















Array.prototype.values()
// El método values() devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array.
var arrLetras = ['w', 'y', 'k', 'o', 'p'];
var iterador = arrLetras.values();

//USANDO UN ITERADOR for of
for (let letra of iterador) {
  console.log(letra);
}



















Array.prototype.fill()
/*
El método fill() cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.
Parámetros
value= Valor con el que se va a rellenar el arreglo. (Nótese que todos los elementos en el arreglo tendrán este mismo valor).
start Opcional= Índice inicial, por defecto 0.
end Opcional=Índice final, por defecto this.length.
Valor de retorno= El arreglo modificado, rellenado con valor.
*/
//EJEMPLO
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// fill with 0 from position 2 until position 4
console.log(numeros.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(numeros.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(numeros.fill(6));
// expected output: [6, 6, 6, 6]





















Array.prototype.every
/*
Determina si todos los elementos en el array satisfacen una condición.
*/
//EJEMPLO
const estaPorDebajo = (currentValue) => currentValue < 40;

const numerosMezclados = [1, 30, 39, 29, 10, 13];

console.log(numerosMezclados.every(estaPorDebajo));
// expected output: true





















Array.prototype.reduce
/*
El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
La función reductora recibe cuatro argumentos:

Acumulador (acc)
Valor Actual (cur)
Índice Actual (idx)
Array (src)
El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante.
*/

const arra = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4

const suma= arra.reduce((acumulador, valorActual) => acumulador + valorActual);
console.log(suma);
// expected output: 10

//SIN FUNCION FLECHA QUEDA ASI
let resultad = arra.reduce(function(acum, act, i) {
    return acum + act;
})

// Y si proporcionas un valorInicial, el resultado sería como este:
let resu = arra.reduce(function(valorAnterior, valorActual, indice, vector){
  return valorAnterior + valorActual;
}, 10);
//comienza con valorAnterior=10



















Array.from
/*
El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable.
Sintaxis= Array.from(arrayLike[, mapFn[, thisArg]])
Parámetros
arrayLike = Objeto iterable para convertirlo en un array.
mapFnOpcional = Función de mapa para llamar a cada elemento de la matriz.
thisArgOpcional = Valor para usar como this al ejecutar mapFn.
Valor de retorno = Una nueva instancia de Array.
*/

const palabra = "Caminando"
const numeritos = [1,2,3]
console.log(Array.from(palabra));
// expected output: Array ["C", "a", "m","i","n","a","n","d","o"]

console.log(Array.from(numeritos, x => x + x));
// expected output: Array [2, 4, 6]

//ASIGNADO A UNA VARIABLE
const res = Array.from(numeritos, x => x + x)
console.log(res);


// Array desde un objeto Array-like (argumentos)
function f() {
  return Array.from(arguments);
}
//PODEMOS IR CREANDO NUEVAS instancias de arrays de esta forma
const variable = f("Hola Como va", "sol")
let dataBase = f({producto:1, id:451251},{producto:2, id:234523})

console.log(dataBase);

// Generador de secuencias (rango) con Array.from

// Función generadora de secuencia (comúnmente llamado "rango", ej. Clojure, PHP, etc.)
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

// Genera un rango de números entre 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Genera un rango de números entre 1..10 con saltos de 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generar el abecedario utilizando Array.from haciendo uso de que se ordena como secuencia
const abecedario = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));//El charCodeAt() método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado. y string.fromCharCode devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
console.log(abecedario);































