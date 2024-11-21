import React, { Fragment, useState } from "react";

import PropTypes from "prop-types";
import { FaHeart, FaShare, FaStar } from "react-icons/fa6";

const product = {
    title: "Beats Headphone 2019",
    previews: [
        {
            previewUrl:
                "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2.png",
            thumbUrl:
                "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-1.png",
        },
        {
            previewUrl:
                "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
            thumbUrl:
                "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
        },
        {
            previewUrl:
                "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
            thumbUrl:
                "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
        },
    ],
    rating: 5.0,
    rateCount: 1256,
    price: 27351,
    colorVariants: [
        { bgcolor: "bg-yellow-500", value: "Multi" },
        { bgcolor: "bg-blue-500", value: "Blue" },
        { bgcolor: "bg-red-400", value: "Pink" },
        { bgcolor: "bg-black", value: "Black" },
        { bgcolor: "bg-red-600", value: "Red" },
    ],
    sizeVariants: [
        { label: "XXS", value: "SSX", title: "Extra extra small" },
        { label: "XS", value: "XS", title: "Extra small" },
        { label: "S", value: "S", title: "Small" },
        { label: "M", value: "M", title: "Medium" },
        { label: "L", value: "L", title: "Large" },
        { label: "XL", value: "XL", title: "Extra large" },
        { label: "XXL", value: "XXL", title: "Extra extra large" },
        {
            label: "XXXL",
            value: "XXXL",
            title: "Extra extra extra large",
            disabled: true,
        },
    ],
};

const ProductPreviews = ({ previews }) => {
    const [index, setIndex] = useState(0);

    return (
        <div className="p-4 bg-gray-100 dark:bg-slate-800 rounded-xl sm:p-6 lg:p-12 lg:mr-6">
            <div className="mb-4 text-center md:p-6">
                <img
                    src={previews[index].previewUrl}
                    alt=""
                    className="w-full h-auto max-w-full"
                />
            </div>

            <ul className="flex gap-3">
                {previews.map((preview, i) => (
                    <li
                        className="flex items-center justify-center w-24 h-24 p-2 border border-gray-200 rounded-md cursor-pointer dark:border-slate-700"
                        key={i}
                        onClick={() => setIndex(i)}
                    >
                        <img src={preview.thumbUrl} alt="" className="h-auto max-w-full" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

ProductPreviews.propTypes = {
    previews: PropTypes.array.isRequired,
};

const ColorVariant = () => {
    const [selectedColor, setSelectedColor] = useState("Multi");

    const handleColorChange = (value) => {
        setSelectedColor(value);
    };

    return (
        <>
            <div className="mb-6">
                <h5 className="mb-2 font-medium">
                    Color:{" "}
                    <span className="opacity-50">
                        {selectedColor &&
                            product.colorVariants.find(
                                (color) => color.value === selectedColor
                            )?.value}
                    </span>
                </h5>
                <div className="flex gap-3">
                    {product.colorVariants.map((item, i) => (
                        <Fragment key={i}>
                            <input
                                type="radio"
                                className="absolute hidden"
                                autoComplete="off"
                                checked={selectedColor === item.value}
                                onChange={() => handleColorChange(item.value)}
                            />
                            <label
                                className={`w-8 h-8 rounded-full ${item.bgcolor
                                    } border-2 border-white dark:border-[#0b1727] cursor-pointer mt-1 hover:outline hover:outline-1 hover:outline-${item.color
                                    } ${selectedColor === item.value &&
                                    `outline outline-1 outline-${item.color}`
                                    }`}
                                onClick={() => handleColorChange(item.value)}
                            ></label>
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

const SizeVariant = () => {
    const [selectedSize, setSelectedSize] = useState("XXS");

    const handleSizeChange = (value) => {
        if (product.sizeVariants.find((size) => size.value === value)?.disabled) {
            return;
        }
        setSelectedSize(value);
    };

    return (
        <div className="mb-6">
            <h5 className="mb-2 font-medium">
                Size:{" "}
                <span className="opacity-50">
                    {selectedSize &&
                        product.sizeVariants.find((size) => size.value === selectedSize)
                            ?.title}
                </span>
            </h5>
            <div className="flex flex-wrap gap-2 mb-2">
                {product.sizeVariants.map((size) => (
                    <React.Fragment key={size.label}>
                        <input
                            type="radio"
                            className="absolute hidden"
                            autoComplete="off"
                            checked={selectedSize === size.label}
                            onChange={() => handleSizeChange(size.label)}
                        />
                        <label
                            className={`bg-gray-100 dark:bg-slate-800 
                                hover:bg-slate-100
                                dark:hover:bg-blue-100/[0.2]
                                cursor-pointer
                                py-1 px-4 rounded-full border mt-1 ${selectedSize === size.label
                                    ? "border-blue-600 dark:border-blue-600"
                                    : "border-blue-50 dark:border-blue-600 dark:border-opacity-20"
                                }  ${size.disabled
                                    ? "line-through opacity-40 cursor-not-allowed"
                                    : "cursor-pointer"
                                }`}
                            onClick={() => handleSizeChange(size.value)}
                        >
                            {size.label}
                        </label>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

const QtyField = ({ name, value, onChange }) => {
    const qtyControl = (qty) =>
        onChange({
            target: {
                name,
                type: "radio",
                value: qty < 1 ? 1 : qty,
            },
        });

    return (
        <div className="flex w-24 mb-4 h-11">
            <input
                className="w-2/3 pl-2 overflow-hidden text-lg font-bold text-center bg-transparent border border-black rounded-lg dark:border-white focus:outline-none"
                type="number"
                placeholder=""
                value={value}
                onChange={(e) => qtyControl(e.target.value)}
            />
            <div className="flex flex-col w-1/3 p-0 overflow-hidden bg-transparent border border-black rounded-lg dark:border-white">
                <button
                    className="text-lg font-bold leading-none text-blue-600 hover:bg-blue-600 hover:text-white h-1/2"
                    type="button"
                    onClick={() => qtyControl(parseInt(value) - 1)}
                >
                    -
                </button>
                <button
                    className="text-lg font-bold leading-none text-blue-600 hover:bg-blue-600 hover:text-white h-1/2"
                    type="button"
                    onClick={() => qtyControl(parseInt(value) + 1)}
                >
                    +
                </button>
            </div>
        </div>
    );
};

QtyField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
};

const ProductPage = () => {
    const [formData, setFormData] = useState({
        color: "Multi",
        size: "XL",
        qty: 1,
    });

    const setField = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col gap-6 lg:flex-row">
                    <div className="w-full lg:w-1/2">
                        <ProductPreviews previews={product.previews} />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="mb-6 lg:mb-12">
                            <h1 className="mb-4 text-2xl font-medium leading-none md:text-4xl">
                                {product.title}
                            </h1>
                            <p className="mb-6 opacity-70">
                                <span>4.0</span>{" "}
                                <FaStar
                                    className="mx-2 text-yellow-500"
                                />
                                <a href="#!" className="ml-1 font-medium text-blue-600">
                                    8 Reviews
                                </a>{" "}
                                <span className="ml-2">104 Order</span>
                            </p>
                            <p className="my-4 opacity-70 lg:mr-56 xl:mr-80">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                nec consequat lorem. Maecenas elementum at diam consequat
                                bibendum.
                            </p>
                            <h3 className="text-2xl font-medium text-blue-600">
                                Rs. {product.price}
                            </h3>
                        </div>

                        <form action="#!">
                            <div className="mb-6">
                                <ColorVariant />
                            </div>
                            <div className="mb-6">
                                <SizeVariant />
                            </div>
                            <div className="mb-6">
                                <h5 className="mb-2 font-medium">QTY</h5>
                                <QtyField onChange={setField} name="qty" value={formData.qty} />
                            </div>

                            <div className="flex flex-col w-full gap-3 my-7">
                                <div className="flex items-center w-full max-w-lg gap-4">
                                    <button className="bg-blue-600 border border-blue-600 text-white text-sm rounded uppercase hover:bg-opacity-90 px-10 py-2.5 h-10 md:px-12 w-1/2">
                                        Buy Now
                                    </button>
                                    <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm rounded uppercase px-6 py-2.5 h-10 md:px-12 w-1/2">
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="flex items-center w-full gap-4">
                                    <button className="px-3 py-2 text-blue-600 rounded hover:bg-blue-600 hover:bg-opacity-10">
                                        <FaHeart /> Add to wishlist
                                    </button>
                                    <button className="px-3 py-2 text-blue-600 rounded hover:bg-blue-600 hover:bg-opacity-10">
                                        <FaShare className="mr-1" /> share
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ProductPage