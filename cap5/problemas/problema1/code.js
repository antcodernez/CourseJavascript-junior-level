let materias = 
    {
        fisica : [60 , 6, 4, "Fisica"],
        matematicas : [84 , 8, 2, "Matematicas"],
        logica : [92, 8, 4, "Logica"],
        quimica : [96, 8, 4, "Química"],
        calculo : [91, 6, 3, "Calculo"],
        programacion : [79 , 7, 4, "Programacion"],
        biologia : [ 75, 9, 2, "Biologia"],
        algebra : [ 98, 9, 1, "Algebra"],
        datos : [ 100, 10, 4, "Datos"]
    }

const aprobo = () =>
    {
        for (materia in materias)
            {
                let asistencias = materias[materia][0];
                let promedio = materias[materia][1];
                let trabajos = materias[materia][2];

                console.log(`${materias[materia][3]} : `);

                if (asistencias >= 90)
                    {
                        console.log("%c Asistencias reglamentarias", "color:green");
                    }
                else 
                    {
                        console.log("%c Faltaste demasiado a clase we nmms", "color:red");
                    }
                
                if (promedio >= 7)
                    {
                        console.log("%c Promedio aprobatorio", "color:green");
                    }
                else 
                    {
                        console.log("%c Promedio no aprobatorio", "color:red");
                    }
                
                if (trabajos >= 3)
                    {
                        console.log("%c Trabajos practicos en orden", "color:green");
                    }
                else 
                    {
                        console.log("%c Faltan trabajos practicos", "color:red");
                    }
            }
    }

aprobo();