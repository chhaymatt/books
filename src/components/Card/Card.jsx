import styles from "./Card.module.scss"
import { NavLink } from "react-router-dom"

const Card = ({image, title, author, description, id}) => {
    // Default Values
    let titleDisplay = "No Title"
    let authorDisplay = "No Author"
    let descriptionDisplay = "No Description"
    let imageDisplay = "https://i.imgur.com/F1Ur8RN.png"

    if (image != undefined || image != null) {
        imageDisplay = image.thumbnail;
    }

    if (title != undefined || title != null) {
        titleDisplay = title;
    }

    if (author != undefined || author != null) {
        authorDisplay = author[0]
    }

    if (description != undefined || description != null) {
        descriptionDisplay = `${description.slice(0,120)}...`
    }

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