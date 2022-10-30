import styles from "./Card.module.scss"
import { NavLink } from "react-router-dom"

const Card = ({image, title, author, description, id}) => {
    const imageDisplay = image ? image.thumbnail : "https://i.imgur.com/F1Ur8RN.png"
    const titleDisplay = title ? title : "No title"
    const authorDisplay = author ? author : "No author"
    const descriptionDisplay = description ? `${description.slice(0,120)}...` : "No description"

    return (
        <NavLink to={`search/${id}`}>
            <div className={styles.Card}>
                <img className={styles.Card__Image} src={imageDisplay}/>
                <div className={styles.Card__Content}>
                    <h3 className={styles.Card__Title}>{titleDisplay}</h3>
                    <p className={styles.Card__Author}>{authorDisplay}</p>
                    <p className={styles.Card__Description}>{descriptionDisplay}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default Card