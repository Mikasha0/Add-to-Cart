import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import './Products.css';
import {useDispatch} from 'react-redux';
import {add} from '../Store/cartSlice'


export default function Products() {

  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  

  useEffect(() => {
    const fetchProducts = () => {
      Axios.get("https://fakestoreapi.com/products",
      {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        withCredentials: false,
        credentials: 'same-origin',
      }
      ).then((res) => {
        setProducts(res.data);
      });
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product))
  }

  return (
    <>
      <div className="mx-1 my-3 contain">
        {products.map((product) => (
          <div className="card my-3" key={product.id} style={{ width: "12rem"}}>
            <img
              src={product.image}
              style={{ height: "10rem" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title" style={{color:"blue"}}>{product.title}</h6>
              <h5 className="card-title">{product.price}</h5>
              <button className="btn btn-warning" onClick={() =>handleAdd(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
