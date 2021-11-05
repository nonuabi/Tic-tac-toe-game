// geting time, and displaying that into network bar
setInterval(function () {
  let time_varable = new Date();
  let only_time = String(time_varable).substring(16, 24);
  document.getElementById("time_section").innerHTML = only_time;
}, 1000);

function checking_winner() {
  var input_one,
    input_two,
    input_three,
    input_four,
    input_five,
    input_six,
    input_seven,
    input_eight,
    input_nine;
  input_one = document.getElementById("input_one").value;
  input_two = document.getElementById("input_two").value;
  input_three = document.getElementById("input_three").value;
  input_four = document.getElementById("input_four").value;
  input_five = document.getElementById("input_five").value;
  input_six = document.getElementById("input_six").value;
  input_seven = document.getElementById("input_seven").value;
  input_eight = document.getElementById("input_eight").value;
  input_nine = document.getElementById("input_nine").value;

  // Checking if Player X won or not and after
  // that disabled all the other fields
  if (input_one == "X" && input_two == "X" && input_three == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("input_four").disabled = true;
    document.getElementById("input_five").disabled = true;
    document.getElementById("input_six").disabled = true;
    document.getElementById("input_seven").disabled = true;
    document.getElementById("input_eight").disabled = true;
    document.getElementById("input_nine").disabled = true;
    window.alert("Player X won");
  } else if (input_one == "X" && input_four == "X" && input_seven == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("input_two").disabled = true;
    document.getElementById("input_three").disabled = true;
    document.getElementById("input_five").disabled = true;
    document.getElementById("input_six").disabled = true;
    document.getElementById("input_eight").disabled = true;
    document.getElementById("input_nine").disabled = true;
    window.alert("Player X won");
  } else if (input_seven == "X" && input_eight == "X" && input_nine == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("input_one").disabled = true;
    document.getElementById("input_two").disabled = true;
    document.getElementById("input_three").disabled = true;
    document.getElementById("input_four").disabled = true;
    document.getElementById("input_five").disabled = true;
    document.getElementById("input_six").disabled = true;
    window.alert("Player X won");
  } else if (input_three == "X" && input_six == "X" && input_nine == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("input_one").disabled = true;
    document.getElementById("input_two").disabled = true;
    document.getElementById("input_four").disabled = true;
    document.getElementById("input_five").disabled = true;
    document.getElementById("input_seven").disabled = true;
    document.getElementById("input_eight").disabled = true;
    window.alert("Player X won");
  } else if (input_one == "X" && input_five == "X" && input_nine == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("input_two").disabled = true;
    document.getElementById("input_three").disabled = true;
    document.getElementById("input_four").disabled = true;
    document.getElementById("input_six").disabled = true;
    document.getElementById("input_seven").disabled = true;
    document.getElementById("input_eight").disabled = true;
    window.alert("Player X won");
  } else if (input_three == "X" && input_five == "X" && input_seven == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("input_one").disabled = true;
    document.getElementById("input_two").disabled = true;
    document.getElementById("input_four").disabled = true;
    document.getElementById("input_six").disabled = true;
    document.getElementById("input_eight").disabled = true;
    document.getElementById("input_nine").disabled = true;
    window.alert("Player X won");
  } else if (input_two == "X" && input_five == "X" && input_eight == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("input_one").disabled = true;
    document.getElementById("input_three").disabled = true;
    document.getElementById("input_four").disabled = true;
    document.getElementById("input_six").disabled = true;
    document.getElementById("input_seven").disabled = true;
    document.getElementById("input_nine").disabled = true;
    window.alert("Player X won");
  } else if (input_four == "X" && input_five == "X" && input_six == "X") {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("input_one").disabled = true;
    document.getElementById("input_two").disabled = true;
    document.getElementById("input_three").disabled = true;
    document.getElementById("input_seven").disabled = true;
    document.getElementById("input_eight").disabled = true;
    document.getElementById("input_nine").disabled = true;
    window.alert("Player X won");
  } else if (input_one == "O" && input_two == "O" && input_three == "O") {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("input_four").disabled = true;
    document.getElementById("input_five").disabled = true;
    document.getElementById("input_six").disabled = true;
    document.getElementById("input_seven").disabled = true;
    document.getElementById("input_eight").disabled = true;
    document.getElementById("input_nine").disabled = true;
    window.alert("Player 0 won");
  } else if (input_one == "O" && input_four == "O" && input_seven == "O") {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("input_two").disabled = true;
    document.getElementById("input_three").disabled = true;
    document.getElementById("input_five").disabled = true;
    document.getElementById("input_six").disabled = true;
    document.getElementById("input_eight").disabled = true;
    document.getElementById("input_nine").disabled = true;
    window.alert("Player 0 won");
  } else if (input_seven == "O" && input_eight == "O" && input_nine == "O") {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("input_one").disabled = true;
    document.getElementById("input_two").disabled = true;
    document.getElementById("input_three").disabled = true;
    document.getElementById("input_four").disabled = true;
    document.getElementById("input_five").disabled = true;
    document.getElementById("input_six").disabled = true;
    window.alert("Player 0 won");
  } else if (input_three == "O" && input_six == "O" && input_nine == "O") {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("input_one").disabled = true;
    document.getElementById("input_two").disabled = true;
    document.getElementById("input_four").disabled = true;
    document.getElementById("input_five").disabled = true;
    document.getElementById("input_seven").disabled = true;
    document.getElementById("input_eight").disabled = true;
    window.alert("Player 0 won");
  } else if (input_one == "O" && input_five == "O" && input_nine == "O") {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("input_two").disabled = true;
    document.getElementById("input_three").disabled = true;
    document.getElementById("input_four").disabled = true;
    document.getElementById("input_six").disabled = true;
    document.getElementById("input_seven").disabled = true;
    document.getElementById("input_eight").disabled = true;
    window.alert("Player 0 won");
  } else if (input_three == "O" && input_five == "O" && input_seven == "O") {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("input_one").disabled = true;
    document.getElementById("input_two").disabled = true;
    document.getElementById("input_four").disabled = true;
    document.getElementById("input_six").disabled = true;
    document.getElementById("input_eight").disabled = true;
    document.getElementById("input_nine").disabled = true;
    window.alert("Player 0 won");
  } else if (input_two == "O" && input_five == "O" && input_eight == "O") {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("input_one").disabled = true;
    document.getElementById("input_three").disabled = true;
    document.getElementById("input_four").disabled = true;
    document.getElementById("input_six").disabled = true;
    document.getElementById("input_seven").disabled = true;
    document.getElementById("input_nine").disabled = true;
    window.alert("Player 0 won");
  } else if (input_four == "O" && input_five == "O" && input_six == "O") {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("input_one").disabled = true;
    document.getElementById("input_two").disabled = true;
    document.getElementById("input_three").disabled = true;
    document.getElementById("input_seven").disabled = true;
    document.getElementById("input_eight").disabled = true;
    document.getElementById("input_nine").disabled = true;
    window.alert("Player 0 won");
  }

  // Checking of Player O finsh

  //  Checking about Tie
  else if (
    (input_one == "X" || input_one == "O") &&
    (input_two == "X" || input_two == "O") &&
    (input_three == "X" || input_three == "O") &&
    (input_four == "X" || input_four == "O") &&
    (input_five == "X" || input_five == "O") &&
    (input_six == "X" || input_six == "O") &&
    (input_seven == "X" || input_seven == "O") &&
    (input_eight == "X" || input_eight == "O") &&
    (input_nine == "X" || input_nine == "O")
  ) {
    document.getElementById("print").innerHTML = "Match Tie";
    window.alert("Match Tie");
  } else {
    //Printing Result
    if (flag == 1) {
      document.getElementById("print").innerHTML = "Player X Turn";
    } else {
      document.getElementById("print").innerHTML = "Player 0 Turn";
    }
  }
}
// finish checking function

// Here onwards, functions check turn of the player
// and put accordingly value X or O
let flag = 1;
function change_value_one() {
  if (flag == 1) {
    document.getElementById("input_one").value = "X";
    document.getElementById("input_one").disabled = true;
    flag = 0;
  } else {
    document.getElementById("input_one").value = "O";
    document.getElementById("input_one").disabled = true;
    flag = 1;
  }
}

function change_value_two() {
  if (flag == 1) {
    document.getElementById("input_two").value = "X";
    document.getElementById("input_two").disabled = true;
    flag = 0;
  } else {
    document.getElementById("input_two").value = "O";
    document.getElementById("input_two").disabled = true;
    flag = 1;
  }
}

function change_value_three() {
  if (flag == 1) {
    document.getElementById("input_three").value = "X";
    document.getElementById("input_three").disabled = true;
    flag = 0;
  } else {
    document.getElementById("input_three").value = "O";
    document.getElementById("input_three").disabled = true;
    flag = 1;
  }
}

function change_value_four() {
  if (flag == 1) {
    document.getElementById("input_four").value = "X";
    document.getElementById("input_four").disabled = true;
    flag = 0;
  } else {
    document.getElementById("input_four").value = "O";
    document.getElementById("input_four").disabled = true;
    flag = 1;
  }
}

function change_value_five() {
  if (flag == 1) {
    document.getElementById("input_five").value = "X";
    document.getElementById("input_five").disabled = true;
    flag = 0;
  } else {
    document.getElementById("input_five").value = "O";
    document.getElementById("input_five").disabled = true;
    flag = 1;
  }
}

function change_value_six() {
  if (flag == 1) {
    document.getElementById("input_six").value = "X";
    document.getElementById("input_six").disabled = true;
    flag = 0;
  } else {
    document.getElementById("input_six").value = "O";
    document.getElementById("input_six").disabled = true;
    flag = 1;
  }
}

function change_value_seven() {
  if (flag == 1) {
    document.getElementById("input_seven").value = "X";
    document.getElementById("input_seven").disabled = true;
    flag = 0;
  } else {
    document.getElementById("input_seven").value = "O";
    document.getElementById("input_seven").disabled = true;
    flag = 1;
  }
}

function change_value_eight() {
  if (flag == 1) {
    document.getElementById("input_eight").value = "X";
    document.getElementById("input_eight").disabled = true;
    flag = 0;
  } else {
    document.getElementById("input_eight").value = "O";
    document.getElementById("input_eight").disabled = true;
    flag = 1;
  }
}

function change_value_nine() {
  if (flag == 1) {
    document.getElementById("input_nine").value = "X";
    document.getElementById("input_nine").disabled = true;
    flag = 0;
  } else {
    document.getElementById("input_nine").value = "O";
    document.getElementById("input_nine").disabled = true;
    flag = 1;
  }
}

function replay() {
  flag = 1;
  document.getElementById("print").innerHTML = "";
  document.getElementById("input_one").value = "";
  document.getElementById("input_two").value = "";
  document.getElementById("input_three").value = "";
  document.getElementById("input_four").value = "";
  document.getElementById("input_five").value = "";
  document.getElementById("input_six").value = "";
  document.getElementById("input_seven").value = "";
  document.getElementById("input_eight").value = "";
  document.getElementById("input_nine").value = "";
  document.getElementById("input_one").disabled = false;
  document.getElementById("input_two").disabled = false;
  document.getElementById("input_three").disabled = false;
  document.getElementById("input_four").disabled = false;
  document.getElementById("input_five").disabled = false;
  document.getElementById("input_six").disabled = false;
  document.getElementById("input_seven").disabled = false;
  document.getElementById("input_eight").disabled = false;
  document.getElementById("input_nine").disabled = false;
}
