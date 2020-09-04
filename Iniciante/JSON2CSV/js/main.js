var funcao = 1; // 1 = JSON para CSV | 0 = CSV para JSON
const clearButton = document.getElementById("clearbutton");



clearButton.addEventListener('click', function(){
    clearTextArea();
}, false);

function showJSON2CSV(){
    let title = document.getElementById("title");
    let box1title = document.getElementById("box1title");
    let box2title = document.getElementById("box2title");

    title.textContent = "Conversor JSON para CSV";
    box1title.textContent = "Texto em JSON";
    box2title.textContent = "Texto traduzido para o CSV";

    document.getElementById("jsonbutton").classList.add("active");
    document.getElementById("csvbutton").classList.remove("active");

    funcao = 1;
}


function showCSV2JSON(){
    let title = document.getElementById("title");
    let box1title = document.getElementById("box1title");
    let box2title = document.getElementById("box2title");

    title.textContent = "Conversor CSV para JSON";
    box1title.textContent = "Texto em CSV";
    box2title.textContent = "Texto traduzido para o JSON"

    document.getElementById("csvbutton").classList.add("active");
    document.getElementById("jsonbutton").classList.remove("active");

    funcao = 0;
}


function clearTextArea(){
    document.getElementById("sendbox").value = '';
    document.getElementById("receiverbox").value = '';
}


function copyText(){
    let text = document.getElementById("receiverbox");
    text.select();
    document.execCommand("Copy");
}

