//This script is a prank that emulates a hacking process of stealing data from the user
let counting = 0;
const button = document.getElementById("virus");

//this function counts the clicks on the button call the "steeled()"
//function when counts 5 clicks
function count() {

  function clickHandler() {
    counting++;
    if (counting === 5) {
        steeled();
        counting = null;
        button.removeEventListener("click", clickHandler);
    }
  };

  button.addEventListener("click", clickHandler);
  button.addEventListener("click", function() {
    console.log(counting);
    button.removeEventListener("click", clickHandler);
  }, {once: true});
}

//Removes the button, plays beeps, adds a background gif and alerts in Portuguese or English
//about a data robbering.
function steeled() {
    button.remove();
    const audio = new Audio('bips.mp3');
    audio.play();
    const img = new Image();
    img.src = "Matrix.gif";
    document.body.style.backgroundImage = `url(${img.src})`;
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    switch (navigator.language.toLowerCase()) {
        case "pt-br":
        case "pt":
            setTimeout(function() {
                alert("Estamos roubando todos os seus dados!");
            }, 5000);
            setTimeout(function() {
                alert("Você foi roubado.");
            }, 10000);
            break;
        default:
            setTimeout(function() {
                alert("We're stealing all your data!")
            }, 5000);
            setTimeout(function() {
                alert("You're stoled.");
            }, 10000);
            break;
    }
}


count();
