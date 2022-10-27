import styles from "./Modal.module.scss"
import { faTableCellsLarge, faXmark, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Rating/Rating";
import Divider from "../Divider/Divider";
import { languageCodes } from "../../services/languageCodes";
import { useNavigate } from "react-router-dom";

const Modal = ({image, title, subtitle, authors, description, averageRating, ratingsCount, categories, publishedDate, pageCount, publisher, language}) => {

    const navigate = useNavigate()

    // Default Values
    let titleDisplay = "No Title"
    let authorDisplay = "No Author"
    let descriptionDisplay = "No Description"
    let imageDisplay = "https://i.imgur.com/F1Ur8RN.png"
    let subtitleDisplay = null
    let averageRatingDisplay = null
    let ratingsCountDisplay = null
    let categoriesDisplay = "No Category"
    let publishedDateDisplay = "Year"
    let publishedYearDisplay = null
    let pageCountDisplay = null
    let publisherDisplay = null
    let languageCodeDisplay = null
    let languageFullDisplay = null

    if (image != undefined) {
        imageDisplay = image.thumbnail
    }

    if (title != undefined) {
        titleDisplay = title
    }
    
    if (subtitle != undefined) {
        subtitleDisplay = subtitle
    }

    if (authors != undefined) {
        authorDisplay = authors.join(", ")
    }

    if (description != undefined) {
        descriptionDisplay = description.replace(/<\/?[^>]+(>|$)/g, "") // Remove unexpected HTML
    }

    if (averageRating != undefined) {
        averageRatingDisplay = averageRating
    }

    if (ratingsCount != undefined) {
        ratingsCountDisplay = ratingsCount
    }

    if (categories != undefined) {
        categoriesDisplay = categories.join(" • ")
    }

    if (publishedDate != undefined) {
        publishedYearDisplay = publishedDate.slice(0,4)
    }
    
    if (pageCount != undefined) {
        pageCountDisplay = pageCount
    }

    if (publisher != undefined) {
        publisherDisplay = publisher
    }

    if (language != undefined) {
        languageCodeDisplay = language.toUpperCase()
        languageFullDisplay = languageCodes[language.toLowerCase()]
    }



    return (
        <div className={styles.Modal}>
             <div className={styles.Modal__Clear} onClick={() => navigate("/")}>
                <FontAwesomeIcon className={styles.Modal__Icons} icon={faXmark} />
            </div>
            <div className={styles.Modal__Top}>
                <div>
                    <img src={imageDisplay} alt={titleDisplay} />
                </div>
                <div className={styles.Modal__TopContent}>
                    <h2 className={styles.Modal__Title}>{titleDisplay}</h2>
                    <h3 className={styles.Modal__Subtitle}>{subtitleDisplay}</h3>
                    <p className={styles.Modal__Authors}>{authorDisplay}</p>
                    {averageRating && <Rating averageRating={averageRatingDisplay} ratingsCount={ratingsCountDisplay}></Rating>}
                </div>
            </div>
            <Divider></Divider>
            <div>
                <h3 className={styles.Modal__PublisherDescription}>Publisher Description</h3>
                <p className={styles.Modal__PublisherDescriptionText}>{descriptionDisplay}</p>
            </div>
            <Divider></Divider>
            <div className={styles.Modal__DescriptionGroups}>
                <div className={styles.Modal__DescriptionGroup}>
                    <h4 className={styles.Modal__DescriptionKey}>CATEGORY</h4>
                    <FontAwesomeIcon className={styles.Modal__DescriptionValue} icon={faTableCellsLarge} />
                    <p className={styles.Modal__DescriptionInfo}>{categoriesDisplay}</p>
                </div>
                <div className={styles.Modal__DescriptionGroup}>
                    <h4 className={styles.Modal__DescriptionKey}>PUBLISHED</h4>
                    <h5 className={styles.Modal__DescriptionValue}>{publishedYearDisplay}</h5>
                    <p className={styles.Modal__DescriptionInfo}>{publishedDateDisplay}</p>
                </div>
                <div className={styles.Modal__DescriptionGroup}>
                    <h4 className={styles.Modal__DescriptionKey}>LENGTH</h4>
                    <h5 className={styles.Modal__DescriptionValue}>{pageCountDisplay}</h5>
                    <p className={styles.Modal__DescriptionInfo}>Pages</p>
                </div>
                <div className={styles.Modal__DescriptionGroup}>
                    <h4 className={styles.Modal__DescriptionKey}>PUBLISHER</h4>
                    <FontAwesomeIcon className={styles.Modal__DescriptionValue} icon={faBook} />
                    <p className={styles.Modal__DescriptionInfo}>{publisherDisplay}</p>
                </div>
                <div className={styles.Modal__DescriptionGroup}>
                    <h4 className={styles.Modal__DescriptionKey}>LANGUAGE</h4>
                    <h5 className={styles.Modal__DescriptionValue}>{languageCodeDisplay}</h5>
                    <p className={styles.Modal__DescriptionInfo}>{languageFullDisplay}</p>
                </div>
            </div>

        </div>
    )
}

export default Modal
