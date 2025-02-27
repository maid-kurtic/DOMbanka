import {Racun,Checking,Savings,defaultRacun} from "./oop.js";

const info = document.querySelector("#info");

const brojRacuna = info.querySelector("#brojRacuna");
const imeVlasnika = info.querySelector("#imeVlasnika");
const stanje = info.querySelector("#stanje");

brojRacuna.textContent = defaultRacun.broj_racuna;
imeVlasnika.textContent = defaultRacun.ime_vlasnika;
stanje.textContent = defaultRacun.stanje;