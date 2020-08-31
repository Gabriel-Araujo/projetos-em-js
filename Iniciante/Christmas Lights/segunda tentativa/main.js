let lightStatus = 1, allLights;
lights = ["#blue", "#red", "#green", "#yellow"];
blue_lights = [];
red_lights = [];
green_lights = [];
yellow_lights = [];


function turnOnOff(){
    getLights();
    // Se as luzes estiverem ligadas
    if(lightStatus){
        for(var index = 0; index < allLights.length; index++){
            allLights.item(index).style.animation = "none";
        }
        lightStatus = 0;
        document.getElementById("turnOnOff-buttom").value = "On"
    }
    else{
        for(var index = 0; index < allLights.length; index++){
            allLights.item(index).style.animation = "";
        }
        lightStatus = 1;
        document.getElementById("turnOnOff-buttom").value = "Off"
    }

}


function getLights(){
    allLights = document.querySelectorAll(".light");
    let _lights = document.querySelectorAll("#blue");
    for(var item = 0; item < _lights.length; item++){
        blue_lights[item] = _lights[item];
    }

    _lights = document.querySelectorAll("#red");
    for(var item = 0; item < _lights.length; item++){
        red_lights[item] = _lights[item];
    }
    
    _lights = document.querySelectorAll("#green");
    for(var item = 0; item < _lights.length; item++){
        green_lights[item] = _lights[item];
    }
    
    _lights = document.querySelectorAll("#yellow");
    for(var item = 0; item < _lights.length; item++){
        yellow_lights[item] = _lights[item];
    }

}