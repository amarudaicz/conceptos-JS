//herencia

class Producto{
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }

    formatearProducto(){
       return (`formateando ${this.nombre} que tiene un precio de ${this.precio}`);
    }


    obtenerPrecio(){
        console.log(this.precio);
    }
}

let producto1= new Producto("televisor", 500);


//Creamos otra clase
class Libro{
    constructor(nombre, precio, isbn){
        this.nombre=nombre;
        this.precio=precio;
        this.isbn=isbn;
    }
}

let libro1=new Libro("full javascript", 250, 45654621);

//Cuando tenemos dos classes con mismos parametros/atributos podemos usar la herencia
//Para aplicar la herencia por ejemplo de la clase Producto a la clase Libro
//Seria algo como esto
//Cambiamos el nombre de la clase para no tener problemas Agregamos la palabra reservada extends que significa que aplicamos herencia de todo el constructor de la clase Producto

class LibroConHerencia extends Producto{
   //se hereda todo el contenido de la clase heredada pero hay que indicar que los almacene en el objeto eso lo hacemos con una funcion que se llama super()
    constructor(nombre, precio, isbn){
    super(nombre, precio)//la funcion super va a buscar en el constructor padre los valores que le ingreses entre parentesis, si le ingresas un valor, que no tiene el padre, dara error                                                                                                                                                                                             
    this.isbn=isbn; //y añadimos con this.isbn el nuevo parametro del objeto que no hereda del padre                                                                                                                                                                                                                                                                          
    }

    formatearProducto(){
        return (`${super.formatearProducto()} y su ISBN es ${this.isbn}`)//podemos llamar a la funcion formatearProducto con ${super.formatearProducto} y agregarle mas codigo tambien
    }

    obtenerPrecio(){
        super.obtenerPrecio();//con super.obtenerPrecio() heredamos del padre la funcion de la clase padre (Producto)
        console.log("si hay existencias");
    }

    
}

const libro2 = new LibroConHerencia("html,css", 125, 454565454);

console.log(producto1.formatearProducto());
console.log(libro2);
console.log(libro2.formatearProducto());
console.log(libro2.obtenerPrecio());



