const dataTask = [
    {tarea:"correr", desc:"salir a correr 3 hs"},
    {tarea:"comer", desc:"Almorzar sano" },
    {tarea:"pasear", desc:"pasear al perro" },
    {tarea:"alimentar", desc:"darle de comer al pez" }
]

function listar() {
    dataTask.forEach(element=> {
        console.log(element)

    });
}


function encontrar(p) {

     for (let i = 0; i < dataTask.length; i++) {
        let bandera = false;//Definimos una bandera para provar la funcion
        if (dataTask[i].tarea === p) {
            bandera=true
        }

        return bandera
    }
}
// encontrar()



function filtrar(p) {
  dataTask.forEach(function (tarea) {
      if (tarea.tarea.includes(p)) {

           console.log(tarea.desc)

       }
    })
}


function edit(p1,p2,p3) {
    for (let i = 0; i < dataTask.length; i++) {
        let task="tarea no encontrada"
        if (dataTask[i].tarea === p1) {
            task=dataTask[i]
            task.tarea=p2;
            task.desc=p3; 
        }

        return task
        
        
    }


}
function editar(p1,p2,p3) {
    dataTask.forEach(function(tareas) {
        if(tareas.tarea === p1){
            tareas.tarea = p2
            tareas.desc = p3
          console.log(dataTask)
        }
    })
}



switch (process.argv[2]) {
    case "list":
            listar()
        break;

        case "find":
           console.log(encontrar(process.argv[3]))
        break;

        case "filter":
            filtrar(process.argv[3])
        break;

        case "edit":
            console.log(edit(process.argv[3], process.argv[4], process.argv[5]))
        break;

    default:
        break;
}
