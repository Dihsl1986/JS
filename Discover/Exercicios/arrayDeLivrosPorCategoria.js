/** 
 Baseado no array de livros por categoria abaixo,faça os seguintes desafios

 *Contar o número de categorias e o números de livros por categoria
 *Contar o número de autores
 *Mostrar os Livros do autor Agusto Cury
 *Transformar a função acima em uma função que ira receber o nome do autor Aguste desenvolver 
 os livros deste autor.

*/


const booksByCategory = [
    {
        category: "Riqueza",
        books:[
            {
                title: "Os segredos da mente milhonária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico pai pobre",
                author: "Roberto T. Kyozaki e Sharon L. Lechter",
            },
        ],
    },

    {
        category: "Inteligência emocional",
        books: [
            {
                title: "Você é insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7  habitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
       for(let book of category.books) {
           if(authors.indexOf(book.author) == -1) {
               authors.push(book.author)
           }
       }
    }

    console.log("Total authors", authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
       for(let book of category.books) {
           if(book.author === author) {
               books.push(book.title)
           }
       }
    }

    console.log(`author's books: ${author}: ${books.join(", ")} `)
}
booksOfAuthor("George S. Clason");