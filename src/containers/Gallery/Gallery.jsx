import styles from "./Gallery.module.scss"
import CardList from "../CardList/CardList"

const Gallery = ({query, books, setBooks, setResult, formState, setFormState}) => {
    return (
        <>
            <div className={styles.Gallery}>
                <CardList query={query} books={books} setBooks={setBooks} setResult={setResult} formState={formState} setFormState={setFormState}></CardList>
            </div>
        </>
    )
}

export default Gallery