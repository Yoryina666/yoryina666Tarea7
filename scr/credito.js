function calcular() {
    var ms = document.getElementById("ms").value;
    var tm = document.getElementById("tm").value;
    var p = document.getElementById("p").value;
    var resultado;
    var snm = document.getElementById("snm").value;
    let salariominimoRequerido = document.getElementById("salarioMinimoRequerido");
    resultado = ms * (tm / 100) * Math.pow(1 + (tm / 100), p) / Math.pow(1 + (tm  / 100), p) * - 1;
    var pm = document.getElementById("pagoMensual");
    var montoSuficiente = document.getElementById("montoSalarioSuficienteCredito");

    pm.value = resultado;
    salariominimoRequerido.value = pm.value / 0.40;

    if (snm >= salariominimoRequerido) {
        montoSuficiente.innerHTML = "Monto de salario suficiente para el crédito";
    }
    else {
        montoSuficiente.innerHTML = "Monto de salario insuficiente";
    }

    var fechaNac = document.getElementById("fechaN").value;
    let hoy = new Date()
    let fechaNacimiento = new Date(fechaNac)
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
        edad--
    }

    if (edad >= 22 && edad < 55) {
        document.getElementById("autorizarEdad").innerHTML = "Cliente con edad suficiente para crédito";
    }
    else {
        document.getElementById("autorizarEdad").innerHTML = "Cliente no califica para crédito por edad";
    }

    var porcentajeFinanciar;
    var valorVivienda = document.getElementById("valorV").value;
    porcentajeFinanciar = valorVivienda / ms;
    document.getElementById("percentageToFinance").innerHTML = porcentajeFinanciar;
    
}




