import styles from "./BookModal.module.scss"
import { faBriefcase, faXmark, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Rating/Rating";
import Divider from "../Divider/Divider";

const BookModal = ({image, title, author, description}) => {
    // Default Values
    let titleDisplay = "No Title"
    let authorDisplay = "No Author"
    let descriptionDisplay = "No Description"
    let imageDisplay = "https://i.imgur.com/F1Ur8RN.png"

    if (image != undefined || image != null) {
        imageDisplay = imageDisplay;
    }

    if (title != undefined || title != null) {
        titleDisplay = title;
    }

    if (author != undefined || author != null) {
        authorDisplay = author[0]
    }

    if (description != undefined || description != null) {
        descriptionDisplay = description;
    }


    return (
        <div className={styles.BookModal}>
            <div className={styles.BookModal__Clear}>
                <FontAwesomeIcon className={styles.BookModal__Icons} icon={faXmark} />
            </div>
            <div className={styles.BookModal__Top}>
                <div>
                    <img src="https://www.booktopia.com.au/covers/big/9780385342735/0000/the-google-story.jpg" alt="" />
                </div>
                <div className={styles.BookModal__TopContent}>
                    <h2 className={styles.BookModal__Title}>The Google Story</h2>
                    <h3 className={styles.BookModal__Subtitle}>Subtitle</h3>
                    <p>David A. Vise, Mark Malseed</p>
                    <Rating></Rating>
                </div>
            </div>
            <Divider></Divider>
            <div>
                <h3 className={styles.BookModal__PublisherDescription}>Publisher Description</h3>
                <p className={styles.BookModal__PublisherDescriptionText}>Here is the story behind one of the most remarkable Internet
  successes of our time. Based on scrupulous research and extraordinary access
  to Google, ...</p>
            </div>
            <Divider></Divider>
            <div className={styles.BookModal__DescriptionGroups}>
                <div className={styles.BookModal__DescriptionGroup}>
                    <h4 className={styles.BookModal__DescriptionKey}>CATEGORY</h4>
                    <FontAwesomeIcon className={styles.BookModal__DescriptionValue} icon={faBriefcase} />
                    <p className={styles.BookModal__DescriptionInfo}>Business & Economics / Entrepreneurship</p>
                </div>
                <div className={styles.BookModal__DescriptionGroup}>
                    <h4 className={styles.BookModal__DescriptionKey}>PUBLISHED</h4>
                    <h5 className={styles.BookModal__DescriptionValue}>2005</h5>
                    <p className={styles.BookModal__DescriptionInfo}>15 November</p>
                </div>
                <div className={styles.BookModal__DescriptionGroup}>
                    <h4 className={styles.BookModal__DescriptionKey}>LENGTH</h4>
                    <h5 className={styles.BookModal__DescriptionValue}>207</h5>
                    <p className={styles.BookModal__DescriptionInfo}>Pages</p>
                </div>
                <div className={styles.BookModal__DescriptionGroup}>
                    <h4 className={styles.BookModal__DescriptionKey}>PUBLISHER</h4>
                    <FontAwesomeIcon className={styles.BookModal__DescriptionValue} icon={faBook} />
                    <p className={styles.BookModal__DescriptionInfo}>Random House Digital, Inc.</p>
                </div>
                <div className={styles.BookModal__DescriptionGroup}>
                    <h4 className={styles.BookModal__DescriptionKey}>LANGUAGE</h4>
                    <h5 className={styles.BookModal__DescriptionValue}>EN</h5>
                    <p className={styles.BookModal__DescriptionInfo}>English</p>
                </div>
            </div>

        </div>
    )
}

export default BookModal
