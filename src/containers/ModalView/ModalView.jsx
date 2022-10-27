import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { getBookData } from "../../services/books";
import Modal from "../../components/Modal/Modal";
import styles from "./ModalView.module.scss"

const ModalView = () => {
    const { id } = useParams()

    const [book, setBook] = useState([])

    useEffect(() => {
        getBookData(id).then((data) => setBook(data.volumeInfo))
    },[])

    return (
        <div className={styles.ModalView}>
            {book && <Modal
                image={book.imageLinks} 
                title={book.title}
                subtitle={book.subtitle}
                authors={book.authors}
                description={book.description}
                averageRating= {book.averageRating}
                ratingsCount={book.ratingsCount}
                categories={book.categories}
                publishedDate={book.publishedDate}
                pageCount={book.pageCount}
                publisher={book.publisher}
                language={book.language}
            >
            </Modal>}
        </div>
    )
}

export default ModalView