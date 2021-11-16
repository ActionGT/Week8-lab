
const btn = document.querySelector('#btn');

//variables
var a = Math.floor(Math.random() * 3);
var com;

//function that assigns a value to the computer selection and makes a comparrison to users selection 
function calc() {

  if (a === 0) {
    com = "paper";
    alert("computer Selects: " + com);
  } else if (a === 1) {
    com = "scissor";
    alert("computer Selects: " + com);

  } else if (a === 2) {
    com = "rock";
    alert("computer Selects: " + com);
  }

  const selection = document.querySelectorAll('input[name="choice"]');
  let selectedValue;
  for (const i of selection) {

    if (i.checked) {
      selectedValue = i.id;

      break;
    }

  }
  if (selectedValue == "paper" && com == "scissor") {
    alert("you lose");
  } else if (selectedValue == "paper" && com == "paper") {
    alert("draw");
  } else if (selectedValue == "paper" && com == "rock") {
    alert("you win");
  } else if (selectedValue == "scissor" && com == "rock") {
    alert("you loose");
  } else if (selectedValue == "scissor" && com == "scissor") {
    alert("draw");
  } else if (selectedValue == "scissor" && com == "paper") {
    alert("you win");
  } else if (selectedValue == "rock" && com == "paper") {
    alert("you loose");
  } else if (selectedValue == "rock" && com == "rock") {
    alert("Draw");
  } else if (selectedValue == "rock" && com == "scissor") {
    alert("you win");

  }else if(selectedValue == null){
    alert("Please make a selection");

  }

}