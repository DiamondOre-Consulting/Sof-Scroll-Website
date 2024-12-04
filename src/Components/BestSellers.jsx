import React from "react";
import tissue1 from "../assets/tissue1.png";

import { Link } from "react-router-dom";
import pattern1 from "../assets/pattern1.png";
import facialTissue from "../assets/productAssets/facial_tissue.mp4";

const BestSellers = ({ cart, setCart }) => {
  // console.log("all products", Allproducts);
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

  const allproducts = [
    {
      name: "Toilet Tissue Paper Roll / 24 Rolls in a Packet / Virgin/Wood Pulp",
      category: "Toilet Rolls",
      recommendation: "Home Use",
      particulars: "Toilet Tissue Paper Roll LUXURY",
      itemCode: "SS100",
      pulls: "140 Pulls",
      price: "400",
      SheetCount: "140 Sheets",
      dimensions: "10 cm * 12.0 cm",
      ply: 3,
      gsm: 15,
      quality: "SOFT & HIGHLY OBSERVANT",
      material: "Virgin/Wood Pulp",
      weight: "88 gms",
      description:
        "SOF SSCRROL LUX its strong and soft 3-ply sheets, the toilet paper not only offers luxurious comfort but also a long-lasting, reliable use",
      Packaging: "24 Rolls in a Packet",
      JumboPackaging: "6 packets equal to 144 Rolls in 1 Carton",
      previews: [
        {
          previewUrl:
            "https://m.media-amazon.com/images/I/61gAWx8qoUL._SX679_.jpg",
          thumbUrl:
            "https://m.media-amazon.com/images/I/61gAWx8qoUL._SX679_.jpg",
        },
        {
          previewUrl:
            "https://m.media-amazon.com/images/I/71dAs-PDmNL._SX679_.jpg",
          thumbUrl:
            "https://m.media-amazon.com/images/I/71dAs-PDmNL._SX679_.jpg",
        },
      ],
      videoUrl:
        "https://res.cloudinary.com/dmpkp9ux2/video/upload/v1732532214/SofScroll/mpwjfwtiapgkgjgl2sm3.mp4",
      imageUrl: "https://m.media-amazon.com/images/I/61gAWx8qoUL._SX679_.jpg", // Dummy placeholder image URL
      fullDesc: [
        "Unparalleled softness and reliability.",
        "3-ply sheets for superior absorbency.",
        "Made from high-quality virgin wood pulp.",
      ],
    },

    {
      name: "Toilet Tissue Paper Roll / Virgin/Wood Pulp / 48 Rolls in a Packet ",
      category: "Toilet Rolls",
      particulars: "Toilet Tissue Paper Roll LUXURY",
      itemCode: "SS101",
      recommendation: "Home Use",
      pulls: "140 Pulls",
      SheetCount: "140 Sheets",
      dimensions: "10 cm * 12.0 cm",
      ply: 3,
      price: "400",
      gsm: 15,
      quality: "SOFT & HIGHLY OBSERVANT",
      material: "Virgin/Wood Pulp",
      weight: "88 gms",
      description:
        "SOF SSCRROL Luxury its strong and soft 3-ply sheets, the toilet paper not only offers luxurious comfort but also a long-lasting, reliable use",
      Packaging: "48 Rolls in a Packet",
      JumboPackaging: "3 packets equals to 144 Rolls in 1 Carton",
      previews: [
        {
          previewUrl:
            "https://m.media-amazon.com/images/I/51tfKhptLxL._SX679_.jpg",
          thumbUrl:
            "https://m.media-amazon.com/images/I/51tfKhptLxL._SX679_.jpg",
        },
        {
          previewUrl:
            "https://m.media-amazon.com/images/I/6102rtxvmQL._SX342_.jpg",
          thumbUrl:
            "https://m.media-amazon.com/images/I/6102rtxvmQL._SX342_.jpg",
        },
        {
          previewUrl:
            "https://m.media-amazon.com/images/I/61DecADKkNL._SX342_.jpg",
          thumbUrl:
            "https://m.media-amazon.com/images/I/61DecADKkNL._SX342_.jpg",
        },
      ],
      videoUrl: "",
      imageUrl: "https://m.media-amazon.com/images/I/51tfKhptLxL._SX679_.jpg", // Dummy placeholder image URL
      fullDesc: [
        "Experience ultimate softness and durability with our Toilet Tissue Paper Rolls, designed for everyday home use.",
        "Each roll features 3-ply sheets made from high-quality virgin wood pulp, ensuring superior absorbency and strength.",
        "With 140 sheets per roll and dimensions of 10 cm x 12 cm, these rolls cater perfectly to your daily needs.",
        "The luxurious texture provides a comfortable and hygienic experience with every pull.",
        "Conveniently packaged with 48 rolls per packet, making it an excellent choice for maintaining a steady supply.",
        "For bulk requirements, three packets equal 144 rolls, ideal for households or businesses seeking premium-quality tissue in large quantities.",
      ],
    },

    {
      name: "Facial Tissue Box / Pack of 6 Boxes",
      category: "Facial Tissue",
      particulars: "Facial Tissue box",
      itemCode: "SS110",
      recommendation: "Living room, Bathroom, Car, Office desk",

      pulls: "100 Pulls",
      SheetCount: "100 Sheets",
      price: "400",
      dimensions: "20 * 20 cm",
      ply: 2,
      gsm: 13.5,
      quality: "Extra soft Facial Tissue , absorbbent , Virgin/ Wood Pulp",
      material: "Virgin/ Wood Pulp",
      description:
        "Compact Flat facial tissue box for  For sniffles, messy finger foods, makeup smudges or small spills",
      Packaging: "Pack of 6 Boxes",
      JumboPackaging: "24 packets equals to 144 Boxes",
      previews: [
        {
          previewUrl:
            "https://m.media-amazon.com/images/I/51FEi4JtgnL._SX522_.jpg",
          thumbUrl:
            "https://m.media-amazon.com/images/I/51FEi4JtgnL._SX522_.jpg",
        },

        {
          previewUrl:
            "https://res.cloudinary.com/dmpkp9ux2/image/upload/v1732532210/SofScroll/xf9zo2qe60sfflms8ep1.jpg",
          thumbUrl:
            "https://res.cloudinary.com/dmpkp9ux2/image/upload/v1732532210/SofScroll/xf9zo2qe60sfflms8ep1.jpg",
        },
      ],
      videoUrl: facialTissue,
      imageUrl: "https://m.media-amazon.com/images/I/51FEi4JtgnL._SX522_.jpg", // Dummy placeholder image URL
      fullDesc: [
        "Extra soft, absorbent 2-ply facial tissue.",
        "Made from virgin wood pulp for superior quality.",
        "Ideal for personal hygiene, makeup removal, and small spills.",
      ],
    },

    {
      name: "Hospital Couch Roll",
      category: "Hospital Roll",
      particulars: "Examination Medical Couch Roll",
      itemCode: "SS112",
      quality: "Paper",
      SheetCount: "100 Mtr long",

      recommendation:
        "hospital Bed roll Tissue, Beauty Parlour spa Tissue Papper roll",
      pulls: "100 Mtr long",
      dimensions: "60 CM Width * 100 Mtr Long, White 100 Mtr long",
      ply: 1,
      gsm: 18 - 19,
      price: "400",
      weight: "2kg",
      material: "Virgin/ Wood Pulp",
      description:
        "Designed specifically for Medical examination of Hospital bed ,  massage Centres and beauty therapists",
      Packaging: "Pack of 6 Rolls",
      JumboPackaging: "12 packets equal to 72 Rolls in a Carton",
      previews: [
        {
          previewUrl:
            "https://m.media-amazon.com/images/I/31+CSqwVEGL._SX522_.jpg",
          thumbUrl:
            "https://m.media-amazon.com/images/I/31+CSqwVEGL._SX522_.jpg",
        },
        {
          previewUrl:
            "https://m.media-amazon.com/images/I/51yq6QLp1AL._SX522_.jpg",
          thumbUrl:
            "https://m.media-amazon.com/images/I/51yq6QLp1AL._SX522_.jpg",
        },
        {
          previewUrl:
            "https://res.cloudinary.com/dmpkp9ux2/image/upload/v1732605292/SofScroll/thclilhhgkpevtcb4dvm.avif",
          thumbUrl:
            "https://res.cloudinary.com/dmpkp9ux2/image/upload/v1732605292/SofScroll/thclilhhgkpevtcb4dvm.avif",
        },
      ],
      videoUrl: "",
      imageUrl: "https://m.media-amazon.com/images/I/31+CSqwVEGL._SX522_.jpg", // Dummy placeholder image URL
      fullDesc: [
        "Durable 1-ply paper roll made from virgin wood pulp.",
        "Soft and comfortable for medical and beauty treatments.",
        "60 cm wide and 100 meters long, perfect for covering examination tables.",
      ],
    },
  ];

  return (
    <div>
      <div className="relative py-10">
        <h1 className="relative mx-auto mb-1 text-3xl md:text-5xl text-center font-bold  text-gray-800 head">
          Our Best Sellers
        </h1>
        {/* <div className="w-40 h-1 mx-auto bg-dark"></div> */}
        {/* <img src={pattern1} alt="" className="absolute right-0 -top-20 " /> */}
        <div className="grid items-center justify-center grid-cols-1 gap-6 px-6 mx-auto mt-20 w-fit sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {allproducts?.map((product, index) => {
            const isInCart = cart.find(
              (item) => item.itemCode === product.itemCode
            );

            // Conditional class for centering the last item in the grid
            const isLastProduct = index === allproducts.length - 1;
            const gridItemClass = isLastProduct
              ? "sm:col-span-2 lg:col-span-3 flex justify-center" // Adjust the span to center based on breakpoints
              : "";

            return (
              <div key={index} className={gridItemClass}>
                <div className="md:w-[24rem]  h-full flex flex-col border overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-[14rem] w-full object-cover transition-opacity duration-300 hover:opacity-90"
                    />
                  </div>
                  <div className="flex flex-col px-4 pb-3 mt-2 space-y">
                    <h1 className="text-[1.15rem] font-semibold text-gray-800 truncate transition-colors duration-300 hover:text-dark">
                      {product.name}
                    </h1>
                    <p className="text-xs italic text-gray-700">
                      Quality:{" "}
                      <span className="text-gray-500">{product.quality}</span>
                    </p>
                  </div>
                  <Link
                    to={`/product/${product.itemCode}`}
                    className="w-[93%] p-2 mb-4 mx-auto text-center text-white transition-transform duration-300 rounded-md bg-dark hover:scale-105 hover:bg-opacity-90"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
