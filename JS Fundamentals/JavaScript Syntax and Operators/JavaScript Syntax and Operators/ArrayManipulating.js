function main(input) {
    let resultArr=[];
    let arr = Array.from(input);

    for (let i = 0; i < arr.length; i++) {

        if (typeof (arr[i]) === 'number'){

            resultArr.push(arr[i]);
        }
        if(typeof(arr[i])==='object'){

            if (typeof (arr[i]) === 'number'){

                resultArr.push(arr[i]);
        }
    }
}


}
main(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount: 10 }, [10, 20, 30, 40]]);