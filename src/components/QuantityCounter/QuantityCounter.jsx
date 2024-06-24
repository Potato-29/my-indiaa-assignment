import { useDispatch } from "react-redux";
import {
  decreaseItemQty,
  increaseItemQty,
} from "../../redux/slices/cartReducer";

const QuantityCounter = ({ product }) => {
  const dispatch = useDispatch();

  const increaseQty = () => {
    dispatch(increaseItemQty({ id: product.id }));
  };

  const decreaseQty = () => {
    dispatch(decreaseItemQty({ id: product.id }));
  };
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={decreaseQty}
        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
      >
        -
      </button>
      <span className="text-xl font-semibold">{product?.qty}</span>
      <button
        onClick={increaseQty}
        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
