const cards = document.querySelectorAll(".card");

//Randomly distributing the emojis

cards.forEach((card) => {

  card.style.order = `${Math.floor(Math.random() * (16))}`;;
});


//Winner txt display function

function end() {

if(count>28){
  let displayWinner = document.querySelector(".container");
  displayWinner.innerHTML = "";
  let txt = document.createTextNode(`Number of Moves: ${count}`);
  let txt1 = document.createTextNode("Winner!");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  p1.appendChild(txt1);
  p1.classList.add("text-center");
  p1.classList.add("text-white");
  p1.classList.add("display-4");
  p2.appendChild(txt);
  p2.classList.add("text-center");
  p2.classList.add("text-white");
  p2.classList.add("display-4");
  displayWinner.appendChild(p1);
  displayWinner.appendChild(p2);

}

else{
  let disp = document.querySelector(".gameContainer");
  disp.innerHTML="";
  let img = document.createElement("img");
  img.src = "img/g.jpg";
  disp.appendChild(img);
}


}

let flag = true;
let temp;
let value;
let count = 0;
let correctPair = 0;

// adding click eventlistner on all cards

cards.forEach((card) => {


  flip(card);

});



function flip(element) {




  element.addEventListener("click", () => {


    if (true) {
      element.classList.add("flip");
      if (flag) {
        value = element.getAttribute("data-image");
        temp = element;
        flag = false;
        count++;

      }

      else {
        if (value != element.getAttribute("data-image")) {

          setTimeout(() => {
            element.classList.remove("flip");
            temp.classList.remove("flip");
          }, 480);

          flag = true;
          count++;



        }

        else {
          flag = true;
          correctPair++;
          count++;
          if (correctPair == 8) {
            end();
          }
        }
      }
    }


  });
}

