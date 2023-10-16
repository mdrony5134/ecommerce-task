import { useProduct } from "./context/ContextProvider";
import { AiOutlineClose } from "react-icons/ai";
const Cart = () => {
  const { state, dispatch } = useProduct();

  const {totalItems, totalPrice} = state.cart.reduce((acc, curr)=>{
    acc.totalItems += curr.quantity
    acc.totalPrice += curr.quantity * curr.price
    return acc;
  },{
    totalItems:0,
    totalPrice:0
  })
  
  return (
    <>
      <div className="relative flex gap-8 overflow-x-auto sm:rounded-lg mt-6 ml-6">
        <table className="w-[70%] text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product image
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Subtotal
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {state.cart.map((item, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-xl"
                  key={index}
                >
                  <td className="px-6 py-4">
                    <img
                      className="object-cover object-center w-24 h-24 mb-4 mx-auto"
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">${item.price}</td>
                  <td className="px-6 py-4">${item.price * item.quantity}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() =>
                        dispatch({ type: "Remove_To_Cart", payload: item })
                      }
                      className="bg-[#ff6347] px-3 py-2 text-white text-lg rounded-md"
                    >
                      <AiOutlineClose />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="relative overflow-x-auto  sm:rounded-lg">
          <table className="w-96 h-20 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Total Item
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b text-lg dark:bg-gray-900 dark:border-gray-700">
                <td className="pl-12 py-4">{totalItems}</td>
                <td className="pl-10 py-4">${totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
