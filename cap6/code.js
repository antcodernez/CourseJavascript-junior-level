// metodos de seleccion de elementos

// .getElementById()
const parrafo = document.getElementById("parrafo");
document.write(`${parrafo}`); // devuelve un elemento html

// .getElementsByTagName()

const tagsName = document.getElementsByTagName("div");
console.log(tagsName[0]); // devuelve una lista de elementos, puedo acceder a ellos con un indice

// .querySelector();

const queryNames = document.querySelector(".title"); 
console.log(queryNames); // Devuelve un solo elemento, objeto

// .querySelectorAll();

const querySelectorTodos = document.querySelectorAll(".title");
document.write("<br>" + querySelectorTodos[1]); // retorna un nodeList, no es un array, accedo a ellos con un indice

// metodos para definir, obtener y eliminar valores de atributos

// .setAttribute();



