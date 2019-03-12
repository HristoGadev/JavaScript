function getNext() {
    let number = Number(document.getElementById('num').value);

    let currentNum = number;
    console.log(currentNum)
    while (currentNum !== 1) {

        hailstoneSequence(number);

        let span = document.getElementById('result')
        span.textContent = ` ${currentNum}`;

        function hailstoneSequence(currentNum) {

            if (currentNum % 2 === 0) {
                currentNum = currentNum / 2;
            }
            else {
                currentNum = (3 * currentNum) + 1
            }
        }
    }
}