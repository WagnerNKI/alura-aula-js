var titulo = document.querySelector(".titulo");

titulo.textContent = "Tabela Nutri";

var pacientes = document.querySelectorAll(".paciente");


for (var pacientesCount = 0;pacientesCount < pacientes.length; pacientesCount++) {
    
    var paciente = pacientes[pacientesCount]

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (!pesoEhValido) {

        tdImc.textContent = "peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido")

    }

    if (!alturaEhValida) {

        tdImc.textContent = "altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido")

    }


    if (pesoEhValido && alturaEhValida) {

        var imc = calculaImc (peso, altura);
        tdImc.textContent = imc;

    } else {
        tdImc.textContent = "Peso e/ou altura inválidos!"
    }
}

function calculaImc(peso,altura){

    var imc = 0
    imc = peso / (altura * altura);
 
    return imc.toFixed(2);
}

function validaPeso (peso){

    if(peso > 0 && peso <500){
        return true;
    }else{
        return false;
    }

}

function validaAltura (altura){

    if (altura > 0 && altura <3.00){
        return true;
    }else{
        return false;
    }
}