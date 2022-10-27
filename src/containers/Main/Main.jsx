import Search from "../../components/Search/Search"
import Gallery from "../Gallery/Gallery"
import styles from "./Main.module.scss"
import { useState } from "react"

const Main = ({query, result, setResult}) => {

    return (
        <main className={styles.Main}>
            <Gallery query={query} result={result} setResult={setResult}></Gallery>
        </main>
    )
}

export default Main