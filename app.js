// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar){
   let dolarToEuro = valueInDollar / 1.07;
   let euroToYen = dolarToEuro * 156.5;
   return Math.floor(euroToYen * 100) / 100;
}

const fromYenToPound = function(valueInYen){
    let yenToEuro = valueInYen / 156.5;
    let euroToPound = yenToEuro * 0.87;
    return Math.floor(euroToPound * 100) / 100;
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }