import styles from "./Gallery.module.scss"
import CardList from "../CardList/CardList"


const Gallery = ({query, setBooks, setResult, formState}) => {
    return (
        <div className={styles.Gallery}>
            <CardList query={query} setBooks={setBooks} setResult={setResult} formState={formState}></CardList>
        </div>
    )
}

export default Gallery