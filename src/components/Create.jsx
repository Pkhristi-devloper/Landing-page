 
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";

const Create = () => {
  const [products, setProduct] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      description.trim().length < 5 ||
      category.trim().length < 5 ||
      image.trim().length < 5 ||
      price.trim().length < 1
    ) {
      alert("Every field must have at least 5 characters");
      return;
    }
    const product = {
      id: nanoid(),
      title,
      image,
      price,
      category,
      description,
    };
    setProduct([...products, product]);
    setTitle("");
    setImage("");
    setPrice("");
    setCategory("");
    setDescription("");
    localStorage.setItem(
      "products", JSON.stringify([...products, product])
    );
    
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
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className="font-small py-2 px-5 mx-5 my-2 border-2 border-emerald-500 bg-emerald-100 font-bold text-lg rounded-lg"
          type="text"
          placeholder="Image Link"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <div className="flex">
          <input
            className="font-small py-2 px-5 mx-5 my-2 border-2 border-emerald-500 bg-emerald-100 font-bold text-lg rounded-lg w-[45%]"
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          <input
            className="font-small py-2 px-5 mx-5 my-2 border-2 border-emerald-500 bg-emerald-100 font-bold text-lg rounded-lg  w-[45%]"
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <textarea
          className="font-small py-2 px-5 mx-5 my-2 border-2 border-emerald-500 bg-emerald-100 rounded-lg text-lg"
          placeholder="Enter Product Details Here..."
          cols="30"
          rows="10"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <div className="flex gap-4 mb-5 mx-10">
          <button
            className="text-blue-500 mt-5 font-bold border-2 border-blue-200 w-[75%] flex self-center justify-center cursor-pointer rounded-lg active:scale-95 hover:bg-zinc-300 border-solid px-3 py-3"
            type="submit"
          >
            Submit
          </button>
          <Link
            to={"/"}
            className="text-blue-500 mt-5 font-bold border-2 border-blue-200 w-[75%] flex self-center justify-center cursor-pointer rounded-lg active:scale-95 hover:bg-zinc-300 border-solid px-3 py-3"
            href="/"
          >
            Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
