function solve(arr) {
    let resultArr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            resultArr.push(++count);
        }
        else {
            resultArr.pop();
            ++count;
        }

    };
    if (resultArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(resultArr.join('\n'));
    }

}
solve(['remove',
    'remove',
    'remove']



)