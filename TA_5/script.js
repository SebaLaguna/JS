function leapYears(año) {
    let esBisiesto = false;
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
        esBisiesto = true;
    }
    document.getElementById('output').innerHTML = `<p>¿El año ${año} es bisiesto? ${esBisiesto}</p>`;
}

leapYears(2024);
