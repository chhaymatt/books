import styles from "./Card.module.scss"

const Card = ({image, title, author, description}) => {
    let titleDisplay = "No Title"
    let authorDisplay = "No Author"
    let descriptionDisplay = "No Description"

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
        <div className={styles.Card}>
            <img className={styles.Card__Image} src={image}/>
            <div className={styles.Card__Content}>
                <h3 className={styles.Card__Title}>{titleDisplay}</h3>
                <p className={styles.Card__Author}>{authorDisplay}</p>
                <p className={styles.Card__Description}>{descriptionDisplay}</p>
            </div>
        </div>
    )
}

export default Card