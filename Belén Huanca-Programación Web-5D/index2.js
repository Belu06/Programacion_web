Objetos:
/*ACTIVIDAD 1:

function createObject(name, subs) {
   const persona ={
    name: name,
    subscribers: subs,
    hash: name.lenght * subs,
    getStatus: function () { // <- método
        return `El canal de ${name} tiene ${subscribers}`
    }
    } 
} */

//ACTIVIDAD 2:

//1- ¿Qué se imprimirá en la consola al ejecutar el siguiente código? y por que?

/*const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'music', 'sports']
  }
            
  const { 
    weight = 70,
    height = 180,
    } = person
  console.log(weight, height)*/

//En la consola no se imprime nada debido un error en el codigo. 
//Porque en el código el segundo const no tiene una variable definida.

//2- ¿Qué se imprimirá en la consola al ejecutar el siguiente código? Y por que?

const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'music', 'sports']
  }
            
  const { age: personAge } = person
  console.log(age)

//2 - No imprime nada. Porque la variable fue modicada en la septima linea de código.

//3- ¿Cómo se llama el atajo que nos permite recuperar el valor de una propiedad de un objeto?
//El atajo que nos permite recuperar el valor de una propiedad de un objeto es la notación de corchetes o notación de puntos.
