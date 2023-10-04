import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export function Register(){
  function handleRegister(event){
    event.preventDefault()

    let firstName=document.getElementById("firstName").value;
    alert(firstName)
    let lastName=document.getElementById("lastName").value;
    let gmail=document.getElementById("gmail").value;
    let password=document.getElementById("password").value;
    let phoneNumber=document.getElementById("phoneNumber").value;
    let role=document.getElementById("role").value;

    var userdetails={
      firstName:firstName,
      lastName:lastName,
      gmail:gmail,
      password:password,
      phoneNumber:phoneNumber,
      role:role
    }
    if(firstName === ''){
      alert("enter all details")
    
  }else{
    // axios.post("http://localhost:8080/auth/create",userdetails)  // spring
    axios.post("http://localhost:3005/register",userdetails)
    .then(res=>{

      // if(res.data.resoponseMsg === "Error"){ // spring
        if(res.data.status === "error"){
        alert("Data are not inserted")
      }
      else if (res.data.status === "success"){
        alert("data are insert")
        window.location.href='./switch'
      }
    })
  }
}
 
   return(
      <>
      
        <div className="mainSection">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black two">
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center secondSection">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-white">Sign up</p>
                        <form className="mx-1 mx-md-4" onSubmit={handleRegister}>
                        <select id="role">
                            <option value=''>Select the Role</option>
                            <option value="customer">CUSTOMER</option>
                            <option value="delivery">DELIVERY</option>
                          </select>
                          <div className="d-flex flex-row align-items-center mb-4">
                           
                            <div className=" flex-fill">
                            <b><label className="text-white">FirstName</label></b>
                              <input type="text" id="firstName" className="form-control" />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                           
                            <div className="flex-fill">
                            <b><label className="text-white" >LastName</label></b>
                              <input type="text" id="lastName" className="form-control" />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                           
                            <div className="flex-fill">
                            <b> <label className="text-white">Gmail</label></b>
                              <input type="Gmail" id="gmail" className="form-control" />
                            
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                           
                            <div className="form-outline flex-fill">
                            <b><label className="text-white">Password</label></b>
                              <input type="text" id="password" className="form-control" />
                              
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                           
                            <div className="flex-fill">
                            <b><label className="text-white">Phonenumber</label></b>
                              <input type="text" id="phoneNumber" className="form-control" />
                            </div>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-success btn-lg">Register</button>
                        <div className="d-flex flex-row align-items-center mb-4">
                         
                          </div>
                          </div>
                          <div className=" flex-fill">
                          <h5 className="text-white">Already a Member?<span className="p-5"><Link to="/switch">Login Now</Link></span></h5>
                            </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src="https://images.unsplash.com/photo-1634141510639-d691d86f47be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80"
                           className="img-fluid"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      
    </>
   );
}