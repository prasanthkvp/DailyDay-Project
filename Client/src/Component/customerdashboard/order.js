import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export function Order() {
    function handleorder(event) {
        event.preventDefault()
        let phonenumber = document.getElementById("phonenumber").value;
        let confirm = document.getElementById("confirm").value;
       
        let address = document.getElementById("address").value;
        let finalorder = {
            phonenumber: phonenumber,
            location: confirm,
            address: address
        }
        if (phonenumber === '') {
            alert("enter all details")

        } else {
            axios.post("http://localhost:3005/orderinsert", finalorder)
                .then(res => {

                    if (res.data.status === "error") {
                        alert("Data are not inserted")
                    }
                    else if (res.data.status === "success") {
                        alert("Add to the Delivery Guy")
                        window.location.reload();
                       
                    }
                })
        }
    }

    console.log('enterning');
    var { productname } = useParams()
    console.log(productname)
    const [productimage, setproductimage] = useState('')

    const [productprice, setproductprice] = useState('')
    const [quantity, setquantity] = useState('')
    const [rating, setrating] = useState('')
    useEffect(() => {
        fetch('http://localhost:3005/getone/' + productname)
            .then(data => data.json())
            .then((res) => {
                console.log(res)
                setproductimage(res[0].productimage)
                setproductprice(res[0].productprice)
                setquantity(res[0].quantity)
                setrating(res[0].rating)
            })
    }, [])
    function confirm() {
        var location = document.getElementById('confirm').value
        if (location === '') {
            alert("Please enter your location")
        }
        else {
            alert("Order confirmed!")
        }

    }
    return (
        <>
            <div className="order_bg">
                <h1 className="text-white"><b>And Your Order</b></h1>
                <div className="image-container">
                    <div className="col-lg-6">
                        <img src={productimage} className="card_img_size rounded border-0" />
                    </div>
                    <form className="mx-1 mx-md-4" onSubmit={handleorder}>
                        <div className="col-lg-6">
                            <h1 className="text-warning">{productname}</h1>
                            <b>ProductPrice:</b><h3>{productprice}</h3>
                            <b>ProductQuantity:</b><h3>{quantity}</h3>
                            <b>ProductRating:</b><h3>{rating}</h3></div>

                        {/* <label ><b>PhoneNumber</b></label>
                        <input type="phone" className="rounded ms-1 border-0" id="phonenumber" placeholder="PhoneNumber"></input> */}
                        {/* <div> */}
                            {/* <label><b>Location</b></label> */}
                            {/* <input type="text" className=" rounded border-0 ms-3 mt-3 " id="confirm" placeholder="Location"></input></div> */}
                        {/* <div><label><b>Address</b></label>
                            <textarea id="address" className="rounded border-0 ms-5" placeholder="with Pin Code"></textarea></div> */}

  <div class="form-outline mb-4">
    <input type="tel" className="rounded ms-1" id="phonenumber" placeholder="PhoneNumber" />
    <label class="form-label ms-2"><b>PhoneNumber</b></label>
  </div>
  <div class="form-outline mb-4">
    <input type="text" className="rounded ms-1" id="confirm" placeholder="Location" />
    <label class="form-label ms-4"><b>Location</b></label>
  </div>
  <div class="form-outline mb-4">
   <textarea id="address" className="rounded ms-2 " placeholder="with Pin Code"></textarea>
    <label class="form-label ms-4"><b>Address</b></label>
  </div>
  <button  type="submit" className="bg-success rounded border-0 text-white mt-3 p-2 mb-3" onClick={confirm}>ConfirmOrder</button>
  <Link to="/Customer/:productname"><button className="bg-danger rounded border-0 text-white mt-3 p-2 mb-3 ms-3">BACK</button></Link>
 </form>
                </div>
            </div>
        </>
    );
}