/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


const Card = ({product}) => {
    
  return (
    <Link to={`/details/${product.id}`}  className="card h-[40vh] bg-white w-[23%] py-3 flex flex-col items-center justify-between rounded-2xl hover:scale-105 hover:text-blue-400 cursor-pointer ">
            <div className="img h-[75%] w-full relative">
              <img className='h-full w-full object-contain bg-no-repeat ' src={product.image} alt={product.title} />
            </div>
            <h1 className="text-sm text-center">{product.title}</h1>
          </Link>
  )
}

export default Card
