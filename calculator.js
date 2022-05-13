function calculator(string) {
  let cache;
  let result;
  let a;
  let b;
  let op;
  //calc va a recibir una string; parseInp nos devuelve a,b,op.
  function parseInput(string) {
    const valuesArray = string.split(/[\*\/\+\-]{1}/, 2)
    const operation = string.replaceAll(/([0-9]+[\.\,]?[0-9]+)/, '')
    a = parseInt(valuesArray[0]);
    b = parseInt(valuesArray[1]);
    op = operation


    //la idea es que a sea la cache; p.ej
    //a op b | res
    //2 +  4 | 6   (+ 8)
    //al volver al form, entiendo que no hace falta utilizar una variable para almacenar la cache?

    /* 
        /([0-9]+[\.\,]?[0-9]+)/
        /[\*\/\+\-]/
        /([0-9]+[\.\,]?[0-9]+)/

        /([0-9]+[\.\,]?[0-9]+)+([\*\/\+\-]+[0-9]+[\.\,]?[0-9]+)?/
    */
  }
  function calc(a, b, op) {
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

  window.onload = function () {
    var form = document.getElementById("submit");
    form.addEventListener("submit", function (e) {
      if (!isValid) {
        prompt("Por favor introduce valores válidos");
        return false;
      } else {
        parseInput(string);
        return false;
      }
    });
  };
}
