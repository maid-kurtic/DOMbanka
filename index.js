

class Racun {
    #broj_racuna;
    #ime_vlasnika;
    #stanje;
    static #brojac_racuna = 0;
    static #racuni=[]; 
    #tip_racuna;

    constructor(ime_vlasnika, stanje = 0 , tip) {
        this.#broj_racuna = ++(Racun.#brojac_racuna);
        this.#ime_vlasnika = ime_vlasnika;
        this.#stanje = stanje;
        this.#tip_racuna=tip;

        if(stanje>=0)
            Racun.#racuni.push(this);
        else
            console.log("Stanje računa ne smije biti negativno!");
    }
    
    get broj_racuna() {
        return this.#broj_racuna;
    }
    //set broj_racuna je nepoželjno mijenjati

    get ime_vlasnika() {
        return this.#ime_vlasnika;
    }
    set ime_vlasnika(ime) {
        this.#ime_vlasnika = ime;
    }

    get stanje() {
        return this.#stanje;
    }
    set stanje(delta) {
        this.#stanje += delta;
    }

    get brojac_racuna(){
        return this.brojac_racuna;
    }
    //brojac_racuna je nepoželjno ručno mijenjati

    static getRacun(broj_racuna){

        return Racun.#racuni.find((element)=>{
            if(element.broj_racuna===broj_racuna)
                return true;
        })

    }

    static transakcija(broj_racuna_source,broj_racuna_destination,kolicina){
        const source=Racun.getRacun(broj_racuna_source);
        const destination=Racun.getRacun(broj_racuna_destination);

        if(source===undefined || destination===undefined){
            console.log("Nevažeći računi!");
            return false;
        }
        else if(source.tip!=="checking"){
            console.log("Račun koji pokreće transakciju mora biti Checking Račun!");
            return false;
        }
        else if(kolicina<=0){
            console.log("Nepravilan unos!");
            return false;
        }
        else if(source.stanje<kolicina){
            console.log("Nedovoljno sredstava na računu! : ",this.stanje);
            return false;
        }
        else{
            source.stanje=-kolicina;
            destination.stanje=+kolicina;
            return true;
        }
    }

    povrat(kolicina){
        if(kolicina<=0){
            console.log("Nepravilan unos!");
            return;
        }
        else if(this.#stanje<kolicina){
            console.log("Nedovoljno sredstava na računu! : ",this.stanje);
            return;
        }
        else this.stanje=-kolicina;
    }
    depozit(kolicina){
        if(kolicina<=0){
            console.log("Nepravilan unos!");
            return;
        }

        this.stanje=kolicina;
    }

    prikaziInformacije() {
        console.log("------------------------------");
        console.log("Broj Racuna : " + this.broj_racuna);
        console.log("Ime Vlasnika : " + this.ime_vlasnika);
        console.log("Stanje : " + this.stanje);
        console.log("------------------------------");
    }
}


class Checking extends Racun{

    constructor(ime_vlasnika,stanje){
        super(ime_vlasnika,stanje,"checking");
    }

}


class Savings extends Racun{

    constructor(ime_vlasnika,stanje){
        super(ime_vlasnika,stanje,"savings");
    }

}


new Racun("Karić Anis");
new Checking("Jeff Bezos",1234567);
new Savings("Mufid Kokuz",400);


let nekiRacun1=Racun.getRacun(1);
nekiRacun1.depozit(15);
nekiRacun1.povrat(40);
nekiRacun1.povrat(nekiRacun1.stanje);

console.log(Racun.transakcija(2,1,100));
console.log(Racun.transakcija(3,2,400));


let checkingRacun=Racun.getRacun(2);
let savingsRacun=Racun.getRacun(3);

console.log(nekiRacun1.prikaziInformacije());
console.log(checkingRacun.prikaziInformacije());
console.log(savingsRacun.prikaziInformacije());


