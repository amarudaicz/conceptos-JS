//LOGIN//

user = "amaru";
pass = "contrasena";

if (user = "amaru") {
    console.log("es el")
}


//ARRAYS
//Creando arrays
let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
equipoUno=["Amaru", "huari, Agus, Samuel"]
console.log(equipoUno)


let sequence = [1, 1, 2, 3, 5, 8, 13]; //Se puede almacenar cualquier elemento en una matriz — cadena, número, objeto, otra variable, incluso otra matriz. También puedes mezclar y combinar tipos de elementos — no todos tienen que ser números, cadenas, etc. Prueba estos:
let random = ['tree', 795, [0, 1, 2]];

//Accediendo y modificando elementos de la matriz

shopping[0];
// returns "bread"
console.log(typeof shopping);

//también puedes modificar un elemento en una matriz simplemente dando a un item de la matriz un nuevo valor. Prueba esto:
shopping[0] = 'tahini'; // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]

//Nota: Lo dijimos antes, pero solo como recordatorio — ¡ las computadoras comienzan a contar desde 0!
console.log(shopping)


//Ten en cuenta que una matriz dentro de otra matriz se llama matriz multidimensional. Puedes acceder a los elementos de una matriz que estén dentro de otra, encadenando dos pares de corchetes. Por ejemplo, para acceder a uno de los elementos dentro de la matriz, que a su vez, es el tercer elemento dentro de la matriz random (ver sección anterior), podríamos hacer algo como esto:
random[2][2];

//Puedes averiguar la longitud de una matriz (cuántos elementos contiene) exactamente de la misma manera que determinas la longitud (en caracteres) de una cadena— utilizando la propiedad length. Prueba lo siguiente:
console.log(sequence.length);


