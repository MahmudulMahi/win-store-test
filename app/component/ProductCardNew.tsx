import Image from "next/image";
import { Product } from "../actions/FetchProductByCategory";

// import { Product } from "@/app/actions/getBestDeals";

export default function ProductCardNew({ product }: { product: Product }) {
  return (
    <div className="border border-[#00000021] bg-white rounded-md p-3 hover:shadow transition flex flex-col">
      <p className="text-xs text-gray-500 mt-2">{product?.category}</p>

      <h3 className="text-sm text-[#034E53] line-clamp-1 mb-2 pt-1">
        {product?.title}
      </h3>
      <div className="h-40 flex items-center justify-center">
        <Image
          src={product?.image}
          alt={product?.title}
          width={100}
          height={100}
          className="object-contain "
        />
      </div>

      <div className="flex gap-2 mb-3">

        
          <span className="text-xs text-gray-400 line-through">
            RS 20.00
          </span>
       
        <span className="text-sm font-semibold text-sky-500">
          RS {product?.price}
        </span>
      </div>

      <button className="mt-auto bg-teal-500 text-white text-sm py-2 rounded hover:bg-teal-600">
        Add to cart
      </button>
    </div>
  );
}
