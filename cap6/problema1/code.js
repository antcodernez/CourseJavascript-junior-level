const contenedor = document.querySelector(".flex-container");

function crearLLave(nombre, modelo, precio)
    {
        img = "<img src=`./key.png`>";
        nombre = `<h2>${nombre}</h2>`;
        modelo = `<h3 id="${modelo}">${modelo}</h3>`;
        precio = `<p><b>Precio: </b>$${precio}</p>`;

        return[img, nombre, modelo, precio];
    }
let fragmentoDOM = document.createDocumentFragment();
 
for (var i = 1; i <= 20; i++)
    {
        let precioRandom = Math.round(Math.random()*100); // tengo un numero entre 30 y 40
        let modeloRandom = Math.round(Math.random()*10+45);
        let llave = crearLLave(`llave ${i}`, `modelo: ${modeloRandom}`, `precio: ${precioRandom}`);
        
        let div = document.createElement("DIV");
        div.classList.add(`flex-item`, `item-${i}`);
        div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
        fragmentoDOM.appendChild(div);  
    }
contenedor.appendChild(fragmentoDOM);