//ARROW FUNCTIONS


const sumar = function (n1,n2){
    console.log(n1+n2);
}
sumar(5, 10);

//APLICANDO ARROW FUNCION LA EXPRECION QUEDA ASI
//Eliminamos la palabra function y si la funcion es de una sola linea podemos tambien eliminar los {}
const sumar2 = (n1,n2) => console.log(n1 + n2)

sumar2(20, 25)

//Creando funcion con ARROW FUNCTION
const aprendiendo = tecnologia =>{//cuando tienes un solo parametro tambien puedes eliminar los parentesis
    console.log(`aprendiendo ${tecnologia}`)//cuando tienes una linea borrar corchetes
}

aprendiendo("JavaScript")






//CONVIRTIENDO FUNCIONES EN ARROW FUNCTIONS



//ARRAY METHODS
const meses= ["enero","febrero", "marzo", "abril"];

const carrito = [
    {nombre:"monitor 20 pulgadas", precio:500},
    {nombre:"television 50 pulgadas", precio: 100},
    {nombre:"tablet", precio: 200 },
    {nombre:"audifonos", precio: 50 }
];


//.forEach
meses.forEach( mes=>{//se ejecuta una vez por cada elemento que haya en el array
if (mes=="marzo") {
    console.log("marzo si esta");
}

})


//.some ideal para Array de objetos
resultado = carrito.some(producto => producto.nombre === "tablet");
//console.log(resultado)


//.reduce para sumar el valor total de un Array como un carrito por ejemplo
resultado = carrito.reduce((total, producto) => {
    return total + producto.precio
}, 0);
//ARROW FUNCTION para acortar codigo
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado)

//.filter con ARROW FUNCTION
//resultado = carrito.filter((producto)=> producto.precio > 00);


resultado = carrito.filter(producto => producto.nombre !== "audifonos");//puedes filtrar por nombre, precio, etc
//con !== NEGAMOS TODA IGUALDAD es decir que returna todos los que no se llamen audifonos

console.log(resultado)



