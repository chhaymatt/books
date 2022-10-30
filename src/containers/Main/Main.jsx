import Gallery from "../Gallery/Gallery"
import styles from "./Main.module.scss"
import PageButtons from "../../components/PageButtons/PageButtons"
import { useState } from "react"

const Main = ({query, result, setResult, formState, setFormState, pageCount, setPageCount}) => {
    const [books, setBooks] = useState()
    
    return (
        <main className={styles.Main}>
            <Gallery query={query} books={books} setBooks={setBooks} result={result} setResult={setResult} formState={formState} setFormState={setFormState}></Gallery>
            {books && <PageButtons formState={formState} setFormState={setFormState} pageCount={pageCount} setPageCount={setPageCount}></PageButtons>}
        </main>
    )
}

export default Main