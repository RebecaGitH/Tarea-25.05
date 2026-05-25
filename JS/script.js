function calcularAhorro() {
    let inputMeses = document.getElementById("meses");
    let resultadoDiv = document.getElementById("resultadoFibonacci");
    let meses = parseInt(inputMeses.value);

    if (isNaN(meses) || meses <= 0) {
        resultadoDiv.innerHTML = "<span style='color:red;'>⚠️ Por favor, ingrese un número de meses válido.</span>";
        return;
    }
    
    if (meses > 40) { 
        resultadoDiv.innerHTML = "⚠️ Por seguridad, el máximo son 40 meses.";
        return;
    }

    let a = 0;
    let b = 1;
    let c;
    let total = 0;
    let mensaje = "<strong>Proyección de Ahorro:</strong><br><br>";

    for (let i = 1; i <= meses; i++) {
        mensaje += "📅 Mes " + i + ": <span style='color:#d881ac;'>Bs. " + b + "</span><br>";
        total += b;
        
        c = a + b;
        a = b;
        b = c;
    }

    mensaje += "<hr><strong> Ahorro Total Final: Bs. " + total + "</strong>";
    resultadoDiv.innerHTML = mensaje; 
}

function validarSeguridad() {
    let inputClave = document.getElementById("clave");
    let resultadoDiv = document.getElementById("resultadoPrimos");
    let numero = parseInt(inputClave.value);
    let contador = 0;

    if (isNaN(numero) || numero < 1) {
        resultadoDiv.innerHTML = "<span style='color:red;'>⚠️ Ingrese un código numérico positivo.</span>";
        return;
    }

    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            contador++;
        }
    }

    if (contador == 2) {
        resultadoDiv.innerHTML = " <strong style='color:#28a745;'>CÓDIGO SEGURO:</strong> " + numero + " es un número primo. Clave válida.";
    } else {
        resultadoDiv.innerHTML = " <strong style='color:#dc3545;'>CÓDIGO INSEGURO:</strong> " + numero + " no es primo. Intente con otro código.";
    }
}