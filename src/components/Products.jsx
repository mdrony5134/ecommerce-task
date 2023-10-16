import { useEffect, useState } from "react";
import { useProduct } from "./context/ContextProvider";
import LoginModal from "./LoginModal"; // Import your LoginModal component

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null); // State to manage user authentication status

  const allProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    console.log(data)
  };

  useEffect(() => {
    allProducts();
  }, []);

  const categories = [...new Set(products.map((item) => item.category))];
  const { dispatch } = useProduct();

  const handleAddToCart = (product) => {
    // if (user) {
      // User is logged in, add item to cart
      dispatch({ type: "Add_To_Cart", payload: product });
    // } else {
      // User is not logged in, show login modal
      // setShowLoginModal(true);
    // }
  };

  return (
    <div className="container mx-auto p-4">
      {categories.map((category, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-2xl font-bold mt-2 mb-2 uppercase">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products
              .filter((item) => item.category === category)
              .map((product, productIndex) => (
                <div
                  key={productIndex}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-48 h-48 mb-4 mx-auto"
                    src={product.image}
                  />
                  <h3 className="text-gray-900 text-lg font-medium mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 mb-2">${product.price}</p>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={()=>handleAddToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          setUser={setUser}
        />
      )} */}
    </div>
  );
};

export default Products;
