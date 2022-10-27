import Star from "../Star/Star"
import styles from "./Rating.module.scss"

const Rating = ({averageRating, ratingsCount}) => {
    let stars = "star"
    const reviewText = ratingsCount === 1 ? "review" : "reviews"
    const starText = averageRating === 1 ? "star" : "stars"

    return (
        <div className={styles.Rating}>
            <Star averageRating={averageRating}></Star>
            <p className={styles.Rating__Text}>{averageRating} {starText} ({ratingsCount} {reviewText})</p>
        </div>
    )
}

export default Rating