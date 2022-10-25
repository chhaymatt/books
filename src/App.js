// import {useState} from "react"
import styles from "./App.module.scss"
import BookModal from "./components/BookModal/BookModal"
import Footer from "./components/Footer/Footer"
import Header from "./containers/Header/Header"
import Main from "./containers/Main/Main"
import ModalList from "./containers/ModalList/ModalList"



const App = () => {

  return (
    <div className={styles.App}>
      <Header></Header>
      <Main></Main>
      <BookModal></BookModal>
      <Footer></Footer>
    </div>
  )
}

export default App
