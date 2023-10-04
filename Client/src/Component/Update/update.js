import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export function Update(){

    console.log('enterning');
    var productname=useParams()
    console.log(productname)
    const [productimage,setproductimage]=useState('')

    const [productprice,setproductprice]=useState('')
    const [quantity,setquantity]=useState('')
    const [rating,setrating]=useState('')
    useEffect(()=>{
        console.log('useEffectttt');
        console.log(productname.id);

        fetch('http://localhost:3005/getone/'+productname.id)
        .then(data=>data.json())
        .then((res)=>{
            console.log(res)
            setproductimage(res[0].productimage)
            setproductprice(res[0].productprice)
            setquantity(res[0].quantity)
            setrating(res[0].rating)
        })
    },[])

    function handleupdate(event){
        event.preventDefault()
        let Product_ImageAdderss=document.getElementById("Product_ImageAdderss").value;
        alert(Product_ImageAdderss)
        let Price=document.getElementById("Price").value;
        alert(Price)
        let Quantity=document.getElementById("Quantity").value;
        alert(Quantity)
        let Rating=document.getElementById("Rating").value;
        alert(Rating)
        let productname=document.getElementById("Product_Name").value
        alert(productname)


        var updatedetails={
            productimage: Product_ImageAdderss,
            productprice:Price,
            quantity:Quantity,
            rating:Rating,
            productname:productname
        }
        if( Product_ImageAdderss === ''){
            alert("You should fill the product")
        }
        else{
            axios.put("http://localhost:3005/update/"+productname.id,updatedetails)
            .then(res=>{
                if(res.data.status === "error"){
                    alert("product are not inserted")
                }
                else if (res.data.status === "success"){
                    alert("data are insert")
                    window.location.href="/"
                }
            })
        }

    }

    return (
        <>
            <section class="vh-100 update_bg">
                <div class="d-flex align-items-center h-100 ">
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div>
                                    <div>
                                        <h2 class="text-uppercase text-center mb-5">For Update</h2>
                                        <form  onSubmit={handleupdate}>
                                            <div>
                                                <label className="text_color text-black"><b>Product-ImageAdderss</b></label>
                                                <input type="text" id="Product_ImageAdderss"value={productimage} onChange={(updatedata)=>{setproductimage(updatedata.target.value)}} class="form-control" />
                                            </div>
                                            <div>
                                                <label className="text_color text-black"><b>Product-Name</b></label>
                                                <input type="text" id="Product_Name"value={productname.id} class="form-control" />
                                            </div>
                                            <div>
                                                <label className="text_color text-black"><b>Price</b></label>
                                                <input type="text" id="Price" value={productprice} onChange={(updatedata)=>{setproductprice(updatedata.target.value)}} class="form-control" />
                                            </div>
                                            <div>
                                                <label className="text_color text-black"><b>Quantity</b></label>
                                                <input type="text" id="Quantity" value={quantity}  onChange={(updatedata)=>{setquantity(updatedata.target.value)}} class="form-control" />
                                            </div>
                                            <div>
                                                <label className="text_color text-black"><b>Rating</b></label>
                                                <input type="text" id="Rating" value={rating}  onChange={(updatedata)=>{setrating(updatedata.target.value)}} class="form-control" />
                                            </div>
                                           <button type="submit" className="admin_button bg-success mt-3 ms-5 w-25 text-white"><b>For Update</b></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
