// metodos de seleccion de elementos

// .getElementById()
// const parrafo = document.getElementById("parrafo");
// document.write(`${parrafo}`); 
// devuelve un elemento html

// .getElementsByTagName()

// const tagsName = document.getElementsByTagName("div");
// console.log(tagsName[0]); 
// devuelve una lista de elementos, puedo acceder a ellos con un indice

// .querySelector();

// const queryNames = document.querySelector(".title"); 
// console.log(queryNames);
 // Devuelve un solo elemento, objeto

// .querySelectorAll();

// const querySelectorTodos = document.querySelectorAll(".title");
// document.write("<br>" + querySelectorTodos[1]); 
// retorna un nodeList, no es un array, accedo a ellos con un indice

// metodos para definir, obtener y eliminar valores de atributos

// .setAttribute();
// const rangoEdad = document.querySelector(".rangoXD");
// rangoEdad.setAttribute("type", "range");
// primer parametro es lo que quiero modificar
// el segundo parametro es el nuevo valor

// .getAttribute()
// document.write(rangoEdad.getAttribute("class"));
// puedo obtener el valor del  atributo

// .removeAttribute();
// rangoEdad.removeAttribute("id");
// elimina el atributo id 

// atributos globales

const title = document.querySelector(".title");
// title.setAttribute("style", "font-weight: 500"); este codigo es mio

// contentEditable = "true" (asi en el html)
// title.setAttribute("contentEditable","true");
// puedo editar ese contenido en el html

// dir="rtl" right to left   dir="ltr" left to right
// title.setAttribute("dir", "rtl");

// hidden="true"
// title.setAttribute("hidden","true");

// tabindex="0"  , tabindex="1," tabindex="2"...

//title.setAttribute("tabindex", "0");
// title.setAttribute("tabindex", "1");
// title.setAttribute("tabindex", "2"); dependiendo del orden, cuando presione tab voy a irlos seleccionando y me va a dar el efecto focus 

// title="algo de texto cuando pones el cursor"

// title.setAttribute("title", "algo de texto");

