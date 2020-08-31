let valorDoDisplay, valorAntigo, valorAtual, botaoPrecionado, operacaoSelecionada;
let operacoes = ['+', '-', '*', '/']

valorDoDisplay = document.getElementById('numero-do-display');

function main(valor){

    buttonListener(valor);

    if(verificarOperacoes()){
        guardarValor();
        valorDoDisplay.innerHTML = 0;
        operacaoSelecionada = botaoPrecionado;
    }
    else{
        concatenarNumero();
    }

    if(botaoPrecionado == "="){
        console.log(operacaoSelecionada);
        executarOperacao();
    }

    if(botaoPrecionado == "C"){
        valorAtual = 0;
        valorDoDisplay.textContent = valorAtual;
        console.log(valorAntigo);
    }
    if(botaoPrecionado == "AC"){
        valorAntigo = 0;
        valorAtual = 0;
        valorDoDisplay.textContent = valorAtual;
    }

}

function buttonListener(valor){
    botaoPrecionado = valor;
    console.log("ButtonListener() diz, Botão apertado: " + valor);
}


function verificarOperacoes(){
    for(index in operacoes){
        if (botaoPrecionado == operacoes[index]) {
            console.log("VerificarOperação() diz, Operação selecionada: " + botaoPrecionado);
            
            
            return 1;
        }
    }
}

function concatenarNumero(){
    let num = parseInt(valorDoDisplay.innerHTML);
    
    if(num == 0){
        // console.log("ConcatenarNumero diz, numero: " + botaoPrecionado);
        valorDoDisplay.textContent = botaoPrecionado;
        valorAtual = valorDoDisplay.innerHTML;
    }
    else{
        valorDoDisplay.textContent += botaoPrecionado;
        valorAtual = valorDoDisplay.innerHTML;
    }

    if(valorDoDisplay.innerHTML.length >= 9){
        alert("Não é possível utilizar números com mais de 8 digitos");
        valorDoDisplay.textContent = "0";
        valorAtual = valorDoDisplay.innerHTML;
    }
}


function guardarValor(){
    valorAntigo = valorAtual;
}

function executarOperacao() {
    if(operacaoSelecionada == "+"){
        valorAtual = parseInt(valorAntigo) + parseInt(valorAtual);
        valorDoDisplay.textContent = valorAtual;
    }
    if(operacaoSelecionada == "-"){
        valorAtual = parseInt(valorAntigo) - parseInt(valorAtual);
        valorDoDisplay.textContent = valorAtual;
    }
    if(operacaoSelecionada == "*"){
        valorAtual = parseInt(valorAntigo) * parseInt(valorAtual);
        valorDoDisplay.textContent = valorAtual;
    }
    if(operacaoSelecionada == "/"){
        valorAtual = parseInt(valorAntigo) / parseInt(valorAtual);
        valorDoDisplay.textContent = valorAtual;
    }
}