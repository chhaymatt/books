import styles from "./Modal.module.scss"
import { faTableCellsLarge, faXmark, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Rating/Rating";
import Divider from "../Divider/Divider";
import { languageCodes } from "../../services/languageCodes";
import { useNavigate } from "react-router-dom";
import DetailGroup from "../DetailGroup/DetailGroup";

const Modal = ({image, title, subtitle, authors, description, averageRating, ratingsCount, categories, publishedDate, pageCount, publisher, language}) => {
    const navigate = useNavigate()
    const DOMPurify = require('dompurify')(window);

    // Default Values
    let titleDisplay = "No Title"
    let authorDisplay = "No Author"
    let descriptionDisplay = "No Description"
    let imageDisplay = "https://i.imgur.com/F1Ur8RN.png"
    let subtitleDisplay = null
    let averageRatingDisplay = null
    let ratingsCountDisplay = null
    let categoriesDisplay = "No Category"
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
        descriptionDisplay = description;
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
            <div className={styles.Modal__Clear} onClick={() => navigate("/books")}>
                <FontAwesomeIcon className={styles.Modal__Icon} icon={faXmark} />
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
                <p className={styles.Modal__PublisherDescriptionText} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(descriptionDisplay)}}></p>
            </div>
            <Divider></Divider>
            <div className={styles.Modal__DetailGroups}>
                <DetailGroup heading="Category" value={<FontAwesomeIcon className={styles.DetailGroup__Value} icon={faTableCellsLarge}/>} info={categoriesDisplay}></DetailGroup>
                <DetailGroup heading="Published" value={publishedYearDisplay} info="Year"></DetailGroup>
                <DetailGroup heading="Length" value={pageCountDisplay} info="Pages"></DetailGroup>
                <DetailGroup heading="Publisher" value={<FontAwesomeIcon className={styles.DetailGroup__Value} icon={faBook} />} info={publisherDisplay}></DetailGroup>
                <DetailGroup heading="Language" value={languageCodeDisplay} info={languageFullDisplay}></DetailGroup>
            </div>
        </div>
    )
}

export default Modal
