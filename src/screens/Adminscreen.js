import React, { useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux";
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Userslist from './Userslist';
import Orderslist from './Orderslist';
import Foodlist from './Foodlist';
import Addfood from './Addfood';
import { Link } from 'react-router-dom';
import Editfood from './Editfood';

export default function Adminscreen() {

    const userstate=useSelector(state=>state.loginUserReducer)

    const {currentUser}=userstate
   
   
    const dispatch=useDispatch()

    useEffect(()=>{
        if(!currentUser.isAdmin)
        {
            window.location.href='/'
        }
    },[])
     
  return (
    <div>
            <div className='row justify-content-center p-4'>
                <div className='col-md-10'>
                    <h2 style={{ fontSize: '35px' }}>Admin DashBoard</h2>
                    <ul className='adminfunction'>
                        <li><Link to="/admin/userslist">Users List</Link></li>
                        <li><Link to="/admin/foodslist">Dishes List</Link></li>
                        <li><Link to="/admin/addfood">Add new Dish</Link></li>
                        <li><Link to="/admin/orderslist">Orders List</Link></li>
                    </ul>

                    <Routes>
                    <Route path="" element={<Userslist/>} /> 
                        <Route path="userslist" element={<Userslist />} />
                        <Route path="orderslist" element={<Orderslist />} />
                        <Route path="foodslist" element={<Foodlist />} />
                        <Route path="addfood" element={<Addfood />} />
                        <Route path="editfood/:foodid" element={<Editfood/>} />
                    </Routes>
                </div>
            </div>
        </div>
  )
}
