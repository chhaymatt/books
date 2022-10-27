import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { getData } from "../../services/books";

const CardList = ({query, books, setBooks, result, setResult}) => {
    // const [books, setBooks] = useState([])

    // Created another async function to await returned promise from getData
    // const data = async () => {
    //     setBooks(await getData(query))
    // }

    useEffect(() => {
        getData(query).then((books) => setBooks(books)).catch(err => setResult(err.message))
    },[query])

    return (
        books && books.map((book, index) => (
            <Card
                key={index} 
                image={book.volumeInfo.imageLinks}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                id={book.id}
                >
    
            </Card>
        ))   
    )
}

export default CardList