let teacherName;
let students;
let eleccion;
const materiasEscuela = 
    {
        ingles : ["Profesor: Maximo", "Jose Manuel", "Pedrito Picapiedra", "JoSex", "María", "Antonio", "Koalita", "Pandita", "Koalita", "Anita", "Cofla"],

        algebra: ["Profesor: Pedro", "Fernanda", "María", "Jesus Antonio", "Jesus", "Obed", "El fantasma Wences", "El diablo", "Cofla"],
        
        programacion : ["Profesor: Jesus", "El fantasma Wences", "Cofla", "El diablo", "Jose Manuel", "Jesus Antonio"],
        
        redes: ["Profesor: Gonzalo", "Jesus", "Jose", "Maximo", "María", "JoSex", "Jesus Antonio", "Obed"]
    }
function buscarProfe(buscandoProfe)
    {
        let toString = buscandoProfe.join(",");
        let indexProfe = toString.indexOf("Profesor"); 
        
        return buscandoProfe[indexProfe];
    }
function listarAlumnos(listaAlumnos)
    {
        listaAlumnos.shift();
        
        return listaAlumnos;
    }
function writeResult(teacherName, students)
    {
        let resultTeacher = document.getElementById("yourClases");
        let resultStudents = document.getElementById("studentsName");
        resultTeacher.innerText = `El profesor de ${eleccion} se llama ${teacherName}
        `;
        results = students.join(" \n Alumno: " )
        resultStudents.innerText = `Alumno: ${results}`;
    }
function knowClass ()
    {
        eleccion = prompt(`
        materias disponibles
        Inglés
        Álgebra
        Programación
        Redes
        Ingresa el nombre de la materia para obtener más información: `);
        switch(eleccion)
            {
                case `ingles` : case `Inglés`: case `INGLES` : case  `inglés` : case `INGLÉS` :
                    const listEnglish = materiasEscuela.ingles;
                
                    teacherName = buscarProfe(listEnglish);
                    students = listarAlumnos(listEnglish);
                    
                    writeResult(teacherName, students);
                break;

                case `algebra` : case `Algebra` : case `Álgebra` : case `ALGEBRA` : case `ÁLGEBRA` :
                    const listAlgebra = materiasEscuela.algebra;
            
                    teacherName = buscarProfe(listAlgebra);
                    students = listarAlumnos(listAlgebra);
                    
                    writeResult(teacherName, students);
                break;
                
                case `programacion` : case `programación` :  case `Programacion` : case `Programación` : case `PROGRAMACION ` : case `PROGRAMACIÓN ` :
                    const listProgramacion = materiasEscuela.programacion;
                
                    teacherName = buscarProfe(listProgramacion);
                    students = listarAlumnos(listProgramacion);

                    writeResult(teacherName, students);
                break;
                
                case `redes` : case `Redes` : case `REDES` : 
                    const listRedes = materiasEscuela.redes;

                    teacherName = buscarProfe(listRedes); 
                    students = listarAlumnos(listRedes);
                
                    writeResult(teacherName, students);
                break;
                
                default :
                    alert("Ingreso un valor no valido D:"); 
                break;
            }
    }
function inscripcion()
    {
        let writeResult = document.getElementById("inscritas-clases");

        if (materiasEscuela.algebra.includes("Cofla") == true)
            {
                let ar = "Estas inscrito a algebra: Cofla";
                
                if (materiasEscuela.ingles.includes("Cofla") == true)
                    {
                        let ir = "Estas inscrito a ingles: Cofla";

                        if (materiasEscuela.programacion.includes("Cofla") == true)
                            {
                                let pr = "Estas inscrito a programacion: Cofla";

                                if (materiasEscuela.redes.includes("Cofla") !== true)
                                    {
                                        let rr = "estás inscrito a redes: Cofla";

                                        writeResult.innerText = `${ar} 
                                        ${ir}
                                        ${pr}
                                        ${rr}`;
                                    }
                            }
                    }
            }
        
    }