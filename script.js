window.addEventListener("load", sidenVises);
let liv;
let point;
let myRandom;
let myRandom2;
let erSpilletStoppet = false;

let gameTimer;


function sidenVises() {
    //udskriver i konsollen
    console.log("Siden vises");

    // Skjuler #start, #gameover og #levelcomplete
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");

    // Viser #start
    document.querySelector("#start").classList.remove("hide");
    //animerer startknappen
    document.querySelector("#startknap").classList.add("pulse");

    // gør startknappen klikbar
    document.querySelector("#startknap").addEventListener("click", startspil);

    //iknap
    // document.querySelector("#ikanp").addEventListener("click", iknap);

    // baggrundslyd
    document.querySelector("#sound_baggrund").volume = 1;
    document.querySelector("#sound_baggrund").play();

}

function reload(){
    document.location.reload()
}


function startspil() {
    console.log("startspil");

    //Nustil liv og point

    liv = 3;
    point = 0;
    erSpilletStoppet = false;

    //restarter point ved genstart
    document.querySelector(".antal").textContent = point;
    //fjern grey fra liv når den genstarter
    document.querySelector("#heart1").classList.remove("grey");
    document.querySelector("#heart2").classList.remove("grey");
    document.querySelector("#heart3").classList.remove("grey");

    // //Start animation på heste
    document.querySelector("#hul_container_1").addEventListener("click", klikhest);
    document.querySelector("#hul_container_2").addEventListener("click", klikpoliti);

    document.querySelector("#hul_container_3").addEventListener("click", ingenting);

    document.querySelector("#hul_container_4").addEventListener("click", klikhest);
    document.querySelector("#hul_container_5").addEventListener("click", klikhest);

    //Start animation på Politi
    document.querySelector("#hul_container_6").addEventListener("click", ingenting);
    document.querySelector("#hul_container_7").addEventListener("click", klikpoliti);
    document.querySelector("#hul_container_8").addEventListener("click", klikpoliti);
    document.querySelector("#hul_container_9").addEventListener("click", klikpoliti);

    
    document.querySelector("#hul1_sprite").classList.add("popup");
    document.querySelector("#hul2_sprite").classList.add("popup");
    document.querySelector("#hul3_sprite").classList.add("popup");
    document.querySelector("#hul4_sprite").classList.add("popup");
    document.querySelector("#hul5_sprite").classList.add("popup");
    document.querySelector("#hul6_sprite").classList.add("popup");
    document.querySelector("#hul7_sprite").classList.add("popup");
    document.querySelector("#hul8_sprite").classList.add("popup");
    document.querySelector("#hul9_sprite").classList.add("popup");

    document.querySelector("#hul_container_1").addEventListener("animationiteration", nytilfaeldigNisse);
    document.querySelector("#hul_container_2").addEventListener("animationiteration", nytilfaeldigNisse);
    document.querySelector("#hul_container_3").addEventListener("animationiteration", nytilfaeldigNisse);
    document.querySelector("#hul_container_4").addEventListener("animationiteration", nytilfaeldigNisse);
    document.querySelector("#hul_container_5").addEventListener("animationiteration", nytilfaeldigNisse);
    document.querySelector("#hul_container_6").addEventListener("animationiteration", nytilfaeldigKaptajn);
    document.querySelector("#hul_container_7").addEventListener("animationiteration", nytilfaeldigKaptajn);
    document.querySelector("#hul_container_8").addEventListener("animationiteration", nytilfaeldigKaptajn);
    document.querySelector("#hul_container_9").addEventListener("animationiteration", nytilfaeldigKaptajn);


    // Fjerner eventlistnere på tryagain knapper
    document.querySelector("#tryagain1").removeEventListener("click", startspil);
    document.querySelector("#tryagain2").removeEventListener("click", startspil);

    // skjuler #start, #gamover og #levelcomplete skærmen
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");

    // Resetter timeren så tiden starter forfra
    clearTimeout(gameTimer);

    // Starter timeren på 30 sekunder
    gameTimer = setTimeout(spilstopper, 30000);



    // Resetter timer animationen  SÆÆÆT DIN SOL IND HEER!
    document.querySelector("#time_container").classList.add("glow");
    document.querySelector('#time_sprite').classList.remove("sol");
    document.querySelector('#time_sprite').offsetHeight;
    document.querySelector('#time_sprite').classList.add("sol");

    // functionen kommer længere nede.


    // TODO: Afspil lyd.
    document.querySelector("#sound_baggrund").volume = 1;
    document.querySelector("#sound_baggrund").play();

}



function klikhest() {
    console.log("klikhest " + point);

    //få point
    
    this.removeEventListener("click", klikhest);
    point = point + 10000000;
    //Vis samlet antal point
    document.querySelector(".antal").textContent = point;
    
    //hest forsvinder
    this.querySelector(".hest").classList.remove("delay1");
    // this.querySelector(".hest").classList.remove("delay2");
    // this.querySelector(".hest").classList.add("forsvind");
    
    // afspil lyd
    document.querySelector("#sound_hest").volume = 1;
    document.querySelector("#sound_hest").play();
    //forsvind animation færdig --> nytilfaeldig
    this.addEventListener("animationend");




}

function ingenting() {
    console.log("ingenting");
}


function klikpoliti() {
    console.log("klikpoliti");


    //politi forsvinder
    this.removeEventListener("click", klikpoliti);

    this.querySelector(".politi").classList.remove("delay1");
    this.querySelector(".politi").classList.remove("delay2");
    // this.querySelector(".politi").classList.add("forsvind");

    // afspil lyd
    document.querySelector("#sound_politi").volume = 1;
    document.querySelector("#sound_politi").play();

    //forsvind animation færdig --> nytilfældig

    document.querySelector("#heart" + liv).classList.add("grey");

    //misterliv
    liv--;

    //TRANSITIONS------>
    //Forsvindanimationen er færdig -> nytilfaeldig

    this.addEventListener("animationend", nytilfaeldigKaptajn);
    //Ingen liv tilbage -> spilstopper
    if (liv == 0) {
        spilstopper();
    }

    // this.classList.add("paused");

    // this.removeEventListener("click", klikpoliti);

}

let lastHole;
let lastHole2;

function nytilfaeldigNisse() {

    changeNisse()
    //console.log("nytilfaeldig");
    //giv random pos
    myRandom = Math.floor(Math.random() * 4 + 1);
    //console.log("nytilfaeldig tal: " + myRandom);
    this.classList.remove("pos1");
    this.classList.remove("pos2");
    this.classList.remove("pos3");
    this.classList.remove("pos4");
    this.classList.remove("pos5");
    console.log(myRandom)
    this.classList.add("pos" + myRandom);

    if(myRandom === lastHole){
        // console.log("fy fy skamme skamme")
        // return nytilfaeldigNisse()
    }

    //fjern amination og tilføj igen
    this.firstElementChild.classList.remove("forsvind");
    this.offsetHeight;

    this.addEventListener("click", klikhest);


    lastHole = myRandom
}

function nytilfaeldigKaptajn() {
    //console.log("nytilfaeldig");
    //giv random pos
    myRandom2 = Math.floor(Math.random() * 4 + 5);
    //console.log("nytilfaeldig tal: " + myRandom);
    this.classList.remove("pos6");
    this.classList.remove("pos7");
    this.classList.remove("pos8");
    this.classList.remove("pos9");
    // console.log(myRandom2)
    this.classList.add("pos" + myRandom2);

    if(myRandom2 === lastHole2){
        // console.log("fy fy skamme skamme")
        // return nytilfaeldigKaptajn()
    }

    //fjern amination og tilføj igen
    this.firstElementChild.classList.remove("forsvind");
    this.offsetHeight;

    this.addEventListener("click", klikpoliti);

    lastHole2 = myRandom2
}

function changeNisse(){
    const nisser = [
      'url("svgs/sigurd.svg")',
      'url("images/saxo.png")',
      'url("svgs/saga.svg")'
    ]

    const nisse = document.querySelector(".hest")
    const bgNisse = nisser[Math.floor(Math.random() * nisser.length)];
    nisse.style.backgroundImage = bgNisse;
  }
//   setInterval(changeNisse, 4000)

// Spillets stoppe funktioner neden under

function spilstopper() {
    console.log("spilstopper");

    //sluk alle eventlistenere


    document.querySelector("#hul_container_1").removeEventListener("click", klikhest);
    document.querySelector("#hul_container_1").removeEventListener("click", nytilfaeldigNisse);
    document.querySelector("#hul_container_2").removeEventListener("click", klikhest);
    document.querySelector("#hul_container_2").removeEventListener("click", nytilfaeldigNisse);
    document.querySelector("#hul_container_3").removeEventListener("click", klikhest);
    document.querySelector("#hul_container_3").removeEventListener("click", nytilfaeldigNisse);
    document.querySelector("#hul_container_4").removeEventListener("click", klikhest);
    document.querySelector("#hul_container_4").removeEventListener("click", nytilfaeldigNisse);
    document.querySelector("#hul_container_5").removeEventListener("click", klikhest);
    document.querySelector("#hul_container_5").removeEventListener("click", nytilfaeldigNisse);
    document.querySelector("#hul_container_6").removeEventListener("click", klikpoliti);
    document.querySelector("#hul_container_6").removeEventListener("click", nytilfaeldigKaptajn);
    document.querySelector("#hul_container_7").removeEventListener("click", klikpoliti);
    document.querySelector("#hul_container_7").removeEventListener("click", nytilfaeldigKaptajn);
    document.querySelector("#hul_container_8").removeEventListener("click", klikpoliti);
    document.querySelector("#hul_container_8").removeEventListener("click", nytilfaeldigKaptajn);
    document.querySelector("#hul_container_9").removeEventListener("click", klikpoliti);
    document.querySelector("#hul_container_9").removeEventListener("click", nytilfaeldigKaptajn);
    document.querySelector("#hul1_sprite").classList.remove("popup");
    document.querySelector("#hul2_sprite").classList.remove("popup");
    document.querySelector("#hul3_sprite").classList.remove("popup");
    document.querySelector("#hul4_sprite").classList.remove("popup");
    document.querySelector("#hul5_sprite").classList.remove("popup");
    document.querySelector("#hul6_sprite").classList.remove("popup");
    document.querySelector("#hul7_sprite").classList.remove("popup");
    document.querySelector("#hul8_sprite").classList.remove("popup");
    document.querySelector("#hul9_sprite").classList.remove("popup");



    document.querySelector("#hul_container_1").removeEventListener("animationiteration", nytilfaeldigNisse);
    document.querySelector("#hul_container_2").removeEventListener("animationiteration", nytilfaeldigNisse);
    document.querySelector("#hul_container_3").removeEventListener("animationiteration", nytilfaeldigNisse);
    document.querySelector("#hul_container_4").removeEventListener("animationiteration", nytilfaeldigNisse);
    document.querySelector("#hul_container_5").removeEventListener("animationiteration", nytilfaeldigNisse);
    document.querySelector("#hul_container_6").removeEventListener("animationiteration", nytilfaeldigKaptajn);
    document.querySelector("#hul_container_7").removeEventListener("animationiteration", nytilfaeldigKaptajn);
    document.querySelector("#hul_container_8").removeEventListener("animationiteration", nytilfaeldigKaptajn);
    document.querySelector("#hul_container_9").removeEventListener("animationiteration", nytilfaeldigKaptajn);

    //[mere end 110 point] --> vinder
    if (erSpilletStoppet == false) {
        if (point >= 110000000 && liv >=1) {
            levelcomplete();
        } else {
            gameover();
        }
    }

}

function levelcomplete() {
    console.log("vinder");

    //registrerer at man har tabt
    erSpilletStoppet = true;
    //animation stopper

    //udskriver liv og point
    console.log("Du fik: " + point + " point");
    console.log("Du har: " + liv + " liv");
    //spilskærm blur ud


    // Viser levelComplete skærmen
    document.querySelector("#levelcomplete").classList.remove("hide");
    // Går til startspil når man klikker på knappen
    document.querySelector("#tryagain2").addEventListener("click", reload);

    //Afspil lyd
    document.querySelector("#sound_vinder").volume = 1;
    document.querySelector("#sound_vinder").play();
}

function gameover() {
    console.log("gameover");

    //registrerer at man har vundet

    erSpilletStoppet = true;



    //udskriver liv og point
    console.log("Du fik: " + point + " point");
    console.log("Du har: " + liv + " liv");

    //taberskærm blur ud

    //vis taberskærm
    document.querySelector("#gameover").classList.remove("hide");
    // Går til startspil når man klikker på knappen
    document.querySelector("#tryagain1").addEventListener("click", reload);
    

    //Afspil lyd
    document.querySelector("#sound_taber").volume = 1;
    document.querySelector("#sound_taber").play();
} 
