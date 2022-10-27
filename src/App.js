import styles from "./App.module.scss"
import Footer from "./components/Footer/Footer"
import Main from "./containers/Main/Main"
import Header from "./containers/Header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ModalList from "./containers/ModalView/ModalView"



const App = () => {

  return (
    <div className={styles.App}>
      <Header></Header>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/search/:id" element={<ModalList></ModalList>}></Route>
      </Routes>

      </BrowserRouter>
      {/* <BookModal></BookModal> */}
      <Footer></Footer>
    </div>
  )
}

export default App
