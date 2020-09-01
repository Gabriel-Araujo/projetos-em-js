const _people = {
    "joao": ["João", "images/avatar-1.png", "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species."],
    "carlos": ["Carlos", "images/avatar-2.png", "Busey ipsum dolor sit amet. Have you urinated? Have you drained your bladder? Are you free? Because if you haven't it will only come out later. I'm giving you some information that your bodily fluids may penetrate your clothing fibre's without warning.It's OK to get Rib-grease on your face, because you're allowing people to see that you're proud of these ribs."],
    "jessica": ["Jessica", "images/avatar-3.png", "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
}
let $person;
let $oldOne;

function runAll(person){
    $listener(person);
    changePerson();
    changeActive();
}

function $listener(subject){
    $person = subject;
}

function changePerson(){
    // _people[$person]
    var name = document.getElementById("person-name");
    let person_image = document.getElementById("person-image");
    var texto = document.getElementById("person-description");

    name.textContent = _people[$person][0];
    person_image.src = _people[$person][1];
    texto.innerText = _people[$person][2];

}

function changeActive(){
    if($person == "joao"){
        document.getElementById("joao").classList.add("active");
        document.getElementById("carlos").classList.remove("active");
        document.getElementById("jessica").classList.remove("active");
    }
    else if($person == "carlos"){
        document.getElementById("carlos").classList.add("active");
        document.getElementById("joao").classList.remove("active");
        document.getElementById("jessica").classList.remove("active");
    }
    else{
        document.getElementById("jessica").classList.add("active");
        document.getElementById("joao").classList.remove("active");
        document.getElementById("carlos").classList.remove("active");
    }
}
