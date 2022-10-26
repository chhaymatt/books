import styles from "./Gallery.module.scss"
import CardList from "../CardList/CardList"


const Gallery = ({query}) => {
    return (
        <div className={styles.Gallery}>
            <CardList query={query}></CardList>
        </div>
    )
}

export default Gallery