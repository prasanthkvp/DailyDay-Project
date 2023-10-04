import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export function Login() {
  function handlelogin(event) {
    event.preventDefault()
    var gmail = document.getElementById("gmail").value;
    var password = document.getElementById("password").value;

    let logindetails = {
      gmail: gmail,
      password: password
    }
    if (gmail === "" && password === "") {
      alert("enter the valid details")
    }
    else {
      alert(gmail)
      axios.post("http://localhost:3005/login", logindetails)
        .then((res) => {
          if (res.data.status === "success") {
           
            var id = res.data.id
            alert(id)
            if (res.data.role === "customer") {
              window.location.href = `/Customer/${id}`
            }
            else if (res.data.role === "delivery") {
              window.location.href = `/Delivery/${id}`
            }
            else if (res.data.role === "admin") {
              window.location.href = `/Admin/${id}`
            }
          }
          else if (res.data.status === "invaild") {
            alert("Invalid")
          }
          else if (res.data.status === "emptyset") {
            alert("your username or password invalid")
          }
          else if (res.data.status === "error") {
            alert("contact admin")
          }
        })
    }

  }
  return (
    <>
      <div className="container login_body ">
            <div className="row d-flex justify-content-center">
              <div>
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 ">
                <form className="form" onSubmit={handlelogin}>
                  <div>
                    <h1 >Login Page</h1>
                    <label ><b> Enter Gmail address</b></label>
                    <input type="email" id="gmail" className="form-control "
                      placeholder="Enter a valid email address" />

                  </div>
                  <div className="mb-3">
                    <label ><b>Password</b></label>
                    <input type="password" id="password" className="form-control"
                      placeholder="Enter password" />

                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                   
                     <div><input type="checkbox"/>
                      <h6 className="">Remember me</h6></div> 
                    
                    <h6><a href="#!" className="text-body">Forgot password?</a></h6>
                  </div>
                  <div>
                    <button type="sumbit" className="btn btn-success btn-lg">Login</button>
                    <Link to="/"><h5> For Register</h5></Link>
                    <h6 className=" mt-2 pt-1 mb-0">Don't have an account?</h6>
                  </div>
                </form>
              </div>
            </div>
          </div>
       
     
    </>
  );

}