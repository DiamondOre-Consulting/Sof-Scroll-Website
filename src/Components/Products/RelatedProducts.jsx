import React, { useEffect, useState } from "react";
import Allproducts from "./AllProducts.js";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css';

const RelatedProducts = ({ cart, setCart, category, itemCode }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100, // Adjust this value to change when the animation triggers
        });
    }, []);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = Allproducts?.filter(
        (product) => product.category === category && product.itemCode !== itemCode
    );

    const addToCart = (product) => {
        if (!cart.find((item) => item.itemCode === product.itemCode)) {
            setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (product) => {
        setCart((prevCart) =>
            prevCart.filter((item) => item.itemCode !== product.itemCode)
        );
    };

    // This useEffect will run whenever the selected product changes
    useEffect(() => {
        if (selectedProduct) {
            // Scroll to top
            window.scrollTo(0, 0);

            // You can perform other side effects based on the selected product here
            console.log(`Selected product: ${selectedProduct.name}`);
        }
    }, [selectedProduct]); // Dependency array includes selectedProduct

    console.log(Allproducts)

    return (
        <div className="relative py-10 overflow-hidden h-fit" data-aos="fade-up">
            <h1 className="relative mx-auto mb-2 text-4xl text-center font-semibold md:text-5xl mf" data-aos="fade-left">
                Related products
            </h1>
            <div className="w-20 h-1 mx-auto mb-10 bg-dark md:w-60" data-aos="fade-up"></div>
            <Marquee className="overflow-hidden h-fit" pauseOnHover={true} data-aos="fade-up">
                <div className="flex mx-3 space-x-6 overflow-hidden" data-aos="fade-up">
                    {filteredProducts.slice(1, 10).map((product, index) => {
                        const isInCart = cart.find(
                            (item) => item.itemCode === product.itemCode
                        );

                        return (
                            <div key={index}>
                                <div className="max-w-[19rem] justify-between backdrop-blur w-full pb-2 h-[21.5rem] flex flex-col border rounded-lg shadow-md overflow-hidden transition-transform duration-300  ">
                                    <div className="relative">
                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            className="h-[12rem] w-full object-cover transition-opacity duration-300 hover:opacity-90"
                                        />
                                        <div className="absolute px-2 py-1 text-xs font-medium text-white bg-black rounded top-2 left-2 bg-opacity-60">
                                            New Arrival
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-4 pb-3 mt-2 space-y">
                                        <h1 className="text-[1.15rem] font-semibold text-gray-800 truncate transition-colors duration-300 hover:text-dark">
                                            {product.name}
                                        </h1>
                                        <p className="text-sm text-gray-600 line-clamp-2">
                                            {product.description}
                                        </p>
                                        <p className="text-xs italic text-gray-700 line-clamp-1">
                                            Quality: <span className='text-gray-500'>{product.quality}</span>
                                        </p>

                                    </div>
                                    <Link
                                        onClick={() => setSelectedProduct(product)}
                                        to={`/product/${product.itemCode}`}
                                        className="w-[93%] p-2 mx-auto text-center text-white transition-transform duration-300 rounded-md bg-dark hover:scale-105 hover:bg-opacity-90"
                                    >
                                        View Product
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Marquee>
        </div>
    );
};

export default RelatedProducts;
