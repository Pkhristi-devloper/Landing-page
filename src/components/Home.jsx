/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import Card from "./Card"
import Navbar from "./Navbar"
import { ProductContext } from "../utils/Context"
import Loading from "./Loading"
import {  useLocation } from "react-router-dom"
// import axios from ".../utils/axios"
import axios from "../utils/Axios"


const Home = () => {
    let [products] = useContext(ProductContext);
    let {search} = useLocation();
    let category = decodeURIComponent(search.split('=')[1])
    const [filteredProducts, setfilteredProducts] = useState([]);
    useEffect(() => {
        if (products) {
            setfilteredProducts(products); 
        }
    }, [products]); 
    
    useEffect(() => {
        if(!filteredProducts || category=== "undefined") setfilteredProducts(products);
        if (category && category !== "undefined") {
            // getProductByCategory();
            setfilteredProducts(products.filter((p) => p.category == category))
        }
    }, [category, products]);

    
  return products && products.length > 0 ? (
    <>
    <Navbar />
    <div className="right bg-zinc-200  overflow-y-scroll h-screen w-[75%] px-10">
        <h1 className=' main-title h-15 w-full text-center text-3xl font-extrabold '>Sasta Cart</h1>
        <hr className='w-full opacity-15 mb-3' />
        <div className="container flex flex-wrap gap-5">
         
          { 
           !filteredProducts? (
            <h1 className="text-center text-2xl font-bold">No products found</h1>
          ) :
            filteredProducts.map((product) => (
              <Card key={product.id} product={product} />
              
            ))
          }
       </div>
          
      </div>
      </>
  ) : <Loading />
}

export default Home
