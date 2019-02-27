function solve(args) {

    let food={};

    for (let i = 0; i < args.length; i+=2) {

            let foodName=args[i];
            let foodCalories=args[i+1];

        food[foodName]= +foodCalories;
    }
    console.log(food);
}
solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52])