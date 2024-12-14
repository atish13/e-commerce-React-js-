import { useState } from "react";
import TotalProduct from "./TotalProduct";
import { useDispatch } from "react-redux";
import { changeQuantity, deleteCart } from "../store/Cart";


export default function AddToCart(props){
    const carts=props.carts;
    const {id,quantity}=props.carts;
    let totalOrder=0
    // console.log(id);
    // const[order,setOrder]=useState(0);
    // let order=0;
    const dispatch=useDispatch();
    const eventIncrement=(id,quantity)=>{
        dispatch(changeQuantity({
            id:id,
            quantity:quantity+1 
        }))
        console.log(quantity);
        

     }
      const eventDecrement=(id,quantity)=>{
       
         dispatch(changeQuantity({
            id:id,
            quantity:quantity-1
         }))

        
                 console.log(carts);
                 console.log(totalOrder);  
      }
      const delEvent=(id)=>{
        dispatch(deleteCart({id:id}))
    }
    return(<>
         <div className=" p-5">
            <p className="fs-2 text-center">ADD TO CARTS</p>
            {carts.map((i)=>
            <div className="d-flex justify-content-center shadow my-4 p-4">
                <div className="text-center">
                <img src={i.src} alt="" className="mx-2" width="80px" height="80px"/>
                <p className="text-muted">{i.category}</p>
                </div>
                <p className="fw-bold fs-5 mx-4 text-nowrap">{Math.floor(i.price * i.quantity)} $</p>

               
                {/* {setOrder(i.price*i.quantity)} */}

                <div className="mx-4  text-center">
                <button className="btn rounded-circle  mx-3 " onClick={()=>eventDecrement(i.id,i.quantity)}><i class="fa-solid fa-minus"></i></button>
                <span className="fs-4">{i.quantity}</span>
                <button className="btn btn-light rounded-circle mx-3 " onClick={()=>eventIncrement(i.id,i.quantity)}><i class="fa-solid fa-plus"></i></button>
                </div>
                <div>
                <button className="btn btn-lg fs-3 " width="100px" height="90px" onClick={()=>delEvent(i.id)}><i class="fa-solid fa-trash"></i></button>
                </div>
               <p className="d-none">{totalOrder+=i.price*i.quantity}</p>
            </div>)}
                <TotalProduct order={totalOrder}/>
        </div>
    </>)
}