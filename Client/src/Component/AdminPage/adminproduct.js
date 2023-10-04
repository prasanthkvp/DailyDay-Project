import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export function Adminproduct() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("http://localhost:3005/getallproduct")
            .then(res => res.json())
            .then(details => setProduct(details))
    })
    function handledelete(productname) {
        alert(productname)
        let deletedata = { productname: productname }
        axios.post("http://localhost:3005/adminproductdelete", deletedata)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data are not deleted")
                }
                else if (res.data.status === "success") {
                    alert("data are deleted")
                }
            })
    }
    return (
        <>
            <div className="row w-100 d-flex justify-content-evenly">
                {
                    product.map((value, index) => (
                        <>
                            <div className="col-10 col-sm-5 col-md-3 m-2 mx-3">
                                <div class="card d-flex align-items-center border-0">
                                    <div className="image-container">
                                        <img src={value.productimage} className="card_img_size" />
                                    </div>
                                    <div class="card-body card_content_size text-white bg-dark">
                                        <h3 >{value.productname}</h3>
                                        <h5>ProductPrice:{value.productprice}</h5>
                                        <h5>ProductQuantity:{value.quantity}</h5>
                                        <h5>ProductRating:{value.rating}</h5>
                                        <Link to={`/update/${value.productname}`} className="btn btn-success">update</Link>
                                        <a href="#" class="btn btn-danger rounded border-0 ms-5" onClick={() => { handledelete(value.productname) }}>Remove</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>

        </>
    );
}