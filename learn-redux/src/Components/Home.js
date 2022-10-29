import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <>
      <h5 className="heading text-center" style={{color:'blue'}}>
        Welcome to the Redux toolkit store.
      </h5>
        <Products/>
    </>
  );
}
