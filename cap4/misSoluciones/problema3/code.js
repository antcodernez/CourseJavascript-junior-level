let ocupacion;

const materiasEscuela =
    {
        ingles : ["Jose Manuel", "Pedrito Picapiedra", "JoSex", "María", "Antonio", "Koalita", "Pandita", "Koalita", "Anita", "Cofla"],

        algebra: ["Fernanda", "María", "Jesus Antonio", "Jesus", "Obed", "El fantasma Wences", "El diablo", "Cofla"],

        programacion : ["El fantasma Wences", "Cofla", "El diablo", "Jose Manuel", "Jesus Antonio"],

        redes: ["Jesus", "Jose", "Maximo", "María", "JoSex", "Jesus Antonio", "Obed"]
    }

function inscripcion()
    {
        eleccion = prompt(`
        materias disponibles para inscripción
        Inglés
        Álgebra
        Programación
        Redes
        Ingresa el nombre de la materia para inscribirte y ver la disponibilidad `);
        
        switch(eleccion)
        {
            case `ingles` : case `Inglés`: case `INGLES` : case  `inglés` : case `INGLÉS` :
                ocupacion = materiasEscuela.ingles.length;
                
                if (ocupacion < 12)
                    {
                        let name = prompt(`Aun hay cupos disponibles
                        ingresa tu nombre: `);

                        alert("Te has inscrito correctamente")
                        
                        materiasEscuela.ingles.push(name);
                    }
                else 
                    {
                        alert("Ya no hay cupos disponibles para esta materia");
                    }
            break;

            case `algebra` : case `Algebra` : case `Álgebra` : case `ALGEBRA` : case `ÁLGEBRA` :
                ocupacion = materiasEscuela.algebra.length;
                
                if (ocupacion < 12)
                    {
                        let name = prompt(`Aun hay cupos disponibles
                        ingresa tu nombre: `);

                        alert("Te has inscrito correctamente")
                        
                        materiasEscuela.algebra.push(name);
                    }
                else 
                    {
                        alert("Ya no hay cupos disponibles para esta materia");
                    }
            break;

            case `programacion` : case `programación` :  case `Programacion` : case `Programación` : case `PROGRAMACION ` : case `PROGRAMACIÓN ` :
                ocupacion = materiasEscuela.programacion.length;
                
                if (ocupacion < 12)
                    {
                        let name = prompt(`Aun hay cupos disponibles
                        ingresa tu nombre: `);

                        alert("Te has inscrito correctamente")
                        
                        materiasEscuela.programacion.push(name);
                    }
                else 
                    {
                        alert("Ya no hay cupos disponibles para esta materia");
                    }
            break;

            case `redes` : case `Redes` : case `REDES` :
                ocupacion = materiasEscuela.redes.length;
                
                if (ocupacion < 12)
                    {
                        let name = prompt(`Aun hay cupos disponibles
                        ingresa tu nombre: `);

                        alert("Te has inscrito correctamente")
                        
                        materiasEscuela.redes.push(name);
                    }
                else 
                    {
                        alert("Ya no hay cupos disponibles para esta materia");
                    }
            break;

            default :
                    alert("Ingreso una materia no valida");
            break;
        }
    }