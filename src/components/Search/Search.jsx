import styles from "./Search.module.scss"
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"

const Search = ({onSearch, result, setResult}) => {
    const initialState = {
        searchInput: "",
        maxResults: 10,
        orderBy: "relevance"
    }


    const [formState, setFormState] = useState(initialState)
    
    const onInputChange = (event) => {
        const {name, value} = event.target
        setFormState({...formState, [name]: value})
        
    }

    useEffect(() => {
        if (formState.searchInput) {
            handleSubmit()
        }
    },[formState.maxResults, formState.orderBy])

    const handleSubmit = () => {
        // console.log(`${formState.searchInput}&maxResults${formState.maxResults}`)
        onSearch(`${formState.searchInput}&maxResults=${formState.maxResults}&orderBy=${formState.orderBy}`)
        setResult(`Showing ${formState.maxResults} results for "${formState.searchInput}", sorted by ${formState.orderBy}`)
    }

    const handleEnter = (event) => {
        if (event.charCode === 13 && formState.searchInput) {
            handleSubmit()
            
        }
    }

    const clearInput = () => {
        formState.searchInput = ""
        document.getElementById("searchInput").value = ""
    }

    return (
        <div className={styles.Search}>
            <div>
                <div className={styles.Search__Bar}>
                    <FontAwesomeIcon className={styles.Search__Icons} icon={faMagnifyingGlass} />
                    <input className={styles.Search__Input} onChange={onInputChange} onKeyPress={handleEnter} type="text" name="searchInput" id="searchInput" placeholder="Search" value={formState.searchInput}/>
                    <FontAwesomeIcon className={styles.Search__Clear} icon={faXmark} onClick={clearInput}/>
                </div>
                <div className={styles.Search__ToggleBarGroup}>
                    <div className={styles.Search__ToggleBar}>
                        <div>Results per page</div>
                        <select className={styles.Search__Dropdown} onChange={onInputChange} name="maxResults" >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={40}>40</option>
                        </select>
                    </div>
                    <div className={styles.Search__ToggleBar}>
                        <div>Sort by</div>
                        <select className={styles.Search__Dropdown} onChange={onInputChange} name="orderBy" >
                            <option value="relevance">Relevance</option>
                            <option value="newest">Newest</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.Search__Result}>
                <p id="SearchResult">{result}</p>
            </div>
        </div>
    )
}

export default Search