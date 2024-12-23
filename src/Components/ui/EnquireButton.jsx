import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { RxQuestionMarkCircled } from "react-icons/rx";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllProducts from "../../Components/Products/AllProducts";

function EnquireButton() {
  const [enquire, setEnquire] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    products: [],
    description: "",
    imageURL: "",
  });
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      toast.error("No file selected.");
      return;
    }
    try {
      const fileUrl = URL.createObjectURL(file);
      setFormData((prevFormData) => ({ ...prevFormData, imageURL: fileUrl }));
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Image upload failed.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevFormData) => {
      const updatedProducts = checked
        ? [...prevFormData.products, value]
        : prevFormData.products.filter((product) => product !== value);
      return { ...prevFormData, products: updatedProducts };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.phone || !formData.description) {
      toast.error("All fields are required.");
      return;
    }
  
    setLoading(true);
  
    const emailData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      products: formData.products.join(", "), // Convert products array to a string
      description: formData.description,
      imageURL: formData.imageURL,
    };
  
    emailjs
      .send("service_cjs69us", "template_mafjwnv", emailData, "bV5Ar2-E2KVthub0u")
      .then(
        (response) => {
          toast.success("Email sent successfully!");
          setEnquire(false)
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            products: [],
            description: "",
            imageURL: "",
          });
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
          setLoading(false);
        }
      );
  };
  

  return (
    <>
      {enquire ? (
        <button
          onClick={() => setEnquire(false)}
          className="bg-dark py-2 px-4 rounded-full text-white flex justify-center items-center gap-2 shadow-lg hover:bg-gray-800 transition"
        >
          <span className="text-lg">Quote me</span>
          <RxQuestionMarkCircled className="text-white text-xl" />
        </button>
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-start z-50">
          <div className="w-full mx-4 md:mx-0 md:max-w-4xl mt-12 bg-white p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setEnquire(true)}
              className="absolute top-4 right-4 text-red-500 text-2xl"
            >
              <FaXmark />
            </button>

            <h3 className="text-3xl font-semibold text-center underline mb-6">Quote me!</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-dark"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-dark"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-dark"
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-dark"
                />
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Select Products:</h4>
                <div className="relative">
                  <div
                    className="border p-3 rounded cursor-pointer bg-gray-100"
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                  >
                    {formData.products.length > 0
                      ? formData.products.length 
                      : "Select products"}
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute mt-2 w-full max-h-48 overflow-y-auto border bg-white shadow-lg rounded z-10">
                      {AllProducts.map((product, index) => (
                        <label
                          key={index}
                          className="block px-3 py-2 hover:bg-gray-100 flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            value={product.name}
                            checked={formData.products.includes(product.name)}
                            onChange={handleCheckboxChange}
                          />
                          <span>{product.name}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-dark"
                rows="4"
                required
              />

              <button
                type="submit"
                className="w-full bg-dark text-white py-3 rounded shadow hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
}

export default EnquireButton;
