let boughtCandyPrices = [];

function addCandy(candyType, weight) {
    const candyPrices = {
        "sweet": 0.5,
        "chocolate": 0.7,
        "toffee": 1.1,
        "chewing-gum": 0.03
    };

    const pricePerGram = candyPrices[candyType];
    if (pricePerGram) {
        const totalPrice = pricePerGram * weight;
        boughtCandyPrices.push(totalPrice);
    } else {
        console.log("Invalid candy type");
    }
}

function canBuyMoreCandy() {
    const amountToSpend = Math.random() * 100;
    let totalSpent = 0;
    for (let price of boughtCandyPrices) {
        totalSpent += price;
    }
    if (totalSpent < amountToSpend) {
        console.log("You can buy more, so please do!");
        return true;
    } else {
        console.log("Enough candy for you!");
        return false;
    }
}

// Example of the usage
addCandy("sweet", 20);
addCandy("chocolate", 30);
addCandy("toffee", 10);
addCandy("chewing-gum", 50);

canBuyMoreCandy();