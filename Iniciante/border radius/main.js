let radius = {top_left: "", top_right: "", bottom_left: "", bottom_right: ""};
const debug = 0;

const p_top_left = document.querySelector("#top_left_value");
const p_top_right = document.querySelector("#top_right_value");
const p_bottom_left = document.querySelector("#bottom_left_value");
const p_bottom_right = document.querySelector("#bottom_right_value");


getValues();
showValues();


function getValues(){
    let Csselement = getComputedStyle(document.querySelector("#box"));

    radius.top_left = Csselement.borderTopLeftRadius;
    radius.top_right = Csselement.borderTopRightRadius;
    radius.bottom_left = Csselement.borderBottomLeftRadius;
    radius.bottom_right = Csselement.borderBottomRightRadius;
    
    if(debug){
        console.log("getValues()")
        console.log(radius);
    }
}


function showValues(){
    let text = document.getElementById("csstext");

    p_top_left.textContent = "Top Left Radius: " + radius.top_left;
    p_top_right.textContent = "Top Right Radius: " + radius.top_right;
    p_bottom_left.textContent = "Bottom Left Radius: " + radius.bottom_left;
    p_bottom_right.textContent = "Bottom Right Radius: " + radius.bottom_right;

    text.value = `#box {
    border-top-left-radius: ${radius.top_left};
    border-top-right-radius: ${radius.top_right}; 
    border-bottom-left-radius: ${radius.bottom_left}; 
    border-bottom-right-radius: ${radius.bottom_right}; 
    background: #73AD21; 
    padding: 20px; 
    width: 200px; 
    height: 150px;
}`

    if(debug){
        console.log("ShowValues()")
        console.log("Top Left Radius: " + radius.top_left + " | Top Right Radius: " + radius.top_right + " | Bottom Left Radius: " + radius.bottom_left + " | Bottom Right Radius: " + radius.bottom_right);
    }
}


function changeValues(form){
    let tl = form.tl.value, tr = form.tr.value, bl = form.bl.value, br = form.br.value;
    radius.top_left = tl;
    radius.top_right = tr;
    radius.bottom_left = bl;
    radius.bottom_right = br;

    setValues();
    getValues();
    showValues();

    if(debug){
        console.log("changeValues()");
        console.log("tl: " + tl + " | tr: " + tr + " | bl: " + bl + " | br: " + br);
    }
}


function setValues(){
    let element = document.querySelector("#box");

    element.style.borderTopLeftRadius = radius.top_left;
    element.style.borderTopRightRadius = radius.top_right;
    element.style.borderBottomLeftRadius = radius.bottom_left;
    element.style.borderBottomRightRadius = radius.bottom_right;

    if(debug){
        console.log("setValues()");
    }
}

function copyText(){
    let text = document.getElementById("csstext");

    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand('Copy');
}