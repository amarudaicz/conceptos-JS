//ARRAYS

const numeros = [1, 2, 3, 4, 5, 6, 7]; //Estructura de un array, se crea la variable y dentro de CORCHETES los valores

console.table(numeros); //console.table formatea una tabla con los valores

//const meses = new Array ["enero", "febrero", "marzo", "junio"];
//creando un Array con el constructor
//console.table(meses)

const arreglo = [
  1,
  2,
  3,
  true,
  "hola",
  null,
  { nombre: "amaru", trabajo: "programador" },
  [1, 2, 3],
];
//se puede meter distintos valores en un arreglo
//console.table(arreglo)

//como acceder a los valores de una Arrays

console.log(numeros[5]); //Primero el nombre del Array y luego la posicion del valor que quieres extraer, entre corchetes

//como extraer todos los valores del arrays a medida que se van agregando
//arreglo.forEach(function(arreglo){
//console.log(arreglo)})

//COMO MODIFICAR ARRAYS
//ejemplo de array
const colores = ["azul", "blanco", "verde", "rojo"];
let numerosPares = [2, 4, 6, 8, 10];
//console.table(numerosPares);

//como agregar un elemento a un Array
colores[4] = "violeta"; //forma no recomendable de usar porque si remplazas la posicion de un valor lo va a remplazar
//Agregar el valor al final del array
colores.push("amarillo");
colores.push("rosa", "bordo", "gris"); //se pueden agregar separados por coma
//Agregar el valor al inicio del array
colores.unshift("morado");
//se Recomienda no modificar los arrays igualmente

//como eliminar elementos del Array
colores.pop(); //elimina el ultimo elemento del Array
colores.shift(); //elimina el elemento del inicio del array
colores.splice(2, 1); //elimina el elemento seleccionado en base al index de posicion Y el segundo numero define cuantos elementos borrar a partir de esa posicion

//REST OPERATOR o SPREED OPERATOR
//Para agregar o eliminar elementos de un array creando uno nuevo para asi no modificar el original

const nuevosColores = [...colores, "magenta"]; //los tres puntos son para hacer acceder a el array
console.log(colores);
console.log(nuevosColores);
