const suma = (num1, num2) =>
    {
        return parseFloat(num1) + parseFloat(num2);
    }
const resta = (num1, num2) =>
    {
        return parseFloat(num1) - parseFloat(num2);
    }
const multiplicacion = (num1, num2) =>
    {
        return parseFloat(num1) * parseFloat(num2);
    }
const division = (num1, num2) =>
    {
        return parseFloat(num1) / parseFloat(num2);
    }

alert("¿que operacion quieres realizar?");
let operacion = prompt(`1:suma, 
2:resta, 
3:división, 
4:multiplicación`); 

if(operacion == 1)
    {
        let numero1 = prompt("primer numero para sumar");
        let numero2 = prompt("segundo numero para sumar");
        
        let result = suma(numero1, numero2);

        document.write(`<h1> resultado : ${result}</h1>`);
    }
else if (operacion == 2)
    {
        let numero1 = prompt("primer numero para restar");
        let numero2 = prompt("segundo numero para restar");
        
        let result = resta(numero1, numero2);

        document.write(`<h1> resultado : ${result}</h1>`);
    }
else if (operacion == 3)
    {
        let numero1 = prompt("primer numero para dividir");
        let numero2 = prompt("segundo numero para dividir");
        
        let result = division(numero1, numero2);

        document.write(`<h1> resultado : ${result}</h1>`);
    }
else if (operacion == 4)
    {
        let numero1 = prompt("primer numero para multiplicar");
        let numero2 = prompt("segundo numero para multiplicar");
        
        let result = multiplicacion(numero1, numero2);

        document.write(`<h1> resultado : ${result}</h1>`);
    }  
else
    {
        alert("Valor no valido pelotudo");
    }