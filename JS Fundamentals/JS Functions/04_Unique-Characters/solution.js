function solve() {
  let inputText= document.getElementById('string').value;
  let uniqString=''

  
  for(let i=0; i<inputText.length; i++){
    extractWhiteSpaces(i);
    extractUniqueSymbol(i);
  }

  function extractWhiteSpaces(i){
    if(inputText[i]===' '){
      uniqString+=inputText[i]
    }
  }
  function extractUniqueSymbol(i){
    let chr=inputText[i];
    if(uniqString.indexOf(chr)===-1){
      uniqString+=inputText[i]
    }
  }

  document.getElementById('result').textContent=uniqString;
}