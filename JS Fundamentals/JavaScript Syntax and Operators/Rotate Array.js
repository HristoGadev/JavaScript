function solve(arr) {
    let rotations = arr.pop();
    let currentElem = '';
    for (let i = 0; i < rotations; i++) {
        currentElem = arr.pop();
        arr.unshift(currentElem);
    }
    console.log(arr.join(' '));
}
solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']

)