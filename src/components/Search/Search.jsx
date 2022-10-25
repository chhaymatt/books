import styles from "./Search.module.scss"
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
    

    return (
        <div>
            <div className={styles.Search}>
                <FontAwesomeIcon className={styles.Search__Icons} icon={faMagnifyingGlass} />
                <input className={styles.Search__Input}type="text" name="searchInput" id="searchInput" placeholder="Search"/>
                <FontAwesomeIcon className={styles.Search__Clear} icon={faXmark} />
            </div>
            <div className={styles.Search__Result}>
                <p>Showing 10 results for "Harry Potter"</p>
            </div>
        </div>
    )
}

export default Search