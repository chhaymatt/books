import styles from "./Gallery.module.scss"
import CardList from "../CardList/CardList"


const Gallery = () => {
    return (
        <div className={styles.Gallery}>
            <CardList></CardList>
        </div>
    )
}

export default Gallery