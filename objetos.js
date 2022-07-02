//OBJETOS JS

//definir un objeto cuando asignamos variables para un mismo elemento 

//Ejemplo
const ombreProducto="monitor 20 pulgadas";
const pecio=300;
const dsponible=true;
//definimos un objeto con esta extructura
const producto={
    nombreproducto:"monitor 20 pulgadas",//COMAS PARA SEPARAR LAS PROPIEDADES DEL OBJETO
    precio:300,
    disponible: true,
};


//Como acceder a las propiedades del objeto
//sitaxis de Puntos
//console.log(producto.precio);
//console.log(producto.nombreproducto);
//console.log(producto.disponible);

//segunda forma de acceder a las propiedades
//metodo de CORCHETES
//console.log(producto["precio"])


//COMO ELIMINAR O AGREGAR PROPIEDADES AL OBJETO
//asi ACCEDEMOS al objeto y agregamos propiedad
producto.imagen="imagen.jpg";

//como ELIMINAR PROPIEDAD
delete producto.disponible;//eliminamos la propiedad disponible del objeto producto

console.log(producto);

