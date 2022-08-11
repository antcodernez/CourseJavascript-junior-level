class Celular
    {
        constructor(color, peso, rdp, rdc, ram)
            {
                this.color = color;
                this.peso = peso;
                this.resolucionDePantalla = rdp;
                this.resolucionDeCamara = rdc;
                this.ram = ram;
                this.encendido = false;
            };
        botonApagadoEncendido()
            {
                if(this.encendido == false)
                    {
                        alert("celular prendido");
                        this.encendido = true;
                    }
                else
                    {
                        alert("celular apagado");
                    }
            }
        reiniciar()
            {
                if (this.encendido == true)
                    {
                        alert("reiniciando celular");
                    }
                else
                    {
                        alert("El celular está apagado");
                    }
            }          
        tomarFotos()
            {
                alert(`Foto tomada en una resolución de: ${this.resolucionDeCamara}`);
            } 
        grabarVideos()
            {
                alert(`grabando video en:${this.resolucionDeCamara}`);
            }
        mostrarInfo()
            {
                return `
                <br>
                Color: <b>${this.color}</b><br>
                Peso: <b>${this.peso}</b><br>
                Pantalla: <b>${this.resolucionDePantalla}</b><br>
                Resolución de Cámara: <b>${this.resolucionDeCamara}</b><br>
                Memoria Ram: <b>${this.ram}</b><br>`;
            }
    };

const celular1 = new Celular ("rojo", "150g", "5'", "hd", "1GB");

const celular2 = new Celular ("negro", "155g", "5.4'", "full hd", "2GB");


const celular3 = new Celular ("blanco", "160g", "5.9'", "full hd", "2GB");

class CelularALtaGamma extends Celular
    {
        constructor(color, peso, rdp, rdc, ram, rdce,)
            {
                super(color, peso, rdp, rdc, ram);
                this.resolucionDeCamaraExtra = rdce;
            }
        grabarVideoLento()
            {
                alert("Estás grabando en camara lenta")
            }
        reconocimentoFacial()
            {
                alert("vamos a iniciar un reconocimiento facial");
            }
        infoAltaGamma()
            {
                return " <br> Celular de alta gamma"+ this.mostrarInfo() + `Resolución de cámara trasera: <b>${this.resolucionDeCamaraExtra}</b> <br>`
            }
    }
document.write(celular1.mostrarInfo());
document.write(celular2.mostrarInfo());
document.write(celular3.mostrarInfo());

const celular1GammaAlta = new CelularALtaGamma ("Azul", "130gr", "5.2'", "4k", "4GB", "full HD");
const celular2GammaAlta = new CelularALtaGamma ("Gris", "142gr", "6'", "4k", "4GB", "HD");

document.write(celular1GammaAlta.infoAltaGamma());
document.write(celular2GammaAlta.infoAltaGamma());