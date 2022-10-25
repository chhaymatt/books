import {useState} from "react"
import styles from "./App.module.scss"
import BookModal from "./components/BookModal/BookModal"
import Search from "./components/Search/Search"
import Gallery from "./containers/Gallery/Gallery"
import Header from "./containers/Header/Header"



const App = () => {

  return (
    <div className={styles.App}>
      <Header></Header>
      <Search></Search>
      <Gallery></Gallery>
      {/* <BookModal></BookModal> */}
    </div>
  )
}

export default App
