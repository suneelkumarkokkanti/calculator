function appendCharacter(char) {
    document.getElementById("display").value += char;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteLastChar() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    var display = document.getElementById("display");
    var expression = display.value;
    var result = eval(expression);
    display.value = result;
  }
  
