const input = document.getElementById("sendbox")
let outputValue;
let titleOutputValues;


function converter(){
    if(funcao){
        try{
            JSON2CSV();
            toOutput();
        } catch(error){
            alert("Aconteceu um erro na conversão. Possiveis problemas:\n - Caixa de texto vazia;\n - JSON digitado incorretamente;\n - Não foi digitado um texto no formato JSON.");
            console.log(error);
        }
    }
    else{
        /* to do CSV2JSON */
        alert("To DO.");
    }
}
function JSON2CSV(){
    let inputValue = input.value;
    let inputObject = JSON.parse(inputValue); // JSon.parse() retorna um objeto no mesmo formato do json.
    outputValue = undefined;

    for(item in inputObject){
        if(!outputValue){
            outputValue = inputObject[item];
            titleOutputValues = item;
        }
        else{
            outputValue += ", " + inputObject[item];
            titleOutputValues += ", " + item;
        }
    }
}


function toOutput(){
    document.getElementById("receiverbox").value = titleOutputValues + "\n" + outputValue;
}