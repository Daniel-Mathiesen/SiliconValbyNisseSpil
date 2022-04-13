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
}


// Functionen refresher side
function reload(){
    document.location.reload()
}


function startspil() {
    // Fjerner forside
    document.querySelector("#game").classList.remove("hide");
    // Fjerner info lyd hvis den spiller
    document.querySelector("#info_sound").pause();
    
    changeNisse()
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

    // //Start animation på nisser og kaptajn
    document.querySelector("#hul_container_1").addEventListener("click", klikhest);
    document.querySelector("#hul_container_6").addEventListener("click", klikpoliti);

    //Ørn lyd
    document.querySelector("#time_sprite").addEventListener("click", kilkoern);


    // Tilføjer popup's på alle huller
    document.querySelector("#hul1_sprite").classList.add("popup");
    document.querySelector("#hul2_sprite").classList.add("popup");
    document.querySelector("#hul3_sprite").classList.add("popup");
    document.querySelector("#hul4_sprite").classList.add("popup");
    document.querySelector("#hul5_sprite").classList.add("popup");
    document.querySelector("#hul6_sprite").classList.add("popup");

    // Finder ny tilfældig position til nisser og kaptajn
    document.querySelector("#hul_container_1").addEventListener("animationiteration", nytilfaeldigNisse);
    document.querySelector("#hul_container_6").addEventListener("animationiteration", nytilfaeldigKaptajn);

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
}



function klikhest() {
    // Finder position af nisse og derefter pandekage plus
    // Den tjekker hvilket hul nissen er i og derefter gør at plus 1 ligger over nissen
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
    
    // afspil lyd
    document.querySelector(nisseSound).volume = 1;
    document.querySelector(nisseSound).play();
}

// Tjekker efter tryk på ørn og text
// Psst hvem end der kigger, hvis du trykke 2 gange på informations texten, så spiller og derefter trykke på ørnen 2 gange, finder du en lille easter egg ;)
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


// Functionen der kører når man trykker på en kaptajn
function klikpoliti() {

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

    // afspil lyd
    // Finder en tilfældig kaptajn lyd
    kaptajnSound = kaptajnSoundArr[Math.floor(Math.random()*kaptajnSoundArr.length)]

    document.querySelector(kaptajnSound).volume = 1;
    document.querySelector(kaptajnSound).play();

    //forsvind animation færdig --> nytilfældig

    document.querySelector("#heart" + liv).classList.add("grey");

    //misterliv
    liv--;

    //Ingen liv tilbage -> spilstopper
    if (liv == 0) {
        spilstopper();
    }
}

let lastHole;
let lastHole2;

function nytilfaeldigNisse() {

    changeNisse()
    //Finder tilfældig position der ikke kan komme sammen med kaptajn
    myRandom = Math.floor(Math.random() * 3 + 1);
    this.classList.remove("pos1");
    this.classList.remove("pos2");
    this.classList.remove("pos3");
    plus1.classList.remove("visible")
    plus2.classList.remove("visible")
    plus3.classList.remove("visible")
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
    //Finder tilfældig position der ikke kan komme sammen med nisser
    myRandom2 = Math.floor(Math.random() * 3 + 4);
    this.classList.remove("pos4");
    this.classList.remove("pos5");
    this.classList.remove("pos6");
    minus1.classList.remove("visible")
    minus2.classList.remove("visible")
    minus3.classList.remove("visible")
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

// Finder tilfældig nisse svg hver gang en nisser får ny position
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
// Tjekker om spiller har vundet når nisse går ned i hul
    if (erSpilletStoppet == false){
        if (point >= 10 && liv >= 1) {
            levelcomplete();
        }
    }
    
  }

// Spillets stoppe funktioner neden under

function spilstopper() {
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

    //[mere end 10 point men nul liv] --> taber
    if (erSpilletStoppet == false){
             if(point <= 10 || liv >= 0) {
            gameover();
        }
    }

}

function levelcomplete() {

    //registrerer at man har vundet
    erSpilletStoppet = true;
    //animation stopper

    //udskriver liv og point
    console.log("Du fik: " + point + " pandekager");
    console.log("Du har: " + liv + " liv");

    // Viser levelComplete skærmen
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#levelcomplete").classList.remove("hide");
    // Går til startspil når man klikker på knappen

    //Afspil lyd
    document.querySelector("#sound_vinder").volume = 1;
    document.querySelector("#sound_vinder").play();
}

function gameover() {
    //registrerer at man har tabt

    erSpilletStoppet = true;
    document.querySelector("#game").classList.add("hide");


    //udskriver liv og point
    console.log("Du fik: " + point + " point");
    console.log("Du har: " + liv + " liv");

    //vis taberskærm
    document.querySelector("#gameover").classList.remove("hide");
    // Går til startspil når man klikker på knappen    

    //Afspil lyd
    document.querySelector("#sound_taber").volume = 1;
    document.querySelector("#sound_taber").play();
} 

// Variable der tjekker 
var click = 0;

// Timer function
const yourFunction = async () => {
    // Antal sekunder
    await delay(17150);
    document.querySelector(".bagside_Audio").style.display = "block";
    document.getElementById("AudioPlayer").classList.remove("vend");
    document.querySelector(".forside_Audio").style.display = "none";
  };

// Få timer til at virker i milisekunder
const delay = ms => new Promise(res => setTimeout(res, ms));

// Vender info player om på anden side og ændre tilbage hvis man trykker igen
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
