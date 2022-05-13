function cookInput(cookString) {
  let valuesArray = cookString.split(/[\*\/\+\-]{1}/, 2);
  let operation = cookString.replaceAll(/([0-9]+[\.\,]?[0-9]+)/, "");

  let a = parseInt(valuesArray[0]);
  let b = parseInt(valuesArray[1]);
  let op = operation;

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
  return operate(a, b, op);
}

/*
      //la idea es que a sea la cache; p.ej
      //a op b | res
      //2 +  4 | 6   (+ 8)
      //al volver al form, entiendo que no hace falta utilizar una variable para almacenar la cache?
      RegEx:        /([0-9]+[\.\,]?[0-9]+)+([\*\/\+\-]+[0-9]+[\.\,]?[0-9]+)?/
  */

window.onload = function () {
  var form = document.getElementById("submit");
  form.addEventListener("submit", function (userString) {
    if (!isValid) {
      prompt("Por favor introduce valores válidos");
      return false;
    } else {
      let result = cookInput(userString);
      document.getElementById("screen").textContent = result;
      return false;
    }
  });
};
