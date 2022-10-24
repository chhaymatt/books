import Star from "../Star/Star"
import styles from "./Rating.module.scss"

const Rating = () => {
    return (
        <div className={styles.Rating}>
            <Star></Star>
            <p className={styles.Rating__Text}>3.5 (136 reviews)</p>
        </div>
    )
}

export default Rating