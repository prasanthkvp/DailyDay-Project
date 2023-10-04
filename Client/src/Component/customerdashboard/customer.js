import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export function Customer() {

  const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("http://localhost:3005/getallproduct")
            .then(res => res.json())
            .then(details => setProduct(details))
    })
  
  return (
    <>

      <nav class="navbar navbar-expand-lg fixed-top ">
        <div class="container">
          <img src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80" alt="Logo" class="d-inline-block align-text-top logo "/>
           <h4>Welcome</h4>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-primary" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-primary" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-primary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled text-primary" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex mt-2" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success bg-primary text-white" type="submit">Search</button>
            </form>
          </div>

        </div>
      </nav>

      {/* <!-- carousel --> */}


      <section className="carou">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carouselHead">
            <h2></h2>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://thumbs.dreamstime.com/b/print-193894545.jpg?w=1200" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- cards --> */}


    <section>
        <div class="container px-4 " id="custom-cards">
          <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div class="col">
              <div class="card   card4 card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">MilkShake</h3>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <button type="button" class="btn bg-success text-white">soon</button>
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card  card5 card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">MilkJam</h3>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <button type="button" class="btn bg-success text-white">soon</button>
                    </li>


                  </ul>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card  card6 card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">MilkTea</h3>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <button type="button" class="btn bg-success text-white">soon</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> 


        <div class="container px-4 " id="custom-cards">
          <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            {/* <div class="col"> */}
              <div class="  card7 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">MilkCream</h3>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <button type="button" class="btn bg-success text-white">soon</button>
                    </li>
                  </ul>
                </div>
              </div>
            {/* </div> */}

            <div class="col">
              <div class="card  card8 card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">MilkBoost</h3>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <button type="button" class="btn bg-success text-white">soon</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card  card9 card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">MilkBread</h3>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <button type="button" class="btn bg-success text-white">soon</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                                       
                                        <Link to={`/Order/${value.productname}`} className="btn btn-primary bg-success rounded text-white">ORDER</Link>
                                        {/* <Link to={`/update/${value.productname}`} className="btn btn-success">update</Link> */}
                                        {/* <a href="#" class="btn btn-danger rounded border-0 ms-5" onClick={() => { handledelete(value.productname) }}>Remove</a> */}
                                    </div>
                                </div>
                            </div>
                          
                        </>
                    ))
                }
            </div>

      {/* <!-- Para --> */}


      <section class=" paraSection p-4">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGN1c3RvbWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">DailyDays!</h1>
            <p class="lead">Calcium: One of milk's most well-known components, calcium is essential for bone and teeth health. Adequate calcium intake can help prevent osteoporosis and bone fractures.

              Vitamin D: Some milk is fortified with vitamin D, which helps our bodies absorb calcium and supports bone health. Vitamin D also has roles in immune system function and inflammation regulation.

              Protein: Milk is a good source of protein, particularly casein and whey. These proteins support muscle growth, repair, and overall health.

              Vitamin B12: This is essential for nerve tissue health, brain function, and the production of red blood cells.

              Riboflavin (Vitamin B2): This vitamin plays a critical role in energy production and the metabolism of fats, drugs, and steroids. It also helps maintain healthy eyes, skin, and nerve functions.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn  btn-lg px-4 me-md-2">Primary</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- Footer --> */}


      <footer class=" p-4">
        <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>
          <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                <button class="btn " type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2023 Company, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
          </ul>
        </div>
      </footer>
    </>
  );
} 