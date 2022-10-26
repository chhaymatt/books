import Search from "../../components/Search/Search"
import Gallery from "../Gallery/Gallery"
import styles from "./Main.module.scss"
import { useState } from "react"

const Main = () => {
    const [query, setQuery] = useState("")
    
    const onSearch = (input) => {
        setQuery(input)
    }

    return (
        <main className={styles.Main}>
            <Search onSearch={onSearch}></Search>
            <Gallery query={query}></Gallery>
        </main>
    )
}

export default Main