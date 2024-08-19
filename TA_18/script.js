
const people = [
    "Carlos",
    "Ana",
    "María",
    "Pedro",
    "Lucía",
    "Juan",
    "Carmen"
];

const searchInput = document.getElementById("searchInput");
const personList = document.getElementById("personList");

function renderList(people) {
    personList.innerHTML = '';
    people.forEach(person => {
        const listItem = document.createElement("li");
        listItem.textContent = person;
        personList.appendChild(listItem);
    });
}

renderList(people);

searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase();
    
    const filteredPeople = people.filter(person => person.toLowerCase().includes(searchText));
    
    renderList(filteredPeople);
});
