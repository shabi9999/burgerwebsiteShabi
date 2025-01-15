
// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// import ProductCard from "./Productcard";
// import { Product } from "@/pages/types";
// import { json } from "stream/consumers";

// const Menu = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);
//   const [showCart, setShowCart] = useState(false);
//   const [isChekout, setIsCheckout] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     async function fetchProducts() {
//       const response = await fetch("/api/products");
//       const data = await response.json();
//       setProducts(data);
//     }
//     fetchProducts();
//     // local storage
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => {
//       const updatedCart = [...prevCart, product];
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return updatedCart;
//     });

//     // cart visibility
//     const toggleCart = () => {
//       setShowCart((prev) => !prev);
//     };

//     // checkout model
//     const goToCheckout = () => {
//       setIsCheckout(true);
//     };

//     // cart clear method
//     const clearCart = () => {
//       setCart([]);
//       localStorage.removeItem("cart");
//     };

//     return (
//       <div className="relative min-h-screen py-6">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
//           style={{
//             backgroundImage:
//               "url('https://img.freepik.com/free-vector/realistic-cheeseburger-chalkboard-background_79603-1044.jpg?t=st=1736880363~exp=1736883963~hmac=6b04a7799bd3bbb71cc491b57f706ec7ff91d30cc302c743cab55bdbe5b871e9&w=740')",
//           }}
//         ></div>
//         {/* end */}

//         <div className="relative z-10">
//           <div className="max-w-6xl mx-auto text-center mb-8">
//             <h1 className="text-4xl font-bold text-white mb-4">
//               Delicious Burgers In Our Menu
//             </h1>
//             <p className="text-xl text-white">
//               Explore our section of mouth watering burgers to order noe!
//             </p>
//           </div>

//           {/* product section */}

//           <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
//             {products.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 {...product}
//                 onAddToCart={addToCart}
//               />
//             ))}
//           </div>

//           {/* Cart section */}
//           <div className="max-w-6xl mx-auto mt-8">
//             <button
//               onClick={toggleCart}
//               className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out transform"
//             >
//               {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
//             </button>
//             {showCart && (
//               <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
//                 <h2 className="text-4xl font-bold  mb-4 text-blue-600">
//                   Your Cart Items Includes:
//                 </h2>
//                 {cart.length > 0 ? (
//                   <div>
//                     <ul>
//                       {cart.map((product, index) => (
//                         <li
//                           key={index}
//                           className="flex items-center justify-center mb-6 transform transition-all duration-300 ease-in-out"
//                         >
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="w-20 h-40 sm-w-24 inline-block transition-transform duration-300 ease-in-out transform text-black"
//                           />
//                           <span className="ml-4 text-lg font-medium text-slate-600">
//                             {product.name} - ${product.price}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>

//                     <div className="flex justify-between items-center mt-6 text-black">
//                       <span className="font-semibold text-xl ">
//                         Total: $
//                         {cart.reduce(
//                           (total, product) => total + product.price,
//                           0
//                         )}
//                       </span>

//                       <div>
//                         <button
//                           onClick={goToCheckout}
//                           className="bg-green-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
//                         >
//                           Proceed To Checkout
//                         </button>
//                         <button
//                           onClick={clearCart}
//                           className="bg-red-600 py-3 px-8 rounded-lg ml-4 text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
//                         >
//                           Clear Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <p className="text-lg text-slate-600">Your Cart is empty</p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };
// };
// export default Menu;


"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ProductCard from "./ProductCardComponent";
import { Product } from "@/pages/types";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const router = useRouter();

  // Fetch products and load cart from localStorage
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Add to cart handler
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // Proceed to checkout
  const goToCheckout = () => {
    setIsCheckout(true);
    router.push("/checkout");
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/realistic-cheeseburger-chalkboard-background_79603-1044.jpg?t=st=1736880363~exp=1736883963~hmac=6b04a7799bd3bbb71cc491b57f706ec7ff91d30cc302c743cab55bdbe5b871e9&w=740')",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Delicious Burgers In Our Menu
          </h1>
          <p className="text-xl text-white">
            Explore our selection of mouth-watering burgers to order now!
          </p>
        </div>

        {/* Product Section */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Cart Section */}
        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out transform"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCart && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-blue-600">
                Your Cart Items:
              </h2>

              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center mb-6 transform transition-all duration-300 ease-in-out"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-40 sm:w-24 inline-block transition-transform duration-300 ease-in-out transform"
                        />
                        <span className="ml-4 text-lg font-medium text-slate-600">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6 text-black">
                    <span className="font-semibold text-xl">
                      Total: $
                      {cart.reduce(
                        (total, product) => total + product.price,
                        0
                      )}
                    </span>

                    <div>
                      <button
                        onClick={goToCheckout}
                        className="bg-green-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Proceed To Checkout
                      </button>
                      <button
                        onClick={clearCart}
                        className="bg-red-600 py-3 px-8 rounded-lg ml-4 text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-slate-600">Your cart is empty</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;

