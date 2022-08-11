class Animal 
    {
        // constructor es un método para iniciar mi clase
        constructor(especie, edad, color, sound)
            {
                this.especie = especie;
                this.edad = edad;
                this.color = color;
                this.sound = sound;
                this.informacion = `soy ${this.especie}, vivo ${this.edad} años y soy de color ${this.color}.
                mi sonido se llama ${sound}`;
            }
            verInformacion = () =>
                {
                    document.write(`Hola ${this.informacion}` + `<br> <br>`);
                };
            ladrar()
                {
                    if (this.especie == `perro` || this.especie == `PERRO`)
                        {
                            document.write("¡Waw, waw! <br>");
                        }
                    else 
                        {
                            document.write("No puede ladrar porque es un " + this.especie + `<br>`);
                        }
                }
    }

let perro = new Animal("perro", "15", "negro", "ladro");  
let gato = new Animal("gato", "10", "blanco", "maullo");
let loro = new Animal("loro", "60", "verde", "cotorreo");

//perro.verInformacion();
//gato.verInformacion();
//loro.verInformacion();

// desestructure mis objeto con base a lo que aprendí en ES6 xd

// let {informacion} = perro;
// document.write(`${informacion}` + "<br> <br>");  

//perro.ladrar();
//gato.ladrar();
//loro.ladrar();

//Herencia

class dog extends Animal
    {
        constructor(especie, edad, color, sound, raza)
            {
                super(especie, edad, color, sound); 
                this.raza = null;
            };
        static sonidoPerruno()
            {
                alert("¡wow wow!")
            }
        set modifyRaza(newName)
            {
                this.raza = newName;
            }
        get getRaza()
            {
                return this.raza;
            }
    };

// let doddyGog = new dog("perro", "15", "pimienta", "ladrido", "schnauzer miniatura");
//doddyGog.verInformacion();

// Métodos estáticos

// dog.sonidoPerruno(); aplicando un método estatico

// método accesores

const snoopy = new dog ("perro", 5, "pimienta", "ladra", "schnauzer");

snoopy.modifyRaza = `Pedro`;
document.write(snoopy.getRaza);