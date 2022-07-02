//Estructura de control


//ESTRUCTURA DE IF
//if (condition) {
    //AQUI VAN LAS INSTRUCCIONES DE QUE HACER SI SE CUMPLE LA CONDICION
//} else {      }


//IF ELSE
const puntaje = 1000;    
if (puntaje == 1000) {//DOS SIGNOS IGUAL SIGNIFICA COMPARACION TRES SIGNOS IGUALES VE QUE SEAN IDENTICOS EN CONTENIDO Y FORMATO
    console.log("es igual pues")
}else{  //si no se cumple la condicion IF SE EJECUTA ELSE
 console.log("no es igual pues")
}

//IF CON DOS CONDICIONES IF

let rol="editor";

if (rol==="admin") {
    console.log(" tienes acceso a todo el sistema");
} 
else if(rol=="editor") {
    console.log("tienes acceso a editar");
}
else { console.log("no tienes acceso");
}



//SWICH USAR CUANDO TIENES MUCHAS CONDICIONES IF

const metodoDePago = "bitcoin";


switch (metodoDePago) {
    case "tarjeta":
        console.log("pagaste con tarjeta")//codigo que se ejecuta SI se cumple la condicion CASE:
    break;//break DETIENE LA VERIFICACION

    case "efectivo":
        console.log("pagaste con efectivo")
    break;

    case "bitcoin":
        console.log("pagaste con bitcoin")
    break;

    default:
        console.log("aun no pagaste")
    break;
}


//ESTRUCTURA DE CONTROL PARA LOOPS

//FOR LOOP
//iniciamos y definimos el INDICE = 0; seguido de eso va la condicion que se tiene que cumplir i < 10; y luego el incremento i++ 
for (let i = 0; i < 10; i++ ) { // i++ SIGNIFICA QUE INCREMENTA i de a 1 en 1 hasta que se cumplea la condicion
    console.log(i)
}
//PREGUNTA PARA CONSEGUIR TRABAJO.
//Analiza si el numero que esta "loopeando" es par o impar
for(let i=0; i<20; i++){
    if(i % 2 === 0 ){ //SI LA DIVISION DEL NUMERO QUE ESTA EN i MIENTRAS VA LOOPEANDO EL RESTO DA cero seria par
        console.log(`el numero ${i} es par`)
    }else{//SI NO ES PAR
        console.log(`el numero ${i} NO ES PAR`)
    }
}


//EJEMPLO
const carrito = [
    {nombre:"monitor 20 pulgadas", precio:500},
    {nombre:"television 50 pulgadas", precio: 100},
    {nombre:"tablet", precio: 200 },
    {nombre:"audifonos", precio: 50 },
    {nombre:"celular",precio:300}
];


for (let i = 0; i < carrito.length; i++) {//SE EJECUTA EL CODIGO CUANDO i SEA MENOR A LA LONGITUD DEL ARRAY EN ESTE CASO (carrito.length)
    console.log(carrito[i])//Muestra en consola cada elemento del array, SI QUEREMOS ACCEDER A UNA PROPIEDAD seria console.log(carrito[i].nombre) 
}

//WHILE LOOP

let i = 0;//declaramos el indice por fuera del while
while (i<10) {// Condicion
    console.log(i)// Codigo a ejecutar siempre que la condicion sea verdadera
    
    i++ //Incremento
    
}

let index = 0 ;
while (index <= 20) {

    if (index % 2 === 0) {
        console.log(`el numero ${index} es PAR`)
    }else{
        console.log(`el numero ${index} NO ES PAR`)
    }
    index++
}


// DO WHILE
//Ejecuta el codigo ALMENOS UNA VEZ antes de verificar si la condicion es verdadera a diferencia de WHILE que PRIMERO VERIFICA SI LA CONDICION inicial es VERDADERA y luego ejecuta el codigo
let a = 0;//definimos valor inicial
do { console.log(carrito[a].nombre)
    a++
} while (a < carrito.length);


let q = 0;
do {
    console.log("hola" + q) ;
    q++
} while (q<10);




