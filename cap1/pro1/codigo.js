// Dalto solution

// precios
const heladoAgua = 0.6;
const heladoDeCrema = 1;    
const heladoHeladix = 1.6;
const heladoHeladovich = 1.7;
const heladoHelardo = 1.8;
const potecitoConChispas = 2.9;
const boteDeUnCuarto =  2.9; 

// let dineroPedro = prompt("¿Cuánto dinero tienes?");
// let dineroRoberto = prompt("¿Cuánto dinero tienes?");
let dineroCofla = prompt("¿Cuánto dinero tienes?");
dineroCofla = Number(dineroCofla);
if (dineroCofla >= 0.6 && dineroCofla < 1)
    {   
        let cambio = dineroCofla - heladoAgua;
        let cambioFinal = cambio.toFixed(1);  
        alert(`Comprate el helado de agua y tu cambio es de ${cambioFinal} usd`);     
    }
else if (dineroCofla >= 1 && dineroCofla < 1.6)
    {
        let cambio = dineroCofla - heladoDeCrema;
        
        if (cambio == 0)
            {
                let cambioFinal = "No hay cambio que entregar"
                alert(`Comprate el helado de crema, ${cambioFinal}`);
            }
        else if (cambio !== 0)
            {
                let cambioFinal = cambio.toFixed(1);
                alert(`Comprate el helado de crema y tu cambio será de, ${cambioFinal} usd`);
            }
    }     
else if (dineroCofla >= 1.6 && dineroCofla < 1.7)
    {
        let cambio = dineroCofla - heladoHeladix;
        let cambioFinal = cambio.toFixed(1);  
        alert(`Comprate el helado de la marca heladix y tu cambio es de ${cambioFinal} usd`);
    }
else if (dineroCofla >= 1.7 && dineroCofla < 1.8)
    {
        let cambio = dineroCofla - heladoHeladovich;
        let cambioFinal = cambio.toFixed(1);  
        alert(`Comprate el helado de la marca heladovich y tu cambio es de ${cambioFinal} usd`);
    }
else if (dineroCofla >= 1.8 && dineroCofla < 2.9)
    {
        let cambio = dineroCofla - heladoHelardo;
        let cambioFinal = cambio.toFixed(1);  
        alert(`Comprate el helado de la marca helardo y tu cambio es de ${cambioFinal} usd`);
    }
else if (dineroCofla >= 2.9)
    {
        let cambio = dineroCofla - 2.9;
        let cambioFinal = cambio.toFixed(1);  
        alert(`Comprate un bote de un cuarto o un potecito con chispitas y tu cambio sería de ${cambioFinal} usd`);
    }
else
    {
        alert("No te alcanza para ningun helado trabaja pobre de mierda");
    }