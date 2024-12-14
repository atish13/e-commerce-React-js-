export default function TotalProduct(props){
    const order=props.order;
    return<div>
        <div className="d-flex justify-content-center">
        <div className="shadow my-3 position-absolute bottom-0 p-3 ">
            <p className="fs-3 fw-bold my-2 px-5">Total:{order} $</p>
        </div>
        </div>
         
    </div>
}