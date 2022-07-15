document.addEventListener("DOMContentLoaded", function(){
    iniciarApp()
});

function iniciarApp() {
    crearLista()
}


const buscar = document.getElementById("buscar")
const filtrar = document.getElementById("filtrar")
const editar = document.getElementById("editar")
const dataTask = [
    {tarea:"correr", desc:"salir a correr 3 hs" },
    {tarea:"comer", desc:"Almorzar sano" },
    {tarea:"pasear", desc:"pasear al perro" },
    {tarea:"alimentar", desc:"darle de comer al pez" }
]

const para = document.createElement("p");
para.innerText = "This is a paragraph";




function crearLista() {


    function listarElementos() {
        dataTask.forEach(function(tarea) {
            const nombresLista = document.createElement("li")
            nombresLista.textContent = tarea.tarea;
            
            
            
        })
        
       
        
    }
    const nombres = 
    const layout = document.querySelector(".data")
    const contenedorTareas = document.querySelector(".data ul")    
    const listar = document.getElementById("listar")
    listar.onclick=function(params) {
        contenedorTareas.appendChild()
    }
    

    

    const clear = document.createElement("button")
    clear.classList.add("btn-limpiar")
    clear.textContent="LIMPIAR"
    

        

}


  
    



editar.onclick = function(p1,p2,p3) {
    p1 = prompt("Que tarea editar")
    p2 = prompt("Nuevo nombre")
    p3 = prompt("Nueva Descripcion")
    dataTask.forEach(function(tareas) {
        if(tareas.tarea === p1){
            tareas.tarea = p2
            tareas.desc = p3

          console.log(dataTask)
        }
    })
 

}













