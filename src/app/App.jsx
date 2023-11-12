import React from "react"
import { Routes, Route } from "react-router"
import Navbar from "../components/navbar/Navbar"
import Home from "../scenes/home/Home"
import Shop from "../scenes/shop/Shop"
import Product from "../scenes/product/Product"
import Footer from "../components/footer/Footer"
import '../styles.css'
import { useDispatch, useSelector } from "react-redux"
import { selectProducts } from "../features/products/productsSlice"
import { getProducts } from "../features/products/productsSlice"
import { ThemeProvider} from "@mui/material"
import { themeContext } from "../theme/theme"
import SideBar from "../components/sidebar/SideBar"
import $ from 'jquery'

function App() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const {theme} = React.useContext(themeContext)

  React.useEffect(() => {
    dispatch(getProducts())
  }, [])
  console.log(products)
  
  return (
    <>
      <ThemeProvider theme={theme} >
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/shop/:category" element={<Shop />}></Route>
            <Route path="/shop/:category/:id" element={<Product />}></Route>
          </Routes>
          <SideBar />
        </main>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </>
  )
}

export default App
