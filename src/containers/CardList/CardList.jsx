import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Books from "../../data.json"
import { getData } from "../../services/books";

const CardList = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        setBooks(getData("Hello"))
    },[])

    return (
        <div>
            {books && books.map((book, index) => (
            <Card
                key={index} 
                image={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}>
            </Card>
            ))
        
            }</div>    
    )
}

export default CardList