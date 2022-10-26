import styles from "./Search.module.scss"
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

const Search = () => {
    const initialState = {
        searchInput: "",
        maxResults: 10,
    }

    const [result, setResult] = useState("Start by typing a few words")

    const [formState, setFormState] = useState(initialState)
    
    const onInputChange = (event) => {
        const {name, value} = event.target
        setFormState({...formState, [name]: value})
        setResult(`Showing ${formState.maxResults} results for "${formState.searchInput}"`)
    }

    const clearInput = () => {
        formState.searchInput = ""
        document.getElementById("searchInput").value = ""
        setResult("")
    }

    return (
        <div>
            <div className={styles.Search}>
                <FontAwesomeIcon className={styles.Search__Icons} icon={faMagnifyingGlass} />
                <input className={styles.Search__Input} onChange={onInputChange} type="text" name="searchInput" id="searchInput" placeholder="Search" value={formState.searchInput}/>
                <FontAwesomeIcon className={styles.Search__Clear} icon={faXmark} onClick={clearInput}/>
            </div>
            <div className={styles.Search__Result}>
                <p id="SearchResult">{result}</p>
            </div>
        </div>
    )
}

export default Search