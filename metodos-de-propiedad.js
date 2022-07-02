//METODOS DE PROPIEDAD
//Creamos un objeto con una funcion dentro
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo Cancion ${id}`)
    },
    pausar: function () {
    console.log("pausando...")        
    },
    crearPlaylist:function(nombrePlaylist){
        console.log(`Creando playlist ${nombrePlaylist}`)
    },
    borrarPlaylist:function(id){
        console.log(`Borrando playlist ${id}`)
    }
}

//PODEMOS AGREGAR FUNCIONES POR FUERA DEL OBJETO
reproductor.borrarCancion = function(id){
    console.log(`Eliminando cancion: ${id}`)
}


console.log(reproductor)
reproductor.reproducir("MAIAMEE")//INVOCAMOS LA FUNCION PERO CON SINTAXIS DE NU METODO
reproductor.pausar();
reproductor.borrarCancion("MALAWAA");
reproductor.crearPlaylist("Trap")
reproductor.borrarPlaylist("Cachengue")








