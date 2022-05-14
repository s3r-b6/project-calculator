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
  parseFloat(a);
  parseFloat(b);
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
  //para el clickInput
  numButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (/[\=\*\/\+\-]/.test(screen.value)) {
        screen.value = "";
        screen.value = screen.value + button.textContent;
      } else if (/[ERROR]/.test(screen.value)) {
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
      if (screen.value == "" || screen.value == "ERROR") {
        screen.value = "ERROR";
        return;
      } else if (/[^=]/.test(screen.value)) {
        //si screen.value no tiene como output el resultado, entender el input anterior (un número) como input de a
        //fix cutre pero no he encontrado otra forma.
        a = screen.value.replaceAll("= ", "");
        screen.value = "";
        screen.value = screen.value + button.textContent;
        op = screen.value;
      } else {
        b = screen.value;
        screen.value = "";
        screen.value = screen.value + button.textContent;
        op = screen.value;
      }
    });
  });
  let eqButton = document.querySelector("#equals-b");
  eqButton.addEventListener("click", () => {
    b = screen.value;
    if (
      /([0-9]+([\.]+[0-9]+)?)/.test(a) &&
      /([0-9]+([\.]+[0-9]+)?)/.test(b) &&
      /[\*\/\+\-]/.test(op)
    ) {
      let result = operate(a, b, op);
      console.log(typeof result, typeof a, typeof b);
      console.log(a, op, b, "=", result);
      screen.value = eqButton.textContent + " " + result;
      //se usa la b como cache
      console.log(result);
      a = result;
    } else {
      screen.value = "ERROR";
      return;
    }
  });

  //para el keybInput
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
      }

      return true;
    } else {
      return false;
    }
  });
};
