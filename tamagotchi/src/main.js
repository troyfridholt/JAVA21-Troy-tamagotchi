import { vrPet } from "./modules/virtualPet.js";

let pet = new vrPet();
const img = document.querySelector('img');
const petHappy = new URL //(Bild här, import.meta.url);
const petDead = new URL //(Bild här, import.meta.url);
const petMad = new URL //(Bild här, import.meta.url);
let intervalID =0;

const btn = document.getElementById(petName);
btn.addEventListener('click', setName)
function setName(){
    const virtualPetName = document.querySelector('input').value;
    document.getElementById('name').innerText = 'Virtual Pet Name' + virtualPetName;

    start();
}

const feedBtn = document.getElementById('feed');
feedBtn.addEventListener('click', ()=>{
    document.getElementById('hunger').innerText = 'Hunger: ' + pet.setTimeUp();
    if(pet.getTimeUp() <= 0){
        console.log("gettimeup = 0")
        pet.adjustTimeUp();
    }
});

const playBtn = document.getElementById('play');
playBtn.addEventListener('click', ()=>{
    document.getElementById('mood').innerText = 'Mood: ' + pet.setTimeDown();
    if(pet.getTimeDown() >= 10){
        console.log("gettimedown = 10")
        pet.adjustTimeDown();
    }
});

function start(){
    intervalID =setInterval(update, 2200);
}

function update(){
    let cstate = pet.getState();
    if (cstate === "Mad"){
        //Arg bild
    }
    if(cstate === "Wohoo"){
        //Glad bild
    }
    if(pet.getTimeDown() == 0 || pet.getTimeUp() == 10){
        clearInterval(intervalID);
        //Död bild
    }
}