function solve() {

    let arrBtn = Array.from(document.querySelectorAll('#operations button'));

    arrBtn.forEach((button) => {
        button.addEventListener('click', takeNumber)
    });


    function takeNumber(arrBtn) {

        let stringOperation = arrBtn.target.innerText.toLowerCase();

        let number = Number(document.querySelector('#exercise input').value);
        let numberResult=number;

        if (number === null) {
            number = 0;
        }
       makeOperation(number, stringOperation);

        let p = document.getElementById('output');
        p.innerText = numberResult;


    }
    function makeOperation(number, stringOperation) {
        switch (stringOperation) {
            case 'chop': numberResult = number / 2
                break;
            case 'dice': numberResult = Math.sqrt(number);
                break;
            case 'spice': numberResult++;
                break;
            case 'bake': numberResult = number * 3;
                break;
            case 'fillet ': numberResult -= number * 0.2
                break;
        }
    }


}
