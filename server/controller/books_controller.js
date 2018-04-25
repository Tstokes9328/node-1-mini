let books = [];
let id = 0;


module.exports = {
    read: (req, res) => {
        res.send(books);
    },

    create: (req, res) => {
        const { title, author} = req.body
        let book = {
            id,
            title,
            author
        }
        id++
        books.push(book)
        res.send(books)
    },

    update: (req, res) => {
        let bookIndex = null
        const { id } = req.params
        const { title, author } = req.body
        books.forEach( (book, index) => {
            if(book.id === Number(id)){
                bookIndex = index;
            }
        })
        books[bookIndex] = {
            id: bookIndex,
            title: title || books[bookIndex].title,
            author: author || books[bookIndex].author
        }
        res.send(books)
    },

    delete: (req, res) => {
        const { id } = req.params
        const { title, author } = req.body
        books.forEach( (book, index) => {
            if(book.id === Number(id)){
                books.splice(index, 1)
            }
        })
        res.send(books)
    }

}