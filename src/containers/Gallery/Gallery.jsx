import styles from "./Gallery.module.scss"
import CardList from "../CardList/CardList"


const Gallery = ({input}) => {
    return (
        <div className={styles.Gallery}>
            <CardList input={input}></CardList>
        </div>
    )
}

export default Gallery