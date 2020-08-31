function main(form) {
    var binario = form.binary.value;
    console.log("Tamanho do número binário = " + binario.length);

    if(binario.length > 8) alert("Só é possível até 8 digitos.");
    else {
        var result = transformar(binario);
        if(result) document.getElementById("demo").innerHTML = "O valor em decimal é " + result;
    }
    
}


function transformar(numero){
    let num = numero;
    let show = 1;
    let resultado = 0;

    for(casa in num){
        if(verificarBinario(num[casa])){
            resultado += num[casa] * (2 ** (num.length-1-casa));
        }
        else
        {
            alert("Não foi digitado um numero binario.");
            show = 0;
            break;
        }
    }
    if(show) return resultado;
}


function verificarBinario(number) {
    if(number == 1 || number == 0) return 1; else return 0;
}