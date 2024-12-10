import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Allproducts from "@/Components/Products/AllProducts";
const FoxNutsPage = ({ cart, setCart }) => {

  const itemCode  = "SS114";
  console.log(itemCode)
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0); // Initialize quantity state
  const navigate = useNavigate();

  const productVideo = product?.videoUrl;

  
  useEffect(() => {
    const foundProduct = Allproducts.find((prod) => prod.itemCode === itemCode);
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.imageUrl); // Set initial main image

      // Check if product is in cart and set quantity
      const cartItem = cart.find((item) => item.itemCode === itemCode);
      if (cartItem) {
        setQuantity(cartItem.quantity);
      }
    }
  }, [itemCode, cart]); // Depend on cart to update quantity if product is added/removed

  const updateCartInLocalStorage = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCart = (newQuantity) => {
    const existingItem = cart.find((item) => item.itemCode === itemCode);
    if (existingItem) {
      // Update quantity if already in cart
      const updatedCart = cart.map((item) =>
        item.itemCode === itemCode ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
      updateCartInLocalStorage(updatedCart); // Update local storage
    } else {
      // Add new item to cart
      const updatedCart = [...cart, { ...product, quantity: newQuantity }];
      setCart(updatedCart);
      updateCartInLocalStorage(updatedCart); // Update local storage
    }
  };

  const removeFromCart = () => {
    const updatedCart = cart.filter((item) => item.itemCode !== itemCode);
    setQuantity(quantity - 1);
    setCart(updatedCart);
    updateCartInLocalStorage(updatedCart); // Update local storage
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      addToCart(newQuantity); // Auto update cart when increasing
      return newQuantity;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity >= 1) {
        const newQuantity = prevQuantity - 1;
        addToCart(newQuantity); // Auto update cart when decreasing
        return newQuantity;
      }
      return prevQuantity; // Prevent going below 1
    });
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  const isInCart = cart.some((item) => item.itemCode === itemCode);

  const buyButton = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      addToCart(1);
      navigate("/cart");
    }
  };



  // const addToCart = (newQuantity) => {
  //   const existingItem = cart.find((item) => item.itemCode === itemCode);
  //   if (existingItem) {
  //     // Update quantity if already in cart
  //     const updatedCart = cart.map((item) =>
  //       item.itemCode === itemCode ? { ...item, quantity: newQuantity } : item
  //     );
  //     setCart(updatedCart);
  //     updateCartInLocalStorage(updatedCart); // Update local storage
  //   } else {
  //     // Add new item to cart
  //     const updatedCart = [...cart, { ...product, quantity: newQuantity }];
  //     setCart(updatedCart);
  //     updateCartInLocalStorage(updatedCart); // Update local storage
  //   }
  // };

  const data = [
    {
      image: "https://t3.ftcdn.net/jpg/09/90/14/22/360_F_990142251_RnKM29HEOCg3PbkWnSynKL8XHcL9IVPs.jpg",
      title: "Introduction to Makhana",
      content: "Makhana, also known as Foxnut or Gorgon nut, is a highly nutritious and organic non-cereal food. It is native to India, especially Bihar, and has been used in various cultures for its medicinal properties and health benefits."
    },
    {
      image: "https://media.post.rvohealth.io/wp-content/uploads/2021/05/makhana-1200x628-facebook.jpg",
      title: "Health Benefits of Makhana",
      content: "Makhana is low in fat, high in protein, and loaded with essential vitamins and minerals. It helps in weight loss, improves heart health, regulates blood pressure, and is a great snack for diabetics."
    },
    {
      image: "https://www.healthifyme.com/blog/wp-content/uploads/2021/07/Makhana-The-Healthy-Indian-Snack.jpg",
      title: "How Makhana Can Benefit Your Health",
      content: "Makhana is rich in antioxidants and anti-aging properties. It supports a healthy digestive system, aids in reducing stress, and enhances sexual health. It is also beneficial for pregnant women and children."
    },
  ];

  return (
    <div className="w-full mx-auto py-10 bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 dark:bg-gray-900">
      <section className="w-full h-full px-6 md:px-12 lg:px-16 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Discover the Power of Nuttz Magic
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Makhana, also known as Fox Nut or Gorgon Nut, is a powerhouse of nutrients with a variety of health benefits. Explore how this amazing seed can enhance your well-being.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out"
              >
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={item.image}
                  alt={`Image for ${item.title}`}
                  loading="lazy" // Added lazy loading for better performance
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-md text-gray-600 dark:text-gray-400">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Section for Detailed Health Benefits */}
          <div className="mt-16 text-center grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <div>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Health Benefits of Makhana
            </h2>
            <div className="space-y-6">
              <ul className="list-disc text-left mx-auto space-y-4 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
                <li>Helps with insomnia and promotes better sleep.</li>
                <li>Rich in calcium, making it a great snack for bone health.</li>
                <li>Helps regulate blood pressure and promotes heart health.</li>
                <li>Contains anti-aging compounds that rejuvenate the body.</li>
                <li>Supports weight loss due to high fiber and low fat content.</li>
                <li>Improves digestion and gut health with its high fiber content.</li>
                <li>Good for pregnant women due to its nutrient-rich composition.</li>
                <li>Promotes healthy kidney function and circulation.</li>
                <li>Contains antioxidants that help in preventing inflammation and disease.</li>
              </ul>
            </div>

            </div>

            <div>
              <img src="https://www.careinsurance.com/upload_master/media/makhana-nutrient-value-per-100-gm.webp" alt="" />
            </div>
           
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Add Makhana to Your Daily Diet
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Including Makhana in your daily diet can be a game-changer for your health. A handful of Makhana a day is all it takes to reap the benefits!
            </p>
            <a
               onClick={() => buyButton()}
              className="text-xl font-semibold text-white bg-dark px-4 py-2 rounded-md dark:text-blue-400 hover:underline cursor-pointer transition-colors duration-200"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoxNutsPage;
