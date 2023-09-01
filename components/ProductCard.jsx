import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import Rating from "./Rating";

function ProductCard({ product }) {
  return (
    <div className="rounded-md shadow-sm shadow-gray-600 sm:shadow-none overflow-hidden relative">
      <button className="absolute right-2 top-2">
            <FaHeart className="text-lg text-gray-600" />
          </button>
      <Link href={`/product-details/${product.id}`}>
      <div>
        <Image
          className="mx-auto p-2 object-cover  h-[5rem]  sm:w-auto"
          src={product.images[0].url}
          width={100}
          height={80}
          alt="card"
        />
      </div>
      <div className="bg-curved bg-white-gray text-center pt-5 pb-2 px-4">
        <h2 className="capitalize text-sm ">
          {product.title.length > 15
            ? product.title.slice(0, 15)
            : product.title}
        </h2>
        <p className="text-[0.8rem]">{product.category}</p>
        <div className="flex justify-between text-sm">
          <h5>${product.price}</h5>
         <Rating rating={product.rating.rate}/>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default ProductCard;
