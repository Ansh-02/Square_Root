

function calculateSquareRoot() {
 
  var number = parseFloat(document.getElementById("number").value);

  
  if (isNaN(number) || number < 0) {
    alert("Please enter a valid non-negative number.");
    return;
  }

  
  var squareRoot = Math.sqrt(number);

  

  var resultElement = document.getElementById("result");
  resultElement.textContent = "Square Root: " + squareRoot.toFixed(4);
}
