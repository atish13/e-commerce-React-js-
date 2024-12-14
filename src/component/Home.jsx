import { Link } from 'react-router-dom'
import  '../css/home.css'
import ProductList from './ProductList'
import Nav from './Nav'
import Footer from './Footer'

export default function Home(){
    return(<>
    
    <div className="container-fluid ">
    </div>
    <div className="background mb-3">
      <Nav/>
      <div className="text-center my-5 p-5">
      <p className='display-1 fw-bold '>WebStore</p>
      <p className='fs-5'>Lorem ipsum dolor sit amet.</p>
      {/* <button className='btn btn-primary px-3'><span><i class="fa-brands fa-shopify"></i></span>      Shop Now</button>       */}
      <Link to='/productlist' className=' btn btn btn-primary px-3'><i class="fa-brands fa-shopify"></i> Shops</Link>

      </div>
    </div>
    <ProductList/>
    <Footer/>
    </>)
}