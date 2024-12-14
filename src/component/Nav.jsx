import { useState } from "react";
import { Link } from "react-router-dom"

export default function Nav ()
{
  const[val,setVal]=useState();
  const subEvent=()=>{
    alert(val)
  }
    return(<>
     <nav className="navbar navbar-expand-lg  p-3 ">
  <div className="container-fluid">
    <a className="navbar-brand fs-1" href="#">WebStore</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5" >
        <li className="nav-item">
        <Link to='/' className='nav-link fs-5'>Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link fs-5" >Shops</a> */}
          <Link to='/productlist' className='nav-link fs-5'>Shops</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fs-5 " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            {/* <li><a className="dropdown-item" href="#">electronics</a></li> */}
            <li><Link to='/searchProduct/electronics' className="dropdown-item">electronics</Link></li>
            <li><Link to='/searchProduct/jewelery' className="dropdown-item">jewelery</Link></li>
            <li className="dropdown-divider"></li>
            <li><Link to="/searchProduct/men's clothing" className="dropdown-item">men's clothing</Link></li>
            <li><Link to="/searchProduct/women's clothing" className="dropdown-item">women's clothing</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={subEvent}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
          console.log(e.target.value);
          setVal(e.target.value)
        }}/>
        <button className="btn btn-primary" type="submit">Search</button>
        
      </form>
    </div>
  </div>
</nav>
    </>)
}