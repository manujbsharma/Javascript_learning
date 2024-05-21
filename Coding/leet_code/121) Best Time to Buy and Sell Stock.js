let prices = [7, 1, 5, 3, 6, 4]

let maxProfit = 0
let pairMaxProfit = []

console.log(pairMaxProfit)
console.log(maxProfit)

for (let i = 0; i < prices.length - 2; i++) {
    console.log("enters into i loop")
    for (let j = i + 1; j < prices.length-1 && prices[j] > prices[i]; j++) {
        console.log("enters into j loop")
            if ((prices[j] - prices[i]) > maxProfit) {
                console.log("enters into MAIN loop")
                maxProfit = Math.max(maxProfit, (prices[j] - prices[i]))
                pairMaxProfit = [prices[i], prices[j]]
            }
        else continue
    }

}

console.log(pairMaxProfit)
console.log(maxProfit)

//--------------------------------------------------------------------------//
//------------------------------- WAY 2 ------------------------------------//
//--------------------------------------------------------------------------//

let maxProfit1 = 0
i = 0;
j = 1;

while ( j < prices.length) {
    if(prices[i] < prices[j])  {
        maxProfit1 = Math.max(maxProfit1, (prices[j]-prices[i]))
    }  
    else {
        i = j;
    }
    j++
}

console.log(maxProfit1)