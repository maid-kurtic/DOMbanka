import {Racun,Checking,Savings,defaultRacun} from "./oop.js";

let iznos = document.querySelector('#iznos')
let btn = document.querySelector('#submit')

btn.addEventListener('click', () => {
    defaultRacun.povrat(iznos.value)
console.log(defaultRacun)
})