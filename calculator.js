//manual input
function cookInput(cookString) {
  cookString = cookString.replaceAll(/,/g, ".");
  let valuesArray = cookString.split(/[\*\/\+\-]{1}/, 2);
  let operation = cookString.replaceAll(/([0-9]+([\.]+[0-9]+)?)/g, "");

  let a = parseFloat(valuesArray[0]);
  let b = parseFloat(valuesArray[1]);
  let op = operation;

  document.querySelector("#screen").value = operate(a, b, op);
}

function operate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}

//Event listeners
window.onload = () => {
  let numButtons = document.querySelectorAll(".num-b");
  let screen = document.querySelector("#screen");
  let a;
  let b;
  let op;
  numButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (/[\*\/\+\-]/.test(screen.value)) {
        op = screen.value;
        screen.value = "";
        screen.value = screen.value + button.textContent;
      } else {
        screen.value = screen.value + button.textContent;
        console.log(button.textContent, button);
      }
    });
  });
  let opButtons = document.querySelectorAll(".op-b");
  opButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (screen.value == "") {
        return;
      }
      a = screen.value;
      screen.value = "";
      screen.value = screen.value + button.textContent;
    });
  });
  let eqButton = document.querySelector("#equals-b");
  eqButton.addEventListener("click", () => {
    b = screen.value;
    screen.value = calculator.operate(a, b, op);
    screen.value = screen.value + eqButton.textContent;
  });
  document.querySelector("#equals-b").addEventListener("click", () => {
    console.log("equals-test");
  });
  //para el input manual
  document.querySelector("#screen").addEventListener("keypress", (e) => {
    if (e.keyCode == 13 || e.which == 13) {
      console.log("Enter key is pressed");
      //caso: operación entera
      if (
        /([0-9]+([.,]+[0-9]+)?)+([\*\/\+\-]+[0-9]+([.,]+[0-9]+)?)/.test(
          screen.value
        )
      ) {
        console.log(screen.value);
        cookInput(screen.value);
      //caso: operación por partes
      } else {
        
        while (i < 3) {
          
          console.log(i)
        }
      }

      return true;
    } else {
      return false;
    }
  });
};
