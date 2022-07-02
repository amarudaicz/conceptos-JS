//this

//Creamos un objeto
const reservacion ={
    nombre:"amaru",
    apellido:"daicz",
    total:5000,
    pagado:false,
    informacion: function() {
        console.log(`el cliente ${reservacion.nombre} reservo y su cantidad a pagar es de ${this.total}`)//A los objetos se les puede agregar una funcion dentro
    } //CON esta sintaxis ${reservacion.nombre} tenemos que hacer referencia todo el tiempo al nombre de la variable paa eso existe la palabra reservada this

}
//PARA CORREGIR ESTE ERROR UTILIZAMOS this en vez del nombre de la variable para hacer referencia (reservacion.nombre)//Cambiamos nombre de la variable para no tener errores
const reservacion2 ={
    nombre:"pedro",
    apellido:"daicz",
    total:5000,
    pagado:false,
    informacion: function() {//la sintaxis this.nombre hace referencia a el objeto en el que se esta escribiendo la funcion y asi nos facilita no tener que poner el nombre de la variable
        console.log(`el cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)//A los objetos se les puede agregar una funcion dentro
    }
}
//ENVIAMOS A LA CONSOLA NUESTRAS VARIABLES SIEMPRE ABAJO DE TODO
//RECUERDA ACCEDEMOS AL OBJETO CON LA SINTAXIS DE PUNTO
//invocamos las funciones que funcionan igual pero con this no tenemos que hacer referencia a el nombre de la variable
reservacion.informacion();
reservacion2.informacion();//NUESTRA NUEVA VARIABLE (reservacion2) CON this


//PREGUNTA PARA CONSEGUIR TRABAJO ¿que resultado arroja el siguiente codigo?
const problema ={
    nombre:"amaru",
    informacion:() => {//si usas un arrow function en la funcion dentro del objeto y utilizas this para hacer referencia, no va a encotrar en este caso(nombre:"amaru") porque el arrow function no va a hacer referencia a lo que esta en el mismo objeto mas bien va a hacer referencia a la ventana global o a windows 
        console.log(this); //aca vemos lo que imprime el arrow function
        console.log(`el cliente ${this.nombre}`);
    }//para que funcione este codigo deberiamos agregar la VARIABLE nombre a la ventana global de window
}
//agregamos la variable nombre a la ventana global, ahora si funcionaria el codigo!!
window.nombre = "Juan";

problema.informacion();
