import styles from "./App.module.scss"
import Footer from "./components/Footer/Footer"
import Main from "./containers/Main/Main"
import Header from "./containers/Header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ModalView from "./containers/ModalView/ModalView"
import Search from "./components/Search/Search"
import {useState} from "react"


const App = () => {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState("Start by typing a few words")

  const initialState = {
    searchInput: "",
    maxResults: 10,
    orderBy: "relevance"
}


  const [formState, setFormState] = useState(initialState)


  const onSearch = (input) => {
      setQuery(input)
  }
  return (
    <div className={styles.App}>
      <Header></Header>
      <BrowserRouter>
      <Search onSearch={onSearch} result={result} setResult={setResult} formState={formState} setFormState={setFormState}></Search>
      <Routes>
        <Route path="/books" element={<Main query={query}></Main>}></Route>
        <Route path="/books/search/:id" element={<ModalView></ModalView>}></Route>
      </Routes>

      </BrowserRouter>
      <Footer></Footer>
    </div>
  )
}

export default App
