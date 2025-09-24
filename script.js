
var formYear
var form


function verificar() {
  //var date = new Date();
  //var year = date.getFullYear();
  var formYear = document.getElementById("txtyear");
  var result = document.getElementById("result");
  var compiledNumber=0;
  if (formYear.value.length == 0) {
    window.alert("Invalid input. Please enter a valid number.");
  } else {
    compiledNumber = Number(formYear.value).toString(2);
  }
  result.innerHTML = `The number to compiled is ${compiledNumber}`;
}

  function verificar2() {
  var text = document.getElementById("txtCompiler");
  var result2 = document.getElementById("result2");
    var compiledText;
    if (text.value.length == 0) {
      window.alert("Invalid input.");
    } else { 
compiledText = text.value.split("")
resultCompiled = compiledText.map(char => char.charCodeAt(0).toString(2).padStart(8, "0") )
    }
    result2.innerHTML = `The text to compiled is ${resultCompiled}`;
  

}

