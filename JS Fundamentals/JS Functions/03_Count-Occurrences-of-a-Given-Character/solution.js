function solve() {
  let stringInput=document.getElementById('string').value
  let characterInput=document.getElementById('character').value

  let count = 0;

  for (let i = 0; i < stringInput.length; i++) {

    if (stringInput[i] === characterInput) {
      count++;
    }
  }
  function result(count) {
    if (count % 2 === 0){
      return 'even';
    }
    else{
      return 'odd';
    }
  }
  document.getElementById('result').textContent= `Count of ${characterInput} is ${result(count)}.`;
}
