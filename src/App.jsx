import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './component/Home'
import ProductList from './component/ProductList'
import ProductDetails from './component/ProductDetails'
import SearchFilter from './component/SearchFilter'
function App() {
  return (
    <>
      <div>
        {/* <Home/>
        <ProductList/> */}
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productlist' element={<ProductList/>}/>
          <Route path='/listdetails/:id' element={<ProductDetails/>}/>
          <Route path='/searchProduct/:category' element={<SearchFilter/>}/>
        </Routes>
        </BrowserRouter>
       </div>
    </>
  )
}

export default App
