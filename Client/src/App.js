import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './Component/Register/register';
import { Login } from './Component/login/login';
import { Admin } from './Component/AdminPage/admin';
import { Adminproduct } from './Component/AdminPage/adminproduct';
import { Delivery } from './Component/Delivery/delivery';
import { Customer } from './Component/customerdashboard/customer';
import { Update } from './Component/Update/update';
import { Order } from './Component/customerdashboard/order';
function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
        

           <Route path='/' element={[<Register/>]}/>
          <Route path='/switch' element={ <Login/>}/>
          <Route path='/Admin/:id' element={[<Admin/>]}/>
          <Route path='/Adminproduct' element={[<Adminproduct/>]}/>
          <Route path='/Delivery/:id' element={[<Delivery/>]}/>
          <Route path='/Customer/:productname' element={[<Customer/>]}/>
           <Route path='/Update/:id' element={[<Update/>]}/> 
           <Route path='/Adminproduct' element={[<Adminproduct/>]}/> 
           <Route path='/Order/:productname' element={[<Order/>]}/> 
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
