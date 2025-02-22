/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";

import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
        const navigate = useNavigate(); 
        const [products, setproducts] = useContext(ProductContext);
        
        const { id } = useParams();
        const [product, setproduct] = useState({
          title: "",
          image: "",
          price: "",
          category: "",
          description: "",
        });
        const changeHandle = (e) =>{
            setproduct({...product, [e.target.name] : e.target.value});
        }
        useEffect(() => {
  const selectedProduct = products.find((p) => p.id == id);
  if (selectedProduct) setproduct(selectedProduct);
}, [id, products]);

        const AddProductHandler = (e) => {
        e.preventDefault();
        if (
          product.title.trim().length < 5 ||
          product.description.trim().length < 5 ||
          product.category.trim().length < 1 ||
          product.image.trim().length < 5 ||
          product.price.trim().length < 1
        ) {
          alert("Every field must have at least 5 characters");
          return;
        }
        const productId = products.findIndex((p) => p.id == id);
        if (productId === -1) return;
        let copyData = [...products];
        copyData[productId] = {...product };
       
        setproducts(copyData);
        
        localStorage.setItem(
          "products", JSON.stringify(copyData)
        );
        navigate(-1);
      };
  return (
    <div className="h-screen w-screen bg-blue-200 flex items-center justify-center">
      <form
        onSubmit={AddProductHandler}
        className="form h-[85vh] w-[60vw] bg-emerald-50 flex flex-col"
      >
        <h1 className="text-3xl text-center font-bold text-emerald-600 my-3">
          Add New Product
        </h1>
        <input
          className="font-small py-2 px-5 mx-5 my-2 border-2 border-emerald-500 bg-emerald-100 font-bold text-lg rounded-lg"
          type="text"
          placeholder="Title"
          name="title"
          onChange={changeHandle}

          value={product && product.title}
        />
        <input
          className="font-small py-2 px-5 mx-5 my-2 border-2 border-emerald-500 bg-emerald-100 font-bold text-lg rounded-lg"
          type="text"
          placeholder="Image Link"
          name="image"
          onChange={changeHandle}
          value={product && product.image}
        />
        <div className="flex">
          <input
            className="font-small py-2 px-5 mx-5 my-2 border-2 border-emerald-500 bg-emerald-100 font-bold text-lg rounded-lg w-[45%]"
            type="text"
            placeholder="Category"
            name="category"
            onChange={changeHandle}
            value={product && product.category}
          />
          <input
            className="font-small py-2 px-5 mx-5 my-2 border-2 border-emerald-500 bg-emerald-100 font-bold text-lg rounded-lg  w-[45%]"
            type="number"
            placeholder="Price"
            name="price"
            onChange={changeHandle}
            value={product && product.price}
          />
        </div>
        <textarea
          className="font-small py-2 px-5 mx-5 my-2 border-2 border-emerald-500 bg-emerald-100 rounded-lg text-lg"
          placeholder="Enter Product Details Here..."
          cols="30"
          rows="10"
          name="description"
          onChange={changeHandle}
          value={product && product.description}
        ></textarea>
        <div className="flex gap-4 mb-5 mx-10">
          <button
            className="text-blue-500 mt-5 font-bold border-2 border-blue-200 w-[75%] flex self-center justify-center cursor-pointer rounded-lg active:scale-95 hover:bg-zinc-300 border-solid px-3 py-3"
            type="submit"
          >
            Edit the Product
          </button>
          <Link
            to={"/"}
            className="text-blue-500 mt-5 font-bold border-2 border-blue-200 w-[75%] flex self-center justify-center cursor-pointer rounded-lg active:scale-95 hover:bg-zinc-300 border-solid px-3 py-3"
            
          >
            Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Edit;
