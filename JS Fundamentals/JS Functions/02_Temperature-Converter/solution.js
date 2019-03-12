function solve() {
  let numberInput = document.getElementById('num1').value;
  let stringInput = document.getElementById('type').value.toLowerCase();
 

  function calculateDegrees(numberInput, stringInput) {
    if (stringInput === 'celsius') {

      return calculatedDegree = Math.round((numberInput * 1.8) + 32);
    }
    else if (stringInput == 'fahrenheit') {
      return calculateDegrees = Math.round((numberInput - 32) / 1.8);
    }
    else if(isNaN(numberInput)){
      return'Error!';
    }
    else {
      return'Error!';
    }
  }
  document.getElementById('result').textContent=calculateDegrees(numberInput,stringInput);
}