import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/Cart";
import Nav from "./Nav";
import AddToCart from "./AddToCart";
import Footer from "./Footer";



export default function ProductDetails(){
    const {id}=useParams();
    const dispatch=useDispatch();
    const carts=useSelector(store=>store.cart.items)
    console.log(carts);
    
    const[product,setProduct]=useState([]);
    const[quantity,setQuantity]=useState(1);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((d)=>{
            // console.log(d.data);
            setProduct(d.data)
            
        })
    },[])
    const handleEvent=()=>{
        dispatch(addToCart({
            id:id,
            quantity:quantity,
            src:product.image,
            title:product.title,
            price:product.price,
            category:product.category
        }));
    }
    const eventIncrement=()=>{
       quantity>=1 ? setQuantity(quantity+1): " "
    }
     const eventDecrement=()=>{
        quantity>1 ? setQuantity(quantity-1):" "
        // setQuantity(quantity-1)

     }
    //  console.log("cart:",carts);
     
    return(<>

        <Nav/>
        <p className="display-4 text-center border shadow p-3 my-3">Product Details</p>

            <div className="container">
        <div className="d-flex  justify-content-center text-wrap gap-5">
        <div className="border shadow col-md-5 p-5 mx-2">
        <img src={product.image} alt="" height="350px" width="300px" className="mx-auto"/>
        <p>{product.category}</p>
        <p className="fs-3">{product.title}</p>
        <p className="display-4">Price: {product.price} $
         <span><del className="fs-2 mx-3"> 500 $</del></span></p>
        <p className="lead">{product.description}</p>

        <button className="btn btn-light" onClick={eventDecrement}><i class="fa-solid fa-minus"></i></button>
        <span className="fs-4 m-2">{quantity}</span>
        <button className="btn btn-light" onClick={eventIncrement}><i class="fa-solid fa-plus"></i></button>

<button className="btn btn-primary"onClick={handleEvent}>Add To Cart</button>
        </div>
        <div className="col-md-7 position-relative">
        <AddToCart carts={carts}/>

        </div>
        </div>
         </div>
         <Footer/>
       
       
    </>)
    
}