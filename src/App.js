import BookModal from "./components/BookModal/BookModal"
import Search from "./components/Search/Search"
import styles from "./App.module.scss"


const App = () => {
  return (
    <div className={styles.App}>
      <Search></Search>
      <BookModal></BookModal>
    </div>
  )
}

export default App
