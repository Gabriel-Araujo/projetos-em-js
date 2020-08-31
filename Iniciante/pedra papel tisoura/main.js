const jogadas_disponiveis_pro_pc = ["paper", "scissor", "rock", "paper", "rock", "scissor", "rock", "scissor", "paper",];
const resultado = document.getElementById("resultado");

function jogada(escolha){
    let escolhaDoJogador = escolha;
    let escolhaDoPc = jogadaDoPc();
    
    mostrarJogadoDoPc(escolhaDoPc);
    comparacaoDeJogadas(escolhaDoJogador, escolhaDoPc);

    console.log(escolhaDoJogador);
    console.log(escolhaDoPc);

}

function jogadaDoPc(){
    let multiplicador = jogadas_disponiveis_pro_pc.length;
    let indice = Math.floor(Math.random() * multiplicador);

    return jogadas_disponiveis_pro_pc[indice];
}


function comparacaoDeJogadas(jogador, pc){
    if(jogador == pc){
        resultado.textContent = "Empate";
    } 
    else if(jogador == "paper" && pc == "rock"){
        resultado.textContent = "Você ganhou!! Parabens.";
    }
    else if(jogador == "rock" && pc == "scissor"){
        resultado.textContent = "Você ganhou!! Parabens.";
    }
    else if(jogador == "scissor" && pc == "paper"){
        resultado.textContent = "Você ganhou!! Parabens.";
    }
    else {
        resultado.textContent = "Você perdeu infelizmente, mas você pode jogar novamente.";
    }
}


function mostrarJogadoDoPc(jogada){
    if(jogada == "paper"){
        document.getElementById("computer-choice").src = "images/paper.png";
    }
    else if(jogada == "rock"){
        document.getElementById("computer-choice").src = "images/rock.png";
    }
    else{
        document.getElementById("computer-choice").src = "images/scissor.png";
    }
}