export default function handler(req,res) {
    const id = req.query.id;

    const books = [
        {
            id:"1",
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            imgUrl: "/assets/1.jpg",
            linkToPurchase:"https://www.amazon.co.uk/Hobbit-J-R-Tolkien-ebook/dp/B002RI9ZY0/ref=sr_1_2?keywords=hobbit&qid=1675964182&s=books&sprefix=hobbit%2Cstripbooks%2C93&sr=1-2"
        },
        {
            id:"2",
            title: "The Fellowship of the Ring",
            author: "J.R.R Tolkien",
            imgUrl: "/assets/2.jpg",
            linkToPurchase:"https://www.amazon.co.uk/Lord-Rings-J-R-Tolkien/dp/0261103253"
        },
        {
            id:"3",
            title: "Born a Crime",
            author: "Trevor Noah",
            imgUrl: "/assets/3.jpg",
            linkToPurchase: "https://www.amazon.co.uk/Born-Crime-Stories-African-Childhood/dp/1473635306"
            
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