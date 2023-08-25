let red = document.querySelector(".red");
let green = document.querySelector(".green");


interval = setInterval(changeColor, 2000);

function changeColor(){

      {
      red.classList.toggle("green");
      red.classList.toggle("red");
      if (red.classList.contains("green")){
            red.innerText="Grün";
      } else {(red.classList.contains("red"))
            red.innerText="Rot";
      }
}

{
      green.classList.toggle("red");
      green.classList.toggle("green");
      if (green.classList.contains("red")){
            green.innerText="Rot";
      } else {(green.classList.contains("green"))
            green.innerText="Grün";
      }
}

}
