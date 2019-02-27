function solve(args){

    let income=0;

    for (let i = 0; i < args.length; i++) {
        let tokens = args[i].split(', ');
        let money=tokens[0];
        let drinkName=tokens[1];
        let price=0;

        if (drinkName==='coffee'){
            let coffeeKind=tokens[2];
            if (coffeeKind==='caffeine'){
                price=0.8;
            }
            else {
                price=0.9;
            }
            if(tokens[3]==='milk'){
                price += 0.1
            }
        }
        else {
            price=0.8;
            if (tokens[2]=== 'milk'){
                price +=  0.1;
            }
        }
        let sugarQuantity=tokens[tokens.length-1];

        if (+sugarQuantity !== 0){
            price += 0.10;
        }
        if (+money >= price) {

            let change = +money-price;
            income += price;
            console.log(`You ordered ${drinkName}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
        }
        else{
            let moneyNeeded=price-money;
            console.log(`Not enough money for ${drinkName}. Need ${moneyNeeded.toFixed(2)}$ more.`);
        }

    }
    console.log(`Income Report: ${income.toFixed(2)}$`)
}
solve(['8.00, coffee, decaf, 4','1.00, tea, 2'])

