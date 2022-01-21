const tempC = 8.5

function convertTempCtoF(degreesC){
    return degreesC * 1.8 + 32
}

const tempF = convertTempCtoF(tempC)
console.log(`${tempC}°C is equivalent to ${tempF}°F`);