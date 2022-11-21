// Métodos de cadenas

// .conCat()

// let cadena = "cadena de prueba ";
// let cadena2 = "cadena 2"
// let result = cadena.concat(cadena2);

// document.write(result);

// .startsWith() endsWith() si una cadena empieza con los caracteres de otra cadena

// let cadena = "cadena de prueba";
// let cadena2 = "cadena"
// let result = cadena.startsWith(cadena2);
// let result2 = cadena.endsWith(cadena2);

// document.write(result + "<br>");

// document.write(result2);

// .includes() busca cadenas

// let cadena = "cadena de prueba algo";
// let cadena2 = "cadena";

// let result = cadena.includes(cadena2);

// document.write(result);

// .indexOf() regresa la posición de mi caracter

// let cadena = "cadena de prueba algo";
// let cadena2 = "cadena";

// let result = cadena.indexOf("d");

// document.write(result);

// lastIndexOf()

//  let cadena = "Pedro es un tarado y huele a popo, popo, popo";
//  let cadena2 = "";

//  let resultado= cadena.lastIndexOf("popo");

// document.write(resultado);

// padStart()

// let cadena = "abc";

// let resultado = cadena.padStart(9, "xd ");

// document.write(resultado);

// padEnd(CantidadDeseadaRellenar, "String");

// let cadena = "abc";

// let resultado = cadena.padStart(9, "xd ");

// document.write(resultado);

// .repeat()

// let cadena = "Algo xd ";

// resultado = cadena.repeat(2);

// document.write(resultado);

// .split()

// let cadena = "hola, ¿como ,estas";

// resultado = cadena.split(",");

// document.write(resultado[0]);

// .subString()

// let cadena = "ABCDEFG";

// resultado = cadena.substring(0,3);

// document.write(resultado);

// .toLowerCase()

// let cadena = "ABCDEFG";
// resultado = cadena.toLowerCase();
// document.write(resultado);

// .toUpperCase()

// let cadena2 = "ABCDEFG";
// resultado = cadena.toUpperCase();
// document.write(resultado);

// .trim()

// let cadena2 = "  ABCDEFG  ";
// resultado = cadena.trim();
// document.write(resultado);

// .trimEnd()
// let cadena2 = "  ABCDEFG  ";
// resultado = cadena.trimEnd();
// document.write(resultado);

// .trimStart()

// let cadena = "  ABCDEFG  ";
// resultado = cadena.trim();
// document.write(resultado);


// METODOS DE ARRAYS

// .pop();
// let nombres = [`Pedro`, `Maria`, "Pelon"];

// let resultado = nombres.pop();
// document.write(resultado);

// .shift();

// let nombres = [`Pedro`, `Maria`, "Pelon"];

// let resultado = nombres.shift();
// document.write(resultado);

// .push();

// let nombres = [`Pedro`, `Maria`, "Pelon"];

// let resultado = nombres.push("Lolito", "Algo");
// document.write(nombres);

// .reverse()

// let nombres = [`Pedro`, `Maria`, "Pelon"];

// let resultado = nombres.reverse();
// document.write(resultado);


// .unshift()

// let nombres = [`Pedro`, `Maria`, "Pelon"];

// let resultado = nombres.unshift(2, "Algo", "Sera");
// document.write(resultado);

// .sort()

// let numeros = ["Abecedario", "Pedro", "Anita", "Jesus", "maria"];
// document.write(numeros + "<br>")
// numeros.sort()

// document.write(numeros);

// .splice()

// let numeros = ["Abecedario", "Pedro", "Anita", "Jesus", "maria"];
// document.write(numeros + "<br>")
// numeros.splice(1, 3, "Algo", "paso", "no se ", )

// document.write(numeros);    

// .join() 

// let numeros = ["Abecedario", "Pedro", "Anita", "Jesus", "maria"];

// let resultado = numeros.join(" xd ")

// document.write(resultado);

// .slice()

// let numeros = ["Abecedario", "Pedro", "Anita", "Jesus", "maria"];

// let resultado = numeros.slice(1, 4);

// document.write(resultado);

// .filter()

// let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo", "pedro"];

// numeros.filter(numero => document.write(numero + "<br>"));
// // mismo ejemplo con arrow functions y funciones normales
// numeros.filter(function (numero) {document.write(numero + "<br>")});

// let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo", "pedro"];

// let result = numeros.filter( numeros => numeros.length > 5 );
// va regresar los strings con mas de 5 caracteres

// document.write(result);

// let nums = [10, 30, 50, 100];

// let result = nums.filter(numeros => numeros < 70);

// document.write(result);

// objet Math()

// Math.sqrt()

// let numero = Math.sqrt(25);

// document.write(numero);

// Math.cbrt()

// let numero = Math.cbrt(8);

// document.write(numero);

// Math.max()

// let numero = Math.max(25, 456, 46,2 ,643,64);

// document.write(numero);

// Math.min()

// let numero = Math.min(25, 456, 46,2 ,643,64);

// document.write(numero);

// Math.random()
// let numero = Math.random()*100;

// document.write(numero)

// Math.round()

// let numero = Math.random()*100;
// numero = Math.round(numero);
// document.write(numero)

// Math.floor()

// Van a aparecer los numeros entre 0 y 10 sin que aparezca el 0
// let numero = Math.random()*10;
// numero = Math.floor(numero + 1);
// document.write(numero)
// document.write("<br>");
// Van a aparecer los numeros entre 0 y 10 sin que aparezca el 0 y el 10
// let numeros = Math.random()*9;
// numeros = Math.floor(numeros + 1);
// document.write(numeros)

// Math.fround()

// let numero = Math.fround(5.1);
// document.write(numero);

// Math.trunc()

// let numero = 56.456747;
// numero = Math.trunc(numero);
// document.write(numero)