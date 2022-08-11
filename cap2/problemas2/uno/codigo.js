// mi solución problema A 
function partyTonight()
    {
        let hours = prompt("¿Cuál es tu hora de entrada? escoge entre 1 y 24 hrs");
        hours = parseFloat(hours);
        let years = prompt("¿Cuántos años tienes?");
        years = parseInt(years);

        if (years >= 18 && (hours < 7 && hours >= 2 ))
            {
                document.write("Adelante pasa a mí fiesta y sin pagar baby 😎");
            }
        else if (years >= 18 && hours > 3)
            {
                document.write("pase a la fiesta pero con una pequeña comisión 💰");
            }
        else
            {
                document.write("regresate a tu casa chamaco miado 🤣");
            }
    }
// Solución problema A de Dalto

let free = false

const validarCliente = (time) => 
    {
        let edad = prompt("¿Cuál es tu edad?");
        if (edad > 18) 
            {
                if(time >= 2 && time < 7 && free == false )
                    {   
                        alert("puedes pasar gratis 😎");
                        free = true; // significa que la entrada gratis ya se dió, así que el codigo ya no volverá a ejecutarse otra vez, o sea la primer persona que pase después de las 2 am 
                    }
                else 
                    {
                        alert(`Son las ${time}:00 hrs, pasa pero hay que pagar💰`)
                    }
            }  
        else 
            {
                alert("regresate a tu casa chamaco miado no vas a pasar xd");
            }   
    }

validarCliente(23);
validarCliente(3);
validarCliente(24);
validarCliente(4);
validarCliente(22);
validarCliente(10);
validarCliente(2.5);    