function solve(arr){
    let delimiter=arr[arr.length-1];
    let resultArr=[]
    for (let i=0; i<arr.length-1; i++){
        resultArr.push(arr[i])
    }
     console.log(resultArr.join(delimiter))
    

}
solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
)