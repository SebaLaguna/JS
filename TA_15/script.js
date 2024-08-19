const input = document.getElementById("itemInput");
const addButton = document.getElementById("addItemButton");
const removeButton = document.getElementById("removeItemButton");
const itemList = document.getElementById("itemList");

addButton.addEventListener("click", function() {

    const itemText = input.value;

    if (itemText.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = itemText;
        itemList.appendChild(listItem);
        input.value = "";
    }
});

removeButton.addEventListener("click", function() {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild);
    }
});
