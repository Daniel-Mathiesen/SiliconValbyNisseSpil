window.addEventListener("load", sidenVises);

let liv;
let point;
let myRandom;
let myRandom2;
let erSpilletStoppet = false;
let nisseSound = "#sound_saga";

let kaptajnSoundArr=["#sound_hey","#sound_hovhov"]
let kaptajnSound = "#sound_hey";

let plus1 = document.querySelector("#plus1")
let plus2 = document.querySelector("#plus2")
let plus3 = document.querySelector("#plus3")

let minus1 = document.querySelector("#minus1")
let minus2 = document.querySelector("#minus2")
let minus3 = document.querySelector("#minus3")

let gameTimer;


function sidenVises() {
    //udskriver i konsollen
    console.log("Siden vises");
    document.querySelector("#info_text").addEventListener("click", pancakeClick);
    // Skjuler #start, #gameover og #levelcomplete
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#game").classList.add("hide");

    // Viser #start
    document.querySelector("#start").classList.remove("hide");
    //animerer startknappen
    document.querySelector("#startknap").classList.add("pulse");

    // gør startknappen klikbar
    document.querySelector("#startknap").addEventListener("click", startspil);

    //iknap
    // document.querySelector("#ikanp").addEventListener("click", iknap);

    // baggrundslyd

}

function reload(){
    document.location.reload()
}


function startspil() {
    console.log("startspil");
    document.querySelector("#game").classList.remove("hide");
    
    changeNisse()
    // document.querySelector("#sound_baggrund").volume = 0.1;
    // document.querySelector("#sound_baggrund").play();
    plus1.classList.add("hide")
    plus2.classList.add("hide")
    plus3.classList.add("hide")
    minus1.classList.add("hide")
    minus2.classList.add("hide")
    minus3.classList.add("hide")
    //Nustil liv og point

    liv = 3;
    point = 0;
    erSpilletStoppet = false;

    // //Start animation på heste
    document.querySelector("#hul_container_1").addEventListener("click", klikhest);
    // document.querySelector("#hul_container_2").addEventListener("click", klikhest);
    // document.querySelector("#hul_container_3").addEventListener("click", klikhest);

    // document.querySelector("#hul_container_4").addEventListener("click", klikpoliti);
    // document.querySelector("#hul_container_5").addEventListener("click", klikpoliti);
    document.querySelector("#hul_container_6").addEventListener("click", klikpoliti);

    //Start animation på Politi
    // document.querySelector("#hul_container_7").addEventListener("click", klikpoliti);
    // document.querySelector("#hul_container_8").addEventListener("click", klikpoliti);
    // document.querySelector("#hul_container_9").addEventListener("click", klikpoliti);

    //Ørn lyd
    document.querySelector("#time_sprite").addEventListener("click", kilkoern);


    
    document.querySelector("#hul1_sprite").classList.add("popup");
    document.querySelector("#hul2_sprite").classList.add("popup");
    document.querySelector("#hul3_sprite").classList.add("popup");
    document.querySelector("#hul4_sprite").classList.add("popup");
    document.querySelector("#hul5_sprite").classList.add("popup");
    document.querySelector("#hul6_sprite").classList.add("popup");
    // document.querySelector("#hul7_sprite").classList.add("popup");
    // document.querySelector("#hul8_sprite").classList.add("popup");
    // document.querySelector("#hul9_sprite").classList.add("popup");

    document.querySelector("#hul_container_1").addEventListener("animationiteration", nytilfaeldigNisse);
    // document.querySelector("#hul_container_2").addEventListener("animationiteration", nytilfaeldigNisse);
    // document.querySelector("#hul_container_3").addEventListener("animationiteration", nytilfaeldigNisse);
    // document.querySelector("#hul_container_4").addEventListener("animationiteration", nytilfaeldigNisse);
    // document.querySelector("#hul_container_5").addEventListener("animationiteration", nytilfaeldigNisse);
    document.querySelector("#hul_container_6").addEventListener("animationiteration", nytilfaeldigKaptajn);
    // document.querySelector("#hul_container_7").addEventListener("animationiteration", nytilfaeldigKaptajn);
    // document.querySelector("#hul_container_8").addEventListener("animationiteration", nytilfaeldigKaptajn);
    // document.querySelector("#hul_container_9").addEventListener("animationiteration", nytilfaeldigKaptajn);


    // Fjerner eventlistnere på tryagain knapper
    // document.querySelector("#tryagain1").removeEventListener("click", startspil);
    // document.querySelector("#tryagain2").removeEventListener("click", startspil);

    // skjuler #start, #gamover og #levelcomplete skærmen
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");

    // Resetter timeren så tiden starter forfra
    clearTimeout(gameTimer);

    // Starter timeren på 30 sekunder
    gameTimer = setTimeout(spilstopper, 45000);



    // Resetter timer animationen  SÆÆÆT DIN SOL IND HEER!
    document.querySelector("#time_container").classList.add("glow");
    document.querySelector('#time_sprite').classList.remove("sol");
    document.querySelector('#time_sprite').offsetHeight;
    document.querySelector('#time_sprite').classList.add("sol");

    // functionen kommer længere nede.


    // TODO: Afspil lyd.
}



function klikhest() {
    // console.log("klikhest " + point);

    //få point
    
    this.removeEventListener("click", klikhest);
    point++;
    if(myRandom == 1){
        plus1.classList.add("visible")
     } else if(myRandom == 2){
         plus2.classList.add("visible")
     } else if(myRandom == 3){
         plus3.classList.add("visible")
     } else{
         plus1.classList.add("visible")
     }
    //Vis samlet antal point
    document.querySelector(".antal").textContent = point;
    
    //hest forsvinder
    // this.querySelector(".hest").classList.remove("delay1");
    // this.querySelector(".hest").classList.remove("delay2");
    // this.querySelector(".hest").classList.add("forsvind");
    
    // afspil lyd
    document.querySelector(nisseSound).volume = 1;
    document.querySelector(nisseSound).play();
    //forsvind animation færdig --> nytilfaeldig
    // this.addEventListener("animationend");
    // this.addEventListener("animationend", nytilfaeldigNisse);

}

function ingenting() {
    console.log("ingenting");
}

let ørnClick = 0;
let textClick = 0;

function pancakeClick() {
 textClick++;  
}

function kilkoern() {
    document.querySelector("#sound_ørn").volume = 1;
    document.querySelector("#sound_ørn").play();
    ørnClick++;
    if(ørnClick == 2 & textClick == 2){
        document.querySelector("#kids_sound").volume = 1;
        document.querySelector("#sound_ørn").pause();
        document.querySelector("#kids_sound").play();
    }
}



function klikpoliti() {
    // console.log("klikpoliti");

    if(myRandom2 == 4){
        minus1.classList.add("visible")
    }else if(myRandom2 == 5){
        minus2.classList.add("visible")
    } else if(myRandom2 == 6){
        minus3.classList.add("visible")
    } else{
        minus3.classList.add("visible")
    }
    //politi forsvinder
    this.removeEventListener("click", klikpoliti);

    // this.querySelector(".politi").classList.remove("delay1");
    // this.querySelector(".politi").classList.remove("delay2");
    // this.querySelector(".politi").classList.add("forsvind");

    // afspil lyd
    kaptajnSound = kaptajnSoundArr[Math.floor(Math.random()*kaptajnSoundArr.length)]

    document.querySelector(kaptajnSound).volume = 1;
    document.querySelector(kaptajnSound).play();

    //forsvind animation færdig --> nytilfældig

    document.querySelector("#heart" + liv).classList.add("grey");

    //misterliv
    liv--;

    //TRANSITIONS------>
    //Forsvindanimationen er færdig -> nytilfaeldig

    // this.addEventListener("animationend", nytilfaeldigKaptajn);
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
    myRandom = Math.floor(Math.random() * 3 + 1);
    //console.log("nytilfaeldig tal: " + myRandom);
    this.classList.remove("pos1");
    this.classList.remove("pos2");
    this.classList.remove("pos3");
    plus1.classList.remove("visible")
    plus2.classList.remove("visible")
    plus3.classList.remove("visible")
    // this.classList.remove("pos4");
    // this.classList.remove("pos5");
    // console.log(myRandom)
    this.classList.add("pos" + myRandom);
    
    if(myRandom == 1){
        document.querySelector("#hul_container_1").addEventListener("click", klikhest);
        document.querySelector("#hul_container_2").removeEventListener("click", klikhest);
        document.querySelector("#hul_container_3").removeEventListener("click", klikhest);
    } else if(myRandom == 2){
        document.querySelector("#hul_container_2").addEventListener("click", klikhest);
        document.querySelector("#hul_container_1").removeEventListener("click", klikhest);
        document.querySelector("#hul_container_3").removeEventListener("click", klikhest);
    } else if(myRandom == 3){
        document.querySelector("#hul_container_3").addEventListener("click", klikhest);
        document.querySelector("#hul_container_1").removeEventListener("click", klikhest);
        document.querySelector("#hul_container_2").removeEventListener("click", klikhest);
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
    myRandom2 = Math.floor(Math.random() * 3 + 4);
    //console.log("nytilfaeldig tal: " + myRandom);
    this.classList.remove("pos4");
    this.classList.remove("pos5");
    this.classList.remove("pos6");
    minus1.classList.remove("visible")
    minus2.classList.remove("visible")
    minus3.classList.remove("visible")
    // console.log(myRandom2)
    this.classList.add("pos" + myRandom2);
    
    if(myRandom2 == 1){
        document.querySelector("#hul_container_4").addEventListener("click", klikpoliti);
        document.querySelector("#hul_container_5").removeEventListener("click", klikpoliti);
        document.querySelector("#hul_container_6").removeEventListener("click", klikpoliti);
    } else if(myRandom2 == 2){
        document.querySelector("#hul_container_5").addEventListener("click", klikpoliti);
        document.querySelector("#hul_container_4").removeEventListener("click", klikpoliti);
        document.querySelector("#hul_container_6").removeEventListener("click", klikpoliti);
    } else if(myRandom2 == 3){
        document.querySelector("#hul_container_6").addEventListener("click", klikpoliti);
        document.querySelector("#hul_container_4").removeEventListener("click", klikpoliti);
        document.querySelector("#hul_container_5").removeEventListener("click", klikpoliti);
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
      'url("svgs/saxo_2.svg")',
      'url("svgs/saga.svg")'
    ]

    const nisse = document.querySelector(".hest")
    const bgNisse = nisser[Math.floor(Math.random() * nisser.length)];
    nisse.style.backgroundImage = bgNisse;
    if(bgNisse == nisser[0]){
        nisseSound = "#sound_sigurd";
    }else if(bgNisse == nisser[1]){
        nisseSound = "#sound_saxo";
    }else{
        nisseSound = "#sound_saga";
    }

    if (erSpilletStoppet == false){
        if (point >= 10 && liv >= 1) {
            levelcomplete();
            console.log("du vandt :)");
        }
    }
    
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

    //[mere end 10 point] --> vinder
    if (erSpilletStoppet == false){
             if(point <= 10 || liv >= 0) {
            gameover();
            console.log("du tabte :(");
        }
    }

}

function levelcomplete() {
    console.log("vinder");

    //registrerer at man har tabt
    erSpilletStoppet = true;
    //animation stopper

    //udskriver liv og point
    console.log("Du fik: " + point + " pandekager");
    console.log("Du har: " + liv + " liv");
    //spilskærm blur ud


    // Viser levelComplete skærmen
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#levelcomplete").classList.remove("hide");
    // Går til startspil når man klikker på knappen
    // document.querySelector("#tryagain2").addEventListener("click", reload);

    //Afspil lyd
    document.querySelector("#sound_vinder").volume = 1;
    document.querySelector("#sound_vinder").play();
}

function gameover() {
    console.log("gameover");

    //registrerer at man har vundet

    erSpilletStoppet = true;
    document.querySelector("#game").classList.add("hide");


    //udskriver liv og point
    console.log("Du fik: " + point + " point");
    console.log("Du har: " + liv + " liv");

    //taberskærm blur ud

    //vis taberskærm
    document.querySelector("#gameover").classList.remove("hide");
    // Går til startspil når man klikker på knappen
    // document.querySelector("#tryagain1").addEventListener("click", reload);
    

    //Afspil lyd
    document.querySelector("#sound_taber").volume = 1;
    document.querySelector("#sound_taber").play();
} 

var click = 0;

const yourFunction = async () => {
    await delay(17150);
    document.querySelector(".bagside_Audio").style.display = "block";
    document.getElementById("AudioPlayer").classList.remove("vend");
    document.querySelector(".forside_Audio").style.display = "none";
    console.log("Waited 17s");
  };

const delay = ms => new Promise(res => setTimeout(res, ms));

document.getElementById("AudioPlayer").addEventListener("click", function(){
    if(click === 0){
        document.querySelector(".forside_Audio").style.display = "block";
        document.querySelector(".bagside_Audio").style.display = "none";
        document.getElementById("AudioPlayer").classList.add("vend");
        document.querySelector("#info_sound").volume = 0.5;
        document.querySelector("#info_sound").play();
        yourFunction();
        click++;
    } else if(click === 1){
        document.querySelector(".forside_Audio").style.display = "none";
        document.querySelector(".bagside_Audio").style.display = "block";
        document.getElementById("AudioPlayer").classList.remove("vend");
        document.querySelector("#info_sound").pause();
        document.querySelector("#info_sound").currentTime = 0;
        click--;
    }
});
