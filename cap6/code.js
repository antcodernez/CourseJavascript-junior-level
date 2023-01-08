// METODOS DE SELECCIÓN DE ELEMENTOS

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


// METODOS PARA DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTOS
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

// ATRIBUTOS GLOBALES
// const title = document.querySelector(".title");

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


// ATRIBUTOS DE LOS INPUTS

// const input = document.querySelector(".input-normal");

// className
// document.write(input.className);

// value
// document.write(input.value);

// type
// input.type = "button";

// accept
// input.accept = "image/png";

// otras están directamente en el html


// Clases, classList y metodos de classList

// const title = document.querySelector(".title");

// .classList.add();
// title.classList.add("xd"); va a agregar la clase xd, la clase xd tiene estilos propios 

// .classList.remove();
// title.classList.remove("xd");  removera la clase xd

// classList.item();
// let valor = title.classList.item(1);
// document.write("<br>" + valor);
// tengo 3 clases diferentes en mi h1, que son title, xd y rojito.     title == 0, xd == 1, rojito == 2
// estoy accediendo a el item 1 que es la clase xd
// no modifica las clases, les pide

// classList.contains()
// let valor = title.classList.contains("xd");
// document.write(valor);
// si tiene la clase regresa true y viceversa

// classList.toggle()
// si tiene una clase la agrega, sino la tiene la elimina
// title.classList.toggle("lol");

// title.classList.toggle("lol", true); cuando meto true si la tiene, igual la va dejar 

// title.classList.toggle("lol", false); cuando meto false, igual la va a sacar

// classList.replace();
// reemplaza una clase por otra
// let algo = title.classList.replace("rojito", "xd");
// document.write(algo);
// si la clase a reemplazar no existe, retorna false y viceversa


// OBTENCION Y MODIFICACIÓN DE ELEMENTOS

// const title = document.querySelector(".title");

// .textContent

// let resultado = title.textContent 
// document.write(resultado);

// Devuelve solo el texto que puedo ver, no el html, ejemplo: 
    // <h1 class="title">Un titulo <b>perron</b></h1>
    //No va a retornar el texto junto a la etiqueta <b>

// .innerText
// let resultado = title.innerText 
// document.write(resultado);

// .outerText
// let resultado = title.outerText
// document.write(resultado);

// .outerHTML
// let resultado = title.outerHTML 
//document.write(resultado);
//muestra el codigo, la etiqueta y todo lo que contiene

// .innerHTML
// let resultado = title.innerHTML 
// document.write(resultado);
// En el alert, la variable resultado se muestra el elemento html, con su clase, atributos etc.

// Ejemplo de variacion en las propiedades
// let resultado = title.textContent
// let resultado2 = title.innerHTML
// let resultado3 = title.outerHTML
// alert(resultado);
// alert(resultado2);
// alert(resultado3);

// CREACIÓN DE ELEMENTOS
// const contenedor = document.querySelector(".contenedor");

// .createElement()
// const item = document.createElement("LI"); // TODO EN MAYUSCULA porque solo así reconoce los elementos, estoy creando un elemento html y guardandolo en la variable item

// .createTextNode()
// const textoDelItem = document.createTextNode("es un item de la lista");

// appendChild() agrega nodos a un padre especifico
//item.appendChild(textoDelItem)

// console.log(item);
// contenedor.appendChild(textoDelItem) ; // estoy obteniendo del documento un objeto del DOM con la clase contenedor, que guarde en la variable contenedor despues le estoy incertando  un nodo(previamente definido por mí) con el metodo appendChild()  

// otra forma de hacerlo
// item.textContent = "Algo de texto amigin";
// contenedor.appendChild(item);

// .createDocumentFragment()
// evitamos consumir recursos de manera execesiva
// const fragmento = document.createDocumentFragment();

// for (i = 1; i <= 10; i++)
//     {
//         var item = document.createElement("LI");
//         item.textContent = `texto numero ${i}, con contenido perrón`;
//         fragmento.appendChild(item);
//     }
// contenedor.appendChild(fragmento);


// OBTENCION Y MODIFICACION DE CHILDS (HIJOS)

//const contenedor = document.querySelector(".contenedor");

// const color = document.querySelector(".title");
// color.style.background = "red"; una curiosidad, no es nada relacionado con nada

// .firstChild agarra el primer hijo
// const primerHijo = contenedor.firstChild;
// console.log(primerHijo);
// // si dejo un espacio, también es un elemento y no me mostarará mi <h1>

// .lastChild;
// const ultimoHijo = contenedor.lastChild;
//console.log(ultimoHijo);
// si dejo un espacio, también es un elemento y no me mostarará mi <p>

// .firstElementChild
// const firsBaby = contenedor.firstElementChild;
//console.log(firsBaby);

// .lastElementChild
// const lastBaby = contenedor.lastElementChild;
// console.log(lastBaby);

// .childNodes
// const hijos = contenedor.childNodes;
// console.log(hijos); 

// puedo recorrerlo con forEach porque es un objeto
// hijos.forEach(hijo => console.log(hijo));

// .children
// const hijos = contenedor.children;
// for(hijo in hijos)
//     {
//         console.log(hijo);
//     }

// METODOS DE LOS CHILDS (HIJOS)

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P");
// parrafo.innerHTML = "parrafo super pro hecho con codigo";
// const h2New = document.createElement("H2");
// h2New.innerHTML = "titulo h2 super pro hecho con codigo por ADBIIIII";


// .replaceChild() remplaza hijos
// let h2Viejo = document.querySelector(".Subtitle");
// contenedor.replaceChild(h2New, h2Viejo); // primero va el elemento nuevo

// .removeChild() elimina el hijo que no quiero
// let title = document.querySelector(".title");
// contenedor.removeChild(title);

// .hasChildNodes()
// let respuesta = contenedor.hasChildNodes();

// if(respuesta == true)
//     {
//         alert("El elemento si tiene hijos");
//     }
// else 
//     {
//         alert("El elemento no tiene hijos")
//     }
// const hijosDeHIjos = document.querySelector(".colitaRosa");

// let result = hijosDeHIjos.hasChildNodes();
// if(result == true)
//     {
//         document.write("El elemento si tiene hijos");
//     }
// else 
//     {
//         document.write("El elemento no tiene hijos")
//     }


// PROPIEDADES DE LOS PADRES
// arrojan quien es el contenedor padre
// const h2Viejo = document.querySelector(".Subtitle");

// .parentElement
// let resultado = h2Viejo.parentElement;
// console.log(resultado);

// .parentNode;
// let result = h2Viejo.parentNode;
// console.log(result); // se usa por si el padre no es un elemento html, se usa rara vez


// PROPIEDADES DE LOS SIBLINGS (HERMANOS)

// const subtitle = document.querySelector(".Subtitle");

//.nextSibling
// let siguienteHermano = subtitle.nextSibling;
// console.log(siguienteHermano);

// .previousSibling
// let previoHermano = subtitle.previousSibling;
// console.log(previoHermano);

// .nextElementSibling
// let siguienteHermano = subtitle.nextElementSibling;
// console.log(siguienteHermano);

// let previoHermano = subtitle.previousElementSibling;
// console.log(previoHermano);

// NODOS EXTRA
let div = document.querySelector(".div-3");
let result = div.closest(".div")
console.log(result);    