import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Navbar = () => {
  const [products] = useContext(ProductContext);
  let distinct_category = products.reduce(
    (accumulator, currentValue) => [...accumulator, currentValue.category],
    []
  );
  distinct_category = [...new Set(distinct_category)];
 
  const color = () =>{
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  }
  return (
    <div className="navbar left flex flex-col p-5 bg-zinc-100 w-[25%]">
      <Link
        to={"/create"}
        className="button text-blue-500 font-bold border-2 border-blue-200 w-[75%] flex self-center justify-center cursor-pointer rounded-lg active:scale-95 hover:bg-zinc-300 border-solid px-3 py-3"
        href="/"
      >
        Add New Product
      </Link>
      <Link
        to={"/"}
        className="button-home text-blue-500 mt-5 font-bold border-2 border-blue-200 w-[75%] flex self-center justify-center cursor-pointer rounded-lg active:scale-95 hover:bg-zinc-300 border-solid px-3 py-3"
        href="/"
      >
        Home
      </Link>
      <hr className=" horizontal my-5 opacity-15" />
      <h1 className="text-2xl font-bold mb-5 mx-2">Category Filter</h1>
      {distinct_category.map((category, idx) => {
        return (
          <Link
            key={idx}
            to={`/?category=${category}`}
            className="mx-4 my-2 list-none font-medium text-[20px] flex justify-start gap-2 items-center"
          >
            <span style={{backgroundColor: color()}} className="h-[12px] w-[12px] bg-yellow-300 rounded-full"></span>
            {category}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
