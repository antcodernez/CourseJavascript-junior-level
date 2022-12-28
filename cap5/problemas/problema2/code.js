let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let trabajoPractico = "100 minutos trabajos practicos";
let homework = "30 minutos";
let descanso = "10 minutos";

console.log("Tareas");

for (i = 0; i <= 14; i++)
    {
        if (i == 0)
            {
                console.groupCollapsed("Semana 1");
                i++;
            }
        console.group(`Día; ${i}`);
        console.log(trabajo);
        console.log(descanso);
        console.log(estudio);
        console.log(trabajoPractico);
        console.log(homework);
        console.groupEnd();
        
        if (i == 7)
            {
                console.groupEnd();
                console.groupCollapsed("Semana 2")
            }
    }