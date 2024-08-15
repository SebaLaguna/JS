function convertToCelsius(temp) {
    const celsius = ((temp - 32) * 5/9).toFixed(1);
    document.getElementById('output').innerHTML += `<p>${temp}°F es igual a ${celsius}°C</p>`;
}

function convertToFahrenheit(temp) {
    const fahrenheit = ((temp * 9/5) + 32).toFixed(1);
    document.getElementById('output').innerHTML += `<p>${temp}°C es igual a ${fahrenheit}°F</p>`;
}

convertToCelsius(100); 
convertToFahrenheit(37.8); 
