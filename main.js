/*
task: style the button when it is activated
*/

const selectA = document.querySelector("#a");
const selectS = document.querySelector("#s");
const selectD = document.querySelector("#d");
const selectF = document.querySelector("#f");
const selectG = document.querySelector("#g");
const selectH = document.querySelector("#h");
const selectJ = document.querySelector("#j");
const selectK = document.querySelector("#k");
const selectL = document.querySelector("#l");

//selectKey.addEvenetListener("click", FUNCTION);
selectA.addEventListener("click", clap);
selectS.addEventListener("click", hihat);
selectD.addEventListener("click", kick);
selectF.addEventListener("click", openhat);
selectG.addEventListener("click", boom);
selectH.addEventListener("click", ride);
selectJ.addEventListener("click", snare);
selectK.addEventListener("click", tom);
selectL.addEventListener("click", tink);

//functions
function clap() {
  document.querySelector("#clap").play();
  //add active class to clap
  selectA.classList.add("active");
  //set a delay to remove the active class so active has time to execute.
  setTimeout(removeActive, 150);
}

function hihat() {
  document.querySelector("#hihat").play();
  selectS.classList.add("active");
  setTimeout(removeActive, 150);
}

function kick() {
  document.querySelector("#kick").play();
  selectD.classList.add("active");
  setTimeout(removeActive, 150);
}

function openhat() {
  document.querySelector("#openhat").play();
  selectF.classList.add("active");
  setTimeout(removeActive, 150);
}

function boom() {
  document.querySelector("#boom").play();
  selectG.classList.add("active");
  setTimeout(removeActive, 150);
} 

function ride() {
  document.querySelector("#ride").play();
  selectH.classList.add("active");
  setTimeout(removeActive, 150);
}

function snare() {
  document.querySelector("#snare").play();
  selectJ.classList.add("active");
  setTimeout(removeActive, 150);
}

function tom() {
  document.querySelector("#tom").play();
  selectK.classList.add("active");
  setTimeout(removeActive, 150);
}

function tink() {
  document.querySelector("#tink").play();
  selectL.classList.add("active");
  setTimeout(removeActive, 150);
}

//listen for any keys pressed
document.addEventListener("keypress", keyPress);

//uses the keyCode property and stores the keycode. runs a function when the the keyPress matches the keyCode.
function keyPress(event) {
  let keyPress = event.keyCode;
  
  switch (keyPress) {
    case 97: 
      clap();
      break;
    case 115:
      hihat();
      break;
    case 100:
      kick();
      break;
    case 102:
      openhat();
      break;
    case 103:
      boom();
      break;
    case 104:
      ride();
      break;
    case 106:
      snare();
      break;
    case 107:
      tom();
      break;
    case 108:
      tink();
      break;
  } //switch

  /*
    KEYCODES:
    a = 97
    s = 115
    d = 100
    f = 102
    g = 103
    h = 104
    j = 106
    k = 107
    l = 108
  */

}

//removes styling
function removeActive() {
  selectA.classList.remove("active");
  selectS.classList.remove("active");
  selectD.classList.remove("active");
  selectF.classList.remove("active");
  selectG.classList.remove("active");
  selectH.classList.remove("active");
  selectJ.classList.remove("active");
  selectK.classList.remove("active");
  selectL.classList.remove("active");
}


/*
process of getting the sound to play on click.
1. create an audio tag linking the audio file.
2. addEventListener to listen for a click, then use play() method to play the audio.

*/