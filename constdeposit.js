
//steps to work it out
// let amount = Math.log(threshold/deposit)

// let interest=rate/100

// let periodicRate =interest/1 +1

// let raiseBase = Math.pow(periodicRate, 1)

// let log = Math.log(raiseBase)

// let result = Math.ceil(amount/log)

// return result.

const deposit = 100;
const rate = 20;
const threshold = 170;
const depositProfit=(deposit, rate, threshold)=>Math.ceil(Math.log(threshold/deposit)/Math.log(Math.pow(rate/100/1 +1, 1)))

depositProfit(deposit, rate, threshold)

