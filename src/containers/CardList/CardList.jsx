import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { getData } from "../../services/books";

const CardList = () => {
    const [books, setBooks] = useState([])

    // Created another async function to await returned promise from getData
    const data = async () => {
        setBooks(await getData("Harry Potter"))
    }

    useEffect(() => {
        // setBooks(getData("Harry Potter")) // PROBLEM
        // getData("Harry Potter").then((books) => setBooks(books)) // Other option
        data()
    },[])

    return (
        books && books.map((book, index) => (
            <Card
                key={index} 
                image={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}>
            </Card>
        ))   
    )
}

export default CardList