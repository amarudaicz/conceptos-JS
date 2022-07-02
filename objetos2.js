//como crear variables a partir de objetos
const producto={
    nombreproducto:"monitor 20 pulgadas",//COMAS PARA SEPARAR LAS PROPIEDADES DEL OBJETO
    precio:300,
    disponible: true,
}

//como extraer el precio y crear una variable
const precioProducto = producto.precio;
const nombreProducto = producto.nombreproducto;

//console.log(precioProducto)
//console.log(nombreProducto)

//Segunda forma de extraer una propiedad y convertirla en una variable
//metodo DESTRUCTURING
const{precio} = producto; //elejimos entre corchetes la propiedad que queremos extraer
const{disponible} = producto;
const{nombreproducto} = producto;

console.log(precio)
console.log(nombreproducto)



//CUANDO APLICAS DESTRUCTURING AL MISMO OBJETO 
const bicicleta={
    cuadro: "zenit",
    ruedas: "anchas",
    manubrio: "recto"
}
const {cuadro, ruedas} = bicicleta //separas con COMA las propiedades que quieres extraer

console.log(cuadro)
console.log(ruedas)
