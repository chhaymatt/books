import Search from "../../components/Search/Search"
import Gallery from "../Gallery/Gallery"
import styles from "./Main.module.scss"
import { useState } from "react"

const Main = ({query, result, setResult, formState, setFormState}) => {

    return (
        <main className={styles.Main}>
            <Gallery query={query} result={result} setResult={setResult} formState={formState} setFormState={setFormState}></Gallery>
        </main>
    )
}

export default Main