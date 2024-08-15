function duplicates(nums) {
    const frequencyMap = new Map();
    nums.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });
    const duplicateCount = [...frequencyMap.values()].filter(count => count > 1).length;
    const output = document.getElementById("output");
    output.innerHTML = `<p>Cantidad de elementos duplicados: ${duplicateCount}</p>`;
}

duplicates([1, 2, 2, 3, 4, 4, 4, 5]);
