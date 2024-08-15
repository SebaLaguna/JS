function getOdds(nums) {
    const odds = nums.filter(num => num % 2 !== 0);
    
    const output = document.getElementById("output");
    
    output.innerHTML = `<p>Números impares: ${odds.join(', ')}</p>`;
}

getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]);
