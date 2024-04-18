import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/userActions";


export default function Navbar() {

 const cartstate=useSelector(state=>state.cartReducer)
 const userstate=useSelector(state=>state.loginUserReducer)

 const {currentUser}=userstate


 const dispatch=useDispatch()

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          KNIT CANTEEN APP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">

          { currentUser ? (
            <div className="dropdown ">
  <a className=" dropdown-toggle nav-link " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {currentUser.name}
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    
    <a className="dropdown-item" href="/orders">Orders</a>
    <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>LogOut</li></a>

  </div>
</div>
) : ( <li className="nav-item active">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>) }
            
            <li className="nav-item" >
              <a className="nav-link" href="/cart">
                Cart  {cartstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

