import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
export function Delivery() {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3005/getallorder")
            .then(res => res.json())
            .then(details => setOrder(details))
    },[])
    function handlepickup(phonenumber) {
        alert(phonenumber)
        let pickupdata = { phonenumber: phonenumber }
        axios.post("http://localhost:3005/orderpickup", pickupdata)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("order are not pick up")
                }
                else if (res.data.status === "success") {
                    alert("orders were picked")
                     window.location.reload();
                }
            })
    }
    return (
        <>
         <div className="row w-100 d-flex justify-content-evenly delivery_bg">
                {
                    order.map((value, index) => (
                        <>
                        <div className="col-10 col-sm-5 col-md-3 m-2 mx-3">
                                <div class="card d-flex align-items-center border-0">
                                   
                                    <div class="card-body card_content_size text-white bg-dark">
                                        <h5>{value.phonenumber}</h5>
                                        <h5>{value.location}</h5>
                                        <h5>{value.address}</h5>
                                        <a href="#" class="btn btn-danger rounded border-0 ms-5" onClick={() => { handlepickup(value.phonenumber) }}>PickUp</a>

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




