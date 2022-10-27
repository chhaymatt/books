import styles from "./Gallery.module.scss"
import CardList from "../CardList/CardList"


const Gallery = ({query, books, setBooks, result, setResult}) => {
    return (
        <div className={styles.Gallery}>
            <CardList query={query} books={books} setBooks={setBooks} result={result} setResult={setResult}></CardList>
        </div>
    )
}

export default Gallery