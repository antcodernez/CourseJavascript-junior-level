// Metodos de console.

// .clear()
console.clear(); //limpiara la consola

// .assert()
console.assert(5 > 11); // Mandara mensaje de error en consola

// .error()
console.error("¿Qué hiciste we?"); //mensaje de error definido por mi

// .info()
console.info("Vamos tu puedes programador"); //Mensaje definido por mi

// .table()
const primeroA = 
    {
        ingles : ["Ok", "pedro"],
        frances : ["Nice"]
    }
console.table(primeroA);

// .warn()
console.warn("Peluto") // Mensaje warn definido por mi

// .dir()

console.dir(primeroA.ingles);

// Metodos de conteo

// .count()

console.count(); // cuenta el numero de veces que se usa
console.count(); 

// .countReset();

console.countReset() // Reinicia el -count()
console.count(); // ver el reseteo

// Métodos de agrupacion

// .group();

console.group("pera"); // creo un grupo abierto en la consola

// .groupEnd();

console.groupEnd(); // cierra un grupo abierto

// .groupCollapsed();

console.groupCollapsed("Ase reje aja deje");

// Metodos de temporización 

// .time();

console.time(); // inicia un temporizador

// .timeLog();

console.timeLog(); // muestra el tiempo desde inicie el temporizador  

// .timeEnd();

console.timeEnd(); // finaliza un temporizador

// editar texto de la consola

console.log("%cSeras el proxima gran founder", "color: red;")