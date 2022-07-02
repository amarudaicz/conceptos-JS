//ForEach
// puede ser utilizado unicamente en arreglo
//Se ejecuta una vez por cada elemento que halla dentro del array


const carrito = [
    {nombre:"monitor 20 pulgadas", precio:500},
    {nombre:"television 50 pulgadas", precio: 100},
    {nombre:"tablet", precio: 200 },
    {nombre:"audifonos", precio: 50 }
];


carrito.forEach(function(){//NO TIENES QUE ESCRIBIR UNA CONDICION PARA ForEach SE EJECUTA UNA VEZ POR ELEMENTO(VA ITERANDO)
    console.log("una vez por cada elemento")
});

//Le damos un PARAMETRO a la funcion y ese seria el objeto actual en el que va iterando 
carrito.forEach(function(producto){
    console.log(producto)
});
//ACCEDEMOS AL PRECIO CON LA SINTAXIS DE PUNTO (.PRECIO)
carrito.forEach(function(producto){
    console.log(producto.precio)
});
//ACCEDEMOS AL NOMBRE TAMBIEN CON LA SINTAXIS DE PUNTO (.NOMBRE) y asi con el 
carrito.forEach(function(producto){
    console.log(producto.nombre)
});

//APLICANDO ARROW FUNCTION
carrito.forEach(producto=>console.log(producto.nombre));




///////////////////////////////////////////////////////////////////////////////////////////////////////////



//.MAP//La sintaxis es la misma, 
//PREGUNTA PARA CONSEGUIR TRABAJO  ¿Cuando usar cada una?
//Cuando quieras iterar sobre un ARRAY y mostrar los elementos en pantalla o solo enviarlos a la consola UTILIZA For Each
//Cuando quieras CREAR UN NUEVO ARRAY USA Con los datos que "filtres" .map
carrito.map(producto=>console.log(producto.nombre));

//LOS METHODS QUEDARIAN ASI
carrito.map(producto=>console.log(producto.nombre));
carrito.forEach(producto=>console.log(producto.precio));

//Si damos por implicito el return, Osea si quitamos el console.log estamos dando por implicito el return, osea lo que "devuelve" ese metodo, solo que no se almacena en ningun lado porque no lo asignamos a una variable
//BORAMOS EL console.log y A ESTO TENDRIAMOS QUE ASIGNARLO A UNA VARIABLE PARA QUE SE ALMACENE EL VALOR
carrito.map(producto=>(producto.nombre));
carrito.forEach(producto=>(producto.precio));

//Asignamos las variables
let nombre = carrito.map(producto=>(producto.nombre));//.map CREA UN NUEVO ARRAY CON LO QUE QUIERAS "FILTRAR" o "ITERAR"
let precio = carrito.forEach(producto=>(producto.precio));//.forEach APARECE COMO UNDEFINED EN LA CONSOLA porque debemos MANDARLO A LA CONSOLA CON console.log(producto.precio)
let precio1 = carrito.forEach(producto => console.log(producto.precio))

//Lo imprimimos en la consola
console.log(nombre);
console.log(precio);
console.log(precio1)//no cambio el undefined nose porque????????????
