function solve(arr) {
    let sortedArr =arr.sort().sort((a, b) => a.length > b.length) 
   
    console.log(sortedArr.join('\n'));
}
solve(['alpha',
    'beta',
    'gamma']
)