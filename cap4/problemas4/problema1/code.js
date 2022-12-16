let eleccionOperacion = prompt(`Ingresa la operacion de quieres realizar \n 1 ---- suma \n 2 ---- resta \n 3 ---- multiplicacion \n 4 ---- division \n 5 ---- potencia \n 6 ---- raiz cuadrada \n 7 ---- raiz cubica`);

    switch(eleccionOperacion)
        {
            case `1` :
                let primerNumero = prompt("Ingrese el valor de su primer numero: ");
                let segundoNumero = prompt("Ingrese el valor de su segundo numero: ");
                
                primerNumero = parseFloat(primerNumero);
                segundoNumero = parseFloat(segundoNumero);

                let result = primerNumero + segundoNumero;

                alert(`La suma de sus numeros es: ${result}`);
            break;

            case `2` :
                let num1 = prompt("Ingrese el valor de su primer numero: ");
                let num2 = prompt("Ingrese el valor de su segundo numero: ");
                
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                
                let resultResta = num1 - num2;

                alert(`La resta de tus dos numeros es: ${resultResta}`);
            break;                

            case `3` :
                let nums1 = prompt("Ingrese el valor de su primer numero: ");
                let nums2 = prompt("Ingrese el valor de su segundo numero: ");
                
                nums1 = parseFloat(nums1);
                nums2 = parseFloat(nums2);
                
                let multResult = nums1 * nums2;

                alert(`La multiplicacion de sus dos numeros es: ${multResult}`);
            break;

            case `4` :
                let num1_1 = prompt("Ingrese el valor de su primer numero: ");
                let num2_2 = prompt("Ingrese el valor de su segundo numero: ");

                num1_1 = parseFloat(num1_1);
                num2_2 = parseFloat(num2_2);

                let resultDiv = num1_1 / num2_2 ;
                
                alert(`La división de sus dos numeros es: ${resultDiv}`);
            break;

            case `5` :
                let potencia = prompt("Ingrese el numero que quiere potenciar: ");
                
                potencia = parseFloat(potencia);

                let resultPotencia = potencia * potencia;

                alert(`La potencia de su numero es: ${resultPotencia}`);
            break;

            case `6` :
                let raiz = prompt("Ingrese el numero que desea saber su raíz: ");
        
                raiz = parseFloat(raiz);
                raiz = Math.sqrt(raiz);

                alert(`La raíz cuadrada de tu numero es: ${raiz}`);
            break;

            case `7` :
                let raizCubica = prompt(`Ingrese el numero para saber su raiz cubica: `);

                raizCubica = parseFloat(raizCubica);
                raizCubica = Math.cbrt(raizCubica);

                alert(`La raíz cubica de su numero es: ${raizCubica}`);
            break;

            default :
                alert("Ingresa un valor valido por favor we nmms");
            break;
        }        
    
