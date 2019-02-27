function solve(number) {

    let isEqual = true;
    number = number.toString();
    let firstNum = number[0];
    let stringSum = +firstNum;

    for (let i = 1; i < number.length; i++) {
        if (number[i] !== firstNum) {
            isEqual = false;
        }
        stringSum += +number[i];
    }

    console.log(isEqual);
    console.log(stringSum);
}
solve(1111)
solve(11211)