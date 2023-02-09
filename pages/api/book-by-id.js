export default function handler(req,res) {
    const id = req.query.id;

    const books = [
        {
            id:"1",
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            imgUrl: "/assets/1.jpg"
        },
        {
            id:"2",
            title: "The Fellowship of the Ring",
            author: "J.R.R Tolkien",
            imgUrl: "/assets/2.jpg"
        },
        {
            id:"3",
            title: "Born a Crime",
            author: "Trevor Noah",
            imgUrl: "/assets/3.jpg"
        }
    ];

    const foundBook = books.find((book) => {
        if (book.id === id) {
            return true;
        }
        else {
            return false;
        }
    });

    res.json({book: foundBook});
}