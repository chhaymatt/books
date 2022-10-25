import { useState, useEffect } from "react";
import BookModal from "../../components/BookModal/BookModal";
import { getData } from "../../services/books";

const ModalList = () => {
    const [books, setBooks] = useState([])

    // Created another async function to await returned promise from getData
    const data = async () => {
        setBooks(await getData("Harry Potter"))
    }

    useEffect(() => {
        data()
        console.log(books)
    },[])

    return (
        books && books.map((book, index) => (
            <BookModal
                key={index} 
                image={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                averageRating={book.volumeInfo.averageRating}
                ratingsCount={book.volumeInfo.ratingsCount}
                categories={book.volumeInfo.categories}
                publishedDate={book.volumeInfo.publishedDate}
                pageCount={book.volumeInfo.pageCount}
                publisher={book.volumeInfo.publisher}
                language={book.volumeInfo.language}

                >
            </BookModal>
        ))   
    )
}

export default ModalList