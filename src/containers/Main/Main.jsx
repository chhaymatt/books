import Search from "../../components/Search/Search"
import Gallery from "../Gallery/Gallery"
import styles from "./Main.module.scss"
import { useState } from "react"

const Main = () => {
    const [query, setQuery] = useState("")
    const [books, setBooks] = useState([])
    const [result, setResult] = useState("Start by typing a few words")

    const onSearch = (input) => {
        setQuery(input)
    }

    return (
        <main className={styles.Main}>
            <Search onSearch={onSearch} result={result} setResult={setResult}></Search>
            <Gallery query={query} books={books} setBooks={setBooks} result={result} setResult={setResult}></Gallery>
        </main>
    )
}

export default Main