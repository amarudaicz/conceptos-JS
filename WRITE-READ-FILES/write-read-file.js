const fs = require('fs');//GUARDAMOS EL MODULO QUE YA VIENE CON JS 

//Extraemos la data del archivo .json para convertirla en objetos literal
const data = fs.readFileSync('./dataTask.json', 'utf-8');//Accedemos a el archivo dataTask.json con la funcion de node fs.readFileSync
const autos = fs.readFileSync('./dataAutos.json', 'utf-8')

const dataObjetoLiteral = JSON.parse(data);//CON .parse modificamos nuestro .json a un objeto Literal
const dataJson = JSON.stringify(dataObjetoLiteral)//PASAMOS LA DATA COMO OBJETO LITERAL A ARCHIVO JSON 
fs.writeFileSync("./dataJson.json", dataJson)//CREAMO EL DONDE PASAMOS LA DATA COMO OBJETOS A JSON NUEVAMENTE


const autosObjetoLiteral = JSON.parse(autos);


function mostrarMarcas() {
    let dat =
    autosObjetoLiteral.arrayAutos.forEach(element => {
        return element

      
    });

}

mostrarMarcas()

let marcas = mostrarMarcas()

console.log(marcas)