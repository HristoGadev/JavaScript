function solve(number1,number2) {
    let minNumber=Math.min(number1,number2);
    let maxNumber=Math.max(number1,number2);
    let currentNumber=0;

    for (let i=0;i<=minNumber;i++){
        if (minNumber%i===0 && maxNumber%i===0) {
            currentNumber=i;
        }
    }

    console.log(currentNumber);

}
solve(2154, 458)