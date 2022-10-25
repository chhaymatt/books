import Search from "../../components/Search/Search"
import Gallery from "../Gallery/Gallery"
import styles from "./Main.module.scss"

const Main = () => {
    return (
        <main className={styles.Main}>
            <Search></Search>
            <Gallery></Gallery>
        </main>
    )
}

export default Main