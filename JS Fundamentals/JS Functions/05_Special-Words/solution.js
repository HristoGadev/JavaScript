function solve() {
  let firstNum = Number(document.getElementById('firstNumber').value);
  let secondNum = Number(document.getElementById('secondNumber').value);
  let firststring = document.getElementById('firstString').value;
  let secondString = document.getElementById('secondString').value;
  let thirdString = document.getElementById('thirdString').value;
  let resultStr = document.getElementById('result');

  let resultString = '';
  for (let i = firstNum; i <= secondNum; i++) {

    getResultString(i);
  }

  function getResultString(i) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultString = `${i} ${firststring}-${secondString}-${thirdString}`;
      createParagr(resultString);
    }
    else if (i % 3 === 0) {
      resultString = `${i} ${secondString}`;
      createParagr(resultString);
    }
    else if (i % 5 === 0) {
      resultString = `${i} ${thirdString}`;
      createParagr(resultString);
    }
    else {
      resultString = `${i} `.toString();
      createParagr(resultString);
    }

    function createParagr(resultString) {
      let p = document.createElement('p');
      p.innerHTML = resultString;
      resultStr.appendChild(p);
    }

  }
}