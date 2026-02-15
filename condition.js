const correctDoor = 2;
const output = document.getElementById("result");
const buttons = document.querySelectorAll("button[id^='btn']");

buttons.forEach(function(button, index) {

  button.addEventListener("click", function() {

    const selectedDoor = index + 1;

    if (selectedDoor === correctDoor) {
      output.style.color = "green";
      output.style.backgroundColor = "lightgreen";
      output.innerHTML = '<i class="fa-solid fa-trophy"></i> <span>Correct! Quest Complete</span><i class="fa-solid fa-circle-check"></i>';


             

    } else {
      output.style.color = "red";
      output.style.backgroundColor = "lightcoral";
     output.innerHTML = '<i class="fa-solid fa-circle-xmark"></i><span>Wrong door. Try again!</span>';


              

    }

  });

});
