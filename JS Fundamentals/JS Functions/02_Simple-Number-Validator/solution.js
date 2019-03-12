function validate() {

    document.querySelector('#exercise fieldset div button').addEventListener('click', checkNumber)

    let weightsArr = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum = 0;
    let stringResult = '';

    function checkNumber() {
        let inputNumber = document.querySelector('#exercise fieldset div input').value.toString();
        let lastDigit = Number(inputNumber[inputNumber.length - 1]);

        for (let i = 0; i < inputNumber.length - 1; i++) {
            let number = Number(inputNumber[i]);
            sum += (weightsArr[i] * number);
        }
        stringResult = isValid(sum, lastDigit);
        document.getElementById('response').textContent = stringResult;

    }
    function isValid(sum, lastDigit) {
        let reminder = sum % 11;
        
        if (reminder === 10) {
            reminder=0;
        }
         if (reminder === lastDigit) {
            return 'This number is Valid!';

        } else {
            return 'This number is NOT Valid!';
        }

    }



}
