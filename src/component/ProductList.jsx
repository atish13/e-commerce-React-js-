import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function ProductList(){
    const[products,setProduct]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products',products).then((d)=>{
            // d.data    
            setProduct(d.data);
            // console.log(d.data);

        });        
    },[])
    // console.log(products);
    
    
   return(<>
            {/* <Nav/> */}
            <h2 className='display-4 text-center p-5'>Product List</h2>
            <div className='d-flex flex-wrap justify-content-center my-5'>
                {products.map((d)=>
                <div className="shadow card m-4 p-5 col-md-3 ">
                    <img src={d.image} className="img-top" width="200px" height="250px"/>
            <div className="card-body">
                <p className="text-muted">{d.category}</p>
                <div className="card-title">{d.title}</div>
                <p>Price: <strong className='fs-4'>{d.price} $ </strong><del>5000 $</del></p>

                    <Link to={`/listdetails/${d.id}`} className='btn btn-primary'>View Product</Link>
            </div>
                </div>
                )}
            </div>
            
   </>)
}