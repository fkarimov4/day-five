const usd = 1235
const baseCurrencyName = 'USD'
const convertedCurrencyName = 'Turkish liras'
const usdToTl = 13.46 // Turkish lira


function currencyConverter(baseCurrencyAmount, conversionRate) {
    return (baseCurrencyAmount * conversionRate).toFixed(2)
}

const convertedAmount = currencyConverter(usd, usdToTl)
console.log(`${usd} ${baseCurrencyName} is equivalent to ${convertedAmount} ${convertedCurrencyName}.`);