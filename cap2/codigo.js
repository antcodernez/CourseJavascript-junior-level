
//Arrays 
// let listaFrutas = ["Melón", "Fresa", "Durazno", "Plátano"];

// document.write(listaFrutas[2]);


// let numero = prompt("dame un numero");
// let titulo = document.getElementById("title-pagina");

// if(numero == 1)
// {
//     titulo.innerText = `Prueba de que puedo ser pro`;
// }
// else if (numero == 2)
//     {
//         for (let i = 0; i < listaFrutas.length; i++) 
//         {
//             document.write(`Tienes  ${listaFrutas[i]}, `);        
//         }
//     }
// else
//     {
//         alert("Nada paso xd");
//     }

// arrays asociativos
// let pc1 =
//     {
//         nombre: "HP",
//         ram: "4gb",
//         procesador: "Intel i3",
//         espacio: "254gb"
//     };

// let pc2 = ["HP", "4gb", "Intel i3", "254gb"];


// let frase = `El nombre de mi pc es <b> ${pc1["nombre"]} </b> <br />
// La ram es de <b>${pc1["ram"]}</b> <br />
// El procesador es el <b>${pc1["procesador"]}</b> <br />
// El espacio es de <b>${pc1["espacio"]}</b> <br />`

// document.write(frase);

// while 

// let numeroSuma = 0;

// while (numeroSuma < 5)
//     {
//         numeroSuma++;  
//         document.write(`Tu numero es ${numeroSuma} <br>`);
//     }

//Do while

// let numeroSuma = 0;

// do 
//     {
//         numeroSuma++;  

//         document.write(`Tu numero es ${numeroSuma} <br>`);
        
//     }
// while (numeroSuma > 3)

// sentencia break

// let numero = 0;

// while (numero < 1000)
//     {
//         numero++;
//         document.write(numero + "<br>");

//         if (numero == 10)
//             {
//                 break;
//             }
//     }

// for

// for( let i = 0;  i <= 6; i++)
//     {
//         document.write(i + "<br>")
//     }

// for (let i = 6; i >= 0; i--)
//     {
//         document.write(i + " Soy un bucle invertido xd" + "<br>")
//     }

// continue 

// for ( let i = 0; i < 12; i = i + 2)
//     {
//         if (i == 8 )
//             {
//                 continue;
//             }
//         document.write(`Iteracion de un bucle de dos en dos ${i} <br>`);
//     }

// for in and for of

// let animals = [`Gato`, `Perro`, `T-rex`]; 

// for(animal in animals)  
//     {
//         document.write(animals[animal] + "<br>");
//     } 

// document.write("<br>");

// for (animal of animals)
//     {
//         document.write(animal + "<br>");
//     }

//sentencia label

// array1 = ["Pamela", "Josefa", "Solobino"];
// array2 = ["Yisus", "Jose", "Pedro", array1, "Josefina"];
// forLosNombres: 
// for (let array in array2)
// // primero recorri el primer array
//     {
//         if (array == 3)
//         // si estoy en la posición 2 voy a recorrer otro array 
//             {
//                 for(let array of array1)
//                     {
//                         document.write(array + "<br>");
//                         break forLosNombres;
//                     }
//                 //mientras recorro el segundo array los muestro en pantalla
//             }
//         else 
//             {
//                 document.write(array2[array] + "<br>");
//             }
//     }

// funciones 

// declarativa
    function saludar()
        {
            let name = prompt("¿Cómo te llamas?");
            console.log(`Hola ${name}`);
        }
// expresiva
        var sayHello = function(name)
        {
            console.log(`Hola ${name}`);
        }
// parametros

// let num1 = 23;
// let num2 = 10;

// function suma(num1, num2)
//     {
//         let result = num1 + num2;
//         document.write(result);
//         document.write("<br>"); 
//     }
// suma(45, 10);
// suma(10, 10);
// suma(20, 70);

// funciones flecha

const sal = (nombre = "Jesus")=>
    {
        let frase = `Hola ${nombre}`;
        document.write(frase);
        document.write("<br>");
    }
sal();
sal("Peter");