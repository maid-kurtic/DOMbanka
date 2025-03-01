import {Racun,Checking,Savings,defaultRacun} from "./oop.js";

let input = document.querySelector('#iznos');
let btn = document.querySelector('#submit');

btn.addEventListener('click', () => {
    let iznos = Number(input.value) 
    defaultRacun.depozit(iznos)
    console.log(defaultRacun)
})