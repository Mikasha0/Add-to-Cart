import React from 'react'
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Navbar() {

  const items = useSelector((state)=>state.cart);
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link to="/" className="nav-link active" >Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link active" >Cart</Link>
          </li>
          <li className="nav-item">
          <Link to="/login" className="nav-link active" >Login</Link>
          </li>
        </ul>
        <form className="d-flex">
          <button className="btn btn-outline-success disabled" type="submit">CART ITEMS:{items.length}</button>
        </form>
      </div>
    </div>
  </nav></div>
  )
}
