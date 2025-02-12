import React, { useEffect } from "react";
import Allproducts from "./AllProducts";
import { Link, useParams } from "react-router-dom";
import productsbg from "../../assets/productsbg.jpg";
import BreadCrumbs from "../BreadCrumbs";

const ProductCategory = ({ cart, setCart }) => {
  console.log(1);
  const { category } = useParams();
  console.log(category);
  const filteredProducts = Allproducts?.filter(
    (product) => product.category === category
  );

  console.log(filteredProducts);

  // Add product to cart
  const addToCart = (product) => {
    if (!cart.find((item) => item.itemCode === product.itemCode)) {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.itemCode !== product.itemCode)
    );
  };

  // for starting page from the top

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: category }];
  console.log("my filtered product ", filteredProducts);
  return (
    <>
      <BreadCrumbs headText={"All Products"} items={breadcrumbItems} />
      <div className="pb-24">
        {filteredProducts.length > 0 &&
          filteredProducts[0].category === "Row Makhana" && (
            <section
              key={filteredProducts[0]}
              className=" py-4 px-6 md:px-16 lg:px-20"
            >
              <div className=" mx-auto  p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray- 800 text-center mb-6">
                  Raw Jumbo Makhana
                </h2>
                <ul className="space-y-4 text-gray-700 text-lg md:text-xl leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">
                      &#8226;
                    </span>
                    Discover the essence of wholesomeness with our Raw Jumbo
                    Makhana, sourced from trusted farmers and producers to
                    ensure premium quality.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">
                      &#8226;
                    </span>
                    Handpicked and 100% natural, these makhana are a rich source
                    of plant protein & are hygienically packed, making them a
                    perfect option for anytime snacking.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">
                      &#8226;
                    </span>
                    Enjoy them straight out of the pack for a satisfying treat,
                    roast them at home for an extra crunch, or add them to your
                    favourite recipes for a nutritious twist.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">
                      &#8226;
                    </span>
                    Elevate your snacking experience with our signature quality
                    makhana, the perfect blend of taste, health, and
                    versatility.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">
                      &#8226;
                    </span>
                    No artificial preservatives.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">
                      &#8226;
                    </span>
                    Packed with nutritional value; makhana makes an excellent
                    snack that supports your well-being.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">
                      &#8226;
                    </span>
                    Meticulously sorted to ensure consistently thick,
                    high-quality makhana.
                  </li>
                </ul>
              </div>
            </section>
          )}

        {filteredProducts.length > 0 &&
          filteredProducts[0].category === "Flavored Makhana" && (
            <section key={filteredProducts[0]} className="py-10 px-6 md:px-16 lg:px-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Flavoured Roasted Makhana</h2>
              <p className="text-lg text-gray-700 mt-4">
                <span className="font-semibold">Nutzz Magic</span> flavoured makhanas are all <span className="text-gray-800 font-semibold">GLUTEN-FREE & VEGAN</span>. They're roasted in olive oil and have a unique flavour, making them a great everyday spicy snack.
              </p>
            </div>
            
            <div className="max-w-8xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Crunchy and Delicious</h3>
                <p className="text-gray-700 mt-2">Enjoy the satisfying crunch and delightful taste of our foxnuts. Whether roasted, seasoned, or plain, they will tantalize your taste buds.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Healthy Alternative to Popcorn</h3>
                <p className="text-gray-700 mt-2">Foxnuts offer more nutrition compared to popcorn without compromising taste, making them a great snack.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Rich in Antioxidants</h3>
                <p className="text-gray-700 mt-2">Packed with flavonoids and polyphenols, foxnuts help protect the body from oxidative stress.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Promotes Digestive Health</h3>
                <p className="text-gray-700 mt-2">Foxnuts contain fiber that supports digestion, promotes gut health, and prevents constipation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Convenient Packaging</h3>
                <p className="text-gray-700 mt-2">Our foxnuts come in reusable jars, keeping them fresh and easy to carry for on-the-go snacking.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Sustainably Sourced</h3>
                <p className="text-gray-700 mt-2">We ensure sustainable and ethical sourcing, prioritizing environmental conservation and fair labor practices.</p>
              </div>
            </div>
         
          </section>
          )}

        {/* <h1 className="text-5xl text-center mf">All Products</h1> */}
        <div className="grid items-center justify-center grid-cols-1 gap-6 px-6 w-full   mt-20 w-fit sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredProducts.map((product, index) => {
            const isInCart = cart.find(
              (item) => item.itemCode === product.itemCode
            );

            return (
              <div key={index}>
                <div className=" h-full flex flex-col border backdrop-blur overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-[24rem] object-top w-full object-cover  transition-opacity duration-300 hover:opacity-90"
                    />
                    {/* <div className="absolute px-2 py-1 text-xs font-medium text-white bg-black rounded top-2 left-2 bg-opacity-60">
                                            New Arrival
                                        </div> */}
                  </div>
                  <div className="flex flex-col px-4 pb-3 mt-2 space-y">
                    <h1 className="text-[1.15rem] text-wrap font-semibold text-gray-800 truncate transition-colors duration-300 hover:text-dark">
                      {product.name}
                    </h1>
                    {/* <p className="text-sm text-gray-600 truncate">
                                            {product.description}
                                        </p> */}
                    {product?.quality && (
                      <p className="text-xs italic text-gray-700">
                        Quality:{" "}
                        <span className="text-gray-500">{product.quality}</span>
                      </p>
                    )}
                  </div>
                  <Link
                    to={`/product/${product.itemCode}`}
                    className="w-[93%] p-2 mx-auto mb-4  text-center text-white transition-transform duration-300 rounded-md bg-dark hover:scale-105 hover:bg-opacity-90"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
