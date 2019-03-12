function solve() {
  let input = document.getElementById('str').value.split('');

  let sum = '';
  let charToTake = '';
  while (charToTake.length > 2) {
    sum = sumCharacters(input).toString().split('');
    charToTake = sumCharacters(sum);
  }

  function sumCharacters(text) {
    return text.reduce((a, b) => Number(a) + Number(b));
  }

  input.splice(0, charToTake);
  input.splice(input.length - charToTake, charToTake)
  let numberArr = []

  for (let i = 0; i <= input.length + 1; i++) {
    let binaryElement = input
      .splice(input[0], 8)
      .join('');

    let numberBinary = parseInt(binaryElement, 2);
    numberArr.push(numberBinary);
  }
  let parsedText = String.fromCharCode(...numberArr);

  document.getElementById('result').textContent = parsedText;
}
