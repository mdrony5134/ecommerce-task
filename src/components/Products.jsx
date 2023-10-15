import { useState } from "react";
import { useEffect } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  const allProduct = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProduct(data.products);
    console.log(data.products);
  };

  useEffect(() => {
    allProduct();
  }, []);

  return (
    <div>
      {product.map((item, index)=>{
        return(
            <div className="container px-5 py-24 mx-auto" key={index}>
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                
               <div>
               <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src= {item.thumbnail}
                />
               </div>
    
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.description}
                  </h2>
                  <p className="mt-1">${item.price}</p>
                  
                </div>
                <button>Add to cart</button>

              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Products;
