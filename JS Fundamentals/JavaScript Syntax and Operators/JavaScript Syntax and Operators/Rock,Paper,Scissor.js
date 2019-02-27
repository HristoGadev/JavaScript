const getUserChoice=(userInput)=>{
  userInput = userInput.toLowerCase();
  
  if(userInput==='rock' || userInput==='paper'||userInput==='scissors'){
    return userInput;
}else{
  console.log('Not such a choice !')
}
}
let getComputerChoice=()=>{
  Math.floor(Math.random()*2);
  
  switch(getComputerChoice){
  case 0: return 'rock';
    break;
  case 1: return 'paper';
    break;
  case 2: return 'scissors';
    break;
} 
}
getUserChoice('rock')
console.log(getUserChoice('rock'))
console.log(getComputerChoice())