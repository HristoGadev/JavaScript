function greatestCD() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    let gcd = 0;

    gcd_two_numbers(num1, num2);

    document.getElementById('result').innerText = ` ${gcd}`;

    function gcd_two_numbers(num1, num2) {
        if ((typeof num1 !== 'number') || (typeof num2 !== 'number'))
            return false;
        num1 = Math.abs(num1);
        num2 = Math.abs(num2);
        while (num2) {
            var temp = num2;
            num2 = num1 % num2;
            num1 = temp;
        }
        gcd = num1;
    }

}
