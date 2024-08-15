function getSum(nums) {
    const sum = nums.reduce((total, num) => total + num, 0);
    const output = document.getElementById("output");
    output.innerHTML = `<p>La suma de los números es: ${sum}</p>`;
}

getSum([1, 2, 3, 4, 5]);
