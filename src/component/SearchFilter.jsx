import { Link, useParams } from "react-router-dom"
import Nav from "./Nav"
import axios from 'axios'
import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function SearchFilter(){
    const {category}=useParams();
    const [search,searchList]=useState([]);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`).
    then((d)=>{
        console.log(d.data );
        searchList(d.data)
    })
    },[]);

       const products=search.filter((d)=>d.category===category);
       console.log(products);
       

    
    
    
    return(<>
    <Nav/>
    <p className="text-center display-3 p-4 shadown">Product Items</p>
    <p className="fs-4 mx-5 p-3">Category: {category}</p>

    <div className="shadow p-5 d-flex justify-content-center flex-wrap">
        {products.map((d)=>
        <div className="shadow card p-5 m-4 col-md-3">
            <img src={d.image} className="img-top" width="200px" height="250px"/>
            <div className="card-body">
                <p className="text-muted">{d.category}</p>
                <div className="card-title">{d.title}</div>
                <p>Price: <strong className='fs-4'>{d.price} $ </strong><del>5000 $</del></p>

                    <Link to={`/listdetails/${d.id}`} className='btn btn-primary'>View Product</Link>
            </div>
        </div>)}
    </div>
    <Footer/>
    </>)
}