function solve() {
  let inputStr = document.getElementById('str').value;
  let inputTextr = document.getElementById('text').value;
  let outputElement=document.getElementById('result');

  let stringMsg = stringMatch(inputStr, inputTextr);
  let longtitude = ''
  let latitude = ''
  coordinationMatch(inputTextr);
 
  appendParent(longtitude);
  appendParent(latitude);
  appendParent(stringMsg);

  function stringMatch(str, text) {
    let regex =new RegExp (`${str}(.*?)${str}`,"g");

    let stringMatchRes = regex.exec(text);
    let stringResult = stringMatchRes[1];
    return `Message: ${stringResult}`;
  }
  function coordinationMatch(text) {
    let regex = /(north|east)[\s\S]*?([\d]{2})[^,]*?,[^,]*?([\d]{6})/gi;
    let m;

    while ((m = regex.exec(text)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      let direction = m[1];
      if (direction.toLowerCase() === 'north') {
        longtitude = `${m[2]}.${m[3]} ${direction[0].toLocaleUpperCase()}`;
      } else {
        latitude = `${m[2]}.${m[3]} ${direction[0].toLocaleUpperCase()}`;
      }

    }
  }
  function appendParent(text) {
    let p=document.createElement('p')
    p.textContent=text;
    outputElement.appendChild(p)
  }
}

