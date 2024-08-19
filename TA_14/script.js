const input = document.getElementById("itemInput");
const button = document.getElementById("addItemButton");
const itemList = document.getElementById("itemList");

button.addEventListener("click", function() {

    const itemText = input.value;

    if (itemText.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = itemText;
        itemList.appendChild(listItem);
        input.value = "";
    }
});
