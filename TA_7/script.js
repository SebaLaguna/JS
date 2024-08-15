const books = [
    {
        title: 'Book1',
        author: 'Author1'
    },
    {
        title: 'Book2',
        author: 'Author2'
    },
    {
        title: 'Book3',
        author: 'Author3'
    }
];

function getTheTitles(books) {
    const titles = books.map(book => book.title);
    const output = document.getElementById('output');
    titles.forEach(title => {
        output.innerHTML += `<p>${title}</p>`;
    });
}

getTheTitles(books);
