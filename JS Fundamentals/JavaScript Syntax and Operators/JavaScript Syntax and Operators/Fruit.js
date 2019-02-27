function solve(fruitName,weightInGrams,pricePerKg) {

    let weightInKg=weightInGrams/1000;
    let totalPrice=weightInKg * pricePerKg;

    console.log(`I need ${totalPrice.toFixed(2)} leva to buy ${weightInKg.toFixed(2)} kilograms ${fruitName}.`);
}
solve('orange', 2500, 1.80)