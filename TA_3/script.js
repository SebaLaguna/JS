function removeFromArray(arreglo, item) {
    document.getElementById('output').innerHTML += `<p>Array original: [${arreglo.join(', ')}]</p>`;
    const newArray = arreglo.filter(element => element !== item);
    document.getElementById('output').innerHTML += `<p>Array después de eliminar ${item}: [${newArray.join(', ')}]</p>`;
}

const miArray = [1, 2, 3, 4, 5];
removeFromArray(miArray, 3);
