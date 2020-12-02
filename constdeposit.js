const deposit = 100;
const rate = 20;
const threshold = 170;
const depositProfit=(deposit, rate, threshold)=>Math.ceil(Math.log(threshold/deposit)/Math.log(Math.pow(rate/100/1 +1, 1)))

depositProfit(deposit, rate, threshold)

///challenges