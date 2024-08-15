function generatePassword(length) {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const allCharacters = upperCase + lowerCase + numbers + symbols;
    length = Math.max(length, 8);

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    const output = document.getElementById("output");

    output.innerHTML = `<p>Contraseña generada: ${password}</p>`;
}

generatePassword(12);
