import {useState} from "react"
import styles from "./App.module.scss"
import BookModal from "./components/BookModal/BookModal"
import Search from "./components/Search/Search"
import Gallery from "./containers/Gallery/Gallery"
import Header from "./containers/Header/Header"



const App = () => {

  // const [ranWord, setRanWord] = useState("Loading")

  // const getData = async (terms) => {
  //   const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${terms}`)
  //   const json = await response.json()
  //   setRanWord(json)
  // }

  // // getData("hello")
  // console.log(ranWord)

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
