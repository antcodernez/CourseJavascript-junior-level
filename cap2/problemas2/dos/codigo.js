// sistema de asistencia problema B mi solución 

// Dalto Solución problema B

let cantidad = prompt("¿Cuántos alumnos son?");
let alumnosTotales =[];

// vamos a rellenar el array de alumnos
for (i = 0; i < cantidad; i++)
    {
        alumnosTotales[i] = [prompt(`Nombre del alumno ` + (i + 1)), 0]; // el 0 al final es la cantidad de asistencias que tiene 
    }

// vamos a crear una función 
const tomarAsistencia = (nombre, p) =>
    {
        let asistencia = prompt(nombre);
        if (asistencia == "p" || asistencia == "P")
            {
                alumnosTotales[p][1]++; // estoy seleccionando un elemento del array, que esta dentro de otro array  
            }
    }
// vamos a crear una función para ejecutar 30 veces el bucle porque son 30 días  
for (i = 0; i < 30; i++)
    {
        for(alumno in alumnosTotales) // in nos pasa el indice dentro del array 
            {
                tomarAsistencia(alumnosTotales[alumno][0], alumno); 
            }
    }
// aquí vamos a escribir el resultado

for(alumno in alumnosTotales)
    {
        let resultado = `${alumnosTotales[alumno][0]}:<br>
        _________Asistencias: ${alumnosTotales[alumno][1]} <br>
        _________Ausencias ${30 - parseInt(alumnosTotales[alumno][1])}`;

        let faltas = 30 - alumnosTotales[alumno][1];
        let maximoPermito = (180 * 10) / 100;

        if(faltas >= maximoPermito)
            {
                resultado += "<b style=`color:red`>Reprobado master por inasistencia </b><br><br>";
            }
        else 
            {
                resultado += "<br><br>";
            }
        document.write(resultado);
    }