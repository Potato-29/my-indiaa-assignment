import { toast } from "react-toastify";
import { toastOptions } from "../../constants/toastOptions";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartReducer";
import { useState } from "react";
import QuantityCounter from "../QuantityCounter/QuantityCounter";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const defaultQty = 1;
  const [isProductAdded, setIsProductAdded] = useState(false);
  const cart = useSelector((state) => state.cart.items);
  const cartItem = cart.find((item) => item.id === product.id);

  const addToCart = async (product) => {
    try {
      let obj = {
        ...product,
        qty: defaultQty,
      };
      dispatch(addItem(obj));
      setIsProductAdded(true);
    } catch (error) {
      toast.error("Something went wrong", toastOptions);
    }
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-2 py-3">
      <img
        className="w-full h-48 object-contain"
        src={product?.image}
        alt="Product"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 truncate">{product?.title}</div>
        <p className="text-gray-700 text-base truncate">
          {product?.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-xl font-semibold text-gray-900">
          ₹{product?.price}
        </span>
        {isProductAdded && cartItem !== undefined ? (
          <QuantityCounter product={cartItem} initialQty={defaultQty} />
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-700 focus:outline-none
         focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
