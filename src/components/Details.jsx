/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "../utils/Axios";

import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

const Details = () => {
  const [products, setProducts] = useContext(ProductContext);
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    setproduct(products.find((p) => p.id == id) || null);
  }, [id, products]);
  
  const deleteProductHandle = (id) => {
    let filteredProducts = products.filter((p) => p.id != id);
    setProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    navigate('/');
  }
  return product ? (
    <div className="product h-screen w-screen flex justify-center items-center gap-4">
      <div className="image h-[60%] w-[30%] bg-white">
        <img
          className="h-full w-full object-contain bg-no-repeat "
          src={product.image}
          alt=""
        />
      </div>
      <div className="detail h-[60%] w-[38%] py-10 flex flex-col justify-center">
        <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>

        <h2 className="text-zinc-300 font-semibold mb-3">{product.category}</h2>
        <h2 className="text-xl text-indigo-600 font-semibold opacity-50 mb-4">
          $ {product.price}
        </h2>
        <p className="text-lg font-semibold opacity-85 leading-6 mb-4">
          {product.description}
        </p>
        <div className="flex gap-3 detail-buttons">
          <Link to={`/edit/${product.id}`} className="detail-btn border-2 border-blue-300 hover:bg-blue-50 active:scale-95 hover:scale-105 px-5 py-1.5 m-2 rounded-xl text-blue-600">
            Edit
          </Link>
          <button onClick={()=> deleteProductHandle(product.id)} className="detail-btn border-2 border-red-300 hover:bg-red-50 active:scale-95 hover:scale-105 px-5 py-1.5 m-2 rounded-xl text-red-600">
            Delete
          </button>
          <Link
            to={"/"}
            className="detail-btn border-2 border-red-300 hover:bg-red-50 active:scale-95 hover:scale-105 px-5 py-1.5 m-2 rounded-xl text-red-600"
            href="/"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
