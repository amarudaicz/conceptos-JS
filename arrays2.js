//ARRAY METHODS
const meses= ["enero","febrero", "marzo", "abril"];

const carrito = [
    {nombre:"monitor 20 pulgadas", precio:500},
    {nombre:"television 50 pulgadas", precio: 100},
    {nombre:"tablet", precio: 200 },
    {nombre:"audifonos", precio: 50 }
];


//.forEach
meses.forEach(function(mes){//se ejecuta una vez por cada elemento que haya en el array
if (mes=="marzo") {
    console.log("marzo si esta");
}

})

//.includues
let resultado = meses.includes("marzo");//verifica si el elemento del array existe dentro de el y devuelve un valor TRUE o FALSE
//console.log(resultado);

let resultado2 = carrito.includes("audifonos");//NO SIRVE para arrays de objetos(no devuelve TRUE por mas que la propiedad del objeto este en el array)

//console.log(resultado2)

//.some ideal para Array de objetos

resultado = carrito.some(function(producto){
    return producto.nombre === "tablet"
});
//console.log(resultado)


//.reduce para sumar el valor total de un Array como un carrito por ejemplo
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);
//ARROW FUNCTION para acortar codigo
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);



resultado = carrito.filter(function(producto){
    return producto.precio > 200
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== "audifonos"//puedes filtrar por nombre, precio, etc
});//con !== NEGAMOS TODA IGUALDAD es decir que returna todos los que no se llamen audifonos


console.log(resultado)


//ARROW FUNCTION EXPLICACION
// Función tradicional
//function (a){
    return a + 100;
//}
  
  // Desglose de la función flecha
  
  // 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
  (a) => {
    return a + 100;
  }
  
  // 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
  (a) => a + 100;
  
  // 3. Suprime los paréntesis de los argumentos
  a => a + 100;
