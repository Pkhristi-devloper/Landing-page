/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react'
export const ProductContext = createContext();

const Context = (props) => {
    const [products, setproducts] = useState(
      JSON.parse(localStorage.getItem("products")) || null
    );
  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default Context
