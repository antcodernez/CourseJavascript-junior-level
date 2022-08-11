class App 
    {
        constructor(descargas, puntuación, peso)
            {
                this.descargas = descargas;
                this.puntuación = puntuación;
                this.peso = peso;
                this.iniciada = false;
                this.instalada = false;
            }
        abrirApp()
            {
                if (this.iniciada == false && this.instalada == true)
                    {
                        this.iniciada = true;
                        alert("alert encendida");
                    }
            }
        cerrarApp()
            {
                if (this.iniciada == true && this.instalarApp == true)
                    {
                        this.iniciada = false;
                        alert("App cerrada");
                    }
            }
        instalarApp ()
            {
                if (this.instalada == false)
                    {
                        this.instalada = true;
                        alert("App instalada correctamente");
                        
                    }
            }
        desinstalarApp()
            {
                if (this.instalada == true)
                    {
                        this.instalada = false;
                        alert("App desinstalada correctamente"); 
                    }
            }
        appInfo()
            {
                return `
                Descargas: <b>${this.descargas}</b> <br>
                Puntuación:<b> ${this.puntuación}</b><br>
                Peso: <b>${this.peso} </b> <br><br>`
            }
    }

const app = new App ("16.000", "5 estrellas", "900mb");
const app2 = new App ("26.000", "2.1 estrellas", "600mb");
const app3 = new App ("46.000", "4.9 estrellas", "500mb");
const app4 = new App ("56.000", "4.3 estrellas", "400mb");
const app5 = new App ("67.000", "4 estrellas", "200mb");
const app6 = new App ("1.000", "3.2 estrellas", "100mb");
const app7 = new App ("24.000", "4.7 estrellas", "1GB");

document.write(app.appInfo());
document.write(app2.appInfo());
document.write(app3.appInfo());
document.write(app4.appInfo());
document.write(app5.appInfo());
document.write(app6.appInfo());
document.write(app7.appInfo());