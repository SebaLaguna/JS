const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

function findTheOldest(people) {
    const oldest = people.reduce((oldestPerson, person) => {
        const personAge = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
        const oldestAge = (oldestPerson.yearOfDeath || new Date().getFullYear()) - oldestPerson.yearOfBirth;
        
        return personAge > oldestAge ? person : oldestPerson;
    });

    const oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
    
    const output = document.getElementById("output");
    output.innerHTML = `<p>La persona más anciana es ${oldest.name}, con una edad de ${oldestAge} años.</p>`;
}

findTheOldest(people);
