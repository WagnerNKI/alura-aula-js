var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {

    event.preventDefault();
    console.log("fui clicado");

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {

        exibeMensagemDeErro(erros);
        
        return;
    }

    adicionaPacienteNaTabela(paciente)

    form.reset();

    mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML ="";

})



function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTd(dado, classe) {

    var td = document.createElement("td");

    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.peso.length == 0) {
        erros.push("Peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("Altura não pode ser em branco");
    }

    if (paciente.nome.length == 0) {
        erros.push("Nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("Gordura não pode ser em branco"); 
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso Inválido")
    }

    return erros;
}

function exibeMensagemDeErro(erros) {

    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "";

    erros.forEach(function (erro) {

        var li = document.createElement("li");

        li.textContent = erro;

        mensagemErro.appendChild(li);
    })


}

function adicionaPacienteNaTabela(paciente){

    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
