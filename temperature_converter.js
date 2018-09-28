// Convert Kelvin to Celsius, then to Fahrenheit.

// Temperature in Kelvin
const kelvin = 293;

// Temperature in Celsius
const celsius = kelvin - 273;

// Temperature in Fahrenheit
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);