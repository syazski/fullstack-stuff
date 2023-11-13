const dinner = {
    cheeseburger: 20,
    steak: 12,
    soup: 8,
    macAndCheese: 14,
    soupAndSalad: 16
};

//console.log(Object.keys(dinner));

//console.log(Object.values(dinner));

//console.log(dinner.cheeseburger + dinner.steak + dinner.soup + dinner.macAndCheese + dinner.soupAndSalad);

const prices = Object.values(dinner);
let totalCost = 0;
for (i = 0; i < prices.length; i++) {
    totalCost += prices[i];
}

console.log(totalCost);