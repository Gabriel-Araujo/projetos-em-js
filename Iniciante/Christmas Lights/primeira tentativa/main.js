let lights = []
let lights_status = 0;

function blink(){
    if(lights_status){
        
    }
}


function turnOnOff(){
    getLights();
    if(lights_status){
        for(item in lights){
            lights[item].style.fill = "#688b71";
        }
        changeLightStatus();
    }
    else{
        lights[1].style.fill = "#3a7599";
        lights[2].style.fill = "#3a9948";
        lights[3].style.fill = "#993a3a";
        lights[4].style.fill = "#3a7599";
        lights[5].style.fill = "#3a9948";
        lights[6].style.fill = "#993a3a";
        lights[7].style.fill = "#3a7599";
        changeLightStatus();
    }
}


function getLights(){
    for(var light = 1; light <= 7; light++){
        lights[light] = document.getElementById(`light-${light}`)
    }
}


function changeLightStatus(){
    if(lights_status){
        lights_status = 0;
    }
    else{
        lights_status = 1;
    }
}