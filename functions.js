
//DECLARACION DE UNA FUNCION

function sumar() {
    console.log(10+10)
}

sumar()

//Expresion de la funcion

const sumar2 = function(){
    console.log(3+3);
}

sumar2();

// Funciones IIFE funciones que se invocan ellas mismas
// IIFE te permite protejer variables y funciones con las de otros archivos
(function(){
    console.log("esto es una funcion")
})();


//PREGUNTA PARA CONSEGUIR TRABAJO 
//DIFERENCIA ENTRE EL TIPO DE FUNCIONES
//hoisting js lee el archivo en 2 vueltas primero lee las funciones y las variables y luego se ejecuta



//Diferencia entre metodo y funcion
let numero1=20;
let numero2="20";

//parseInt convierte string a numero
console.log(parseInt(numero2))//parseInt() es una funcion
//.toString Metodo que convierte string a numero
console.log(numero2.toString())//Variable seguido de un PUNTO es un METODO



function multiplicar(numero1 , numero2) {//numero1,numero2 SON PARAMETROS DE LA FUNCION
    console.log(numero1 * numero2) //PROCEDIMIENTO DE LA FUNCION
}
multiplicar(10,25)//Argumentos o valores reales
multiplicar(9, 6)//REUTILIZAMOS LA FUNCION LAS VECES QUE QUERAMOS


let restar = function(N1, N2){
    console.log(N1 - N2)
}
restar(100, 55)

//PARAMETROS POR DEFAULT

let sumarDosNumeros = function(numero1=10, numero2=50){//LE ASIGNAMOS VALORES POR DEFAULT A LOS PARAMETROS QUE REMPLAZAN EN EL CASO QUE NO LE ASIGNEMOS VALORES 
    console.log(numero1 + numero2)
}
sumarDosNumeros(20)


//FUNCIONES QUE RETORNAR UN VALOR
function sumar3(n1, n2){
    return n1 + n2
}
//CREAMOS UNA VARIABLE PARA ALMACENAR EL RETURN DE LA FUNCION DENTRO DE LA VARIABLE
const resultado = sumar3(2, 3)
console.log(resultado)


let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);
console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`el total a pagar es de:${totalAPagar}`);//USAMOS `` PARA CREAR UN TEMPLATE STRING QUE ES para mezclar texto con variables

