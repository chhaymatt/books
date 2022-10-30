import styles from "./Search.module.scss"
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"
import ToggleBar from "../ToggleBar/ToggleBar";
import { useNavigate } from "react-router-dom";

const Search = ({onSearch, result, setResult, formState, setFormState}) => {

    const navigate = useNavigate()

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
        navigate("/books")
    }

    const handleEnter = (event) => {
        if (event.charCode === 13 && formState.searchInput) {
            handleSubmit()
            
        }
    }
    const handleClick = (event) => {
        if(formState.searchInput) {
            handleSubmit()
        }
    }
    const clearInput = () => {
        setFormState({...formState, searchInput: ""})
    }

    return (
        <div className={styles.Search}>
            <div>
                <div className={styles.Search__Bar}>

                    <FontAwesomeIcon className={styles.Search__Icons} icon={faMagnifyingGlass} />

                    <input className={styles.Search__Input} onChange={onInputChange} onKeyPress={handleEnter} type="text" name="searchInput" id="searchInput" placeholder="Search" value={formState.searchInput}/>

                    {formState.searchInput && <FontAwesomeIcon className={styles.Search__Clear} icon={faXmark} onClick={clearInput}/>}

                    <button className={styles.Search__Button} onClick={handleClick}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>

                <div className={styles.Search__ToggleBarGroup}>
                    <ToggleBar name="maxResults" nameDisplay="Results per page" options={[10, 20, 30, 40]} onInputChange={onInputChange}></ToggleBar>
                    <ToggleBar name="orderBy" nameDisplay="Sort by" options={["Relevance", "Newest"]} onInputChange={onInputChange}></ToggleBar>
                </div>
            </div>
            <div className={styles.Search__Result}>
                <p>{result}</p>
            </div>
        </div>
    )
}

export default Search