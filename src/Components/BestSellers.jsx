import React, { useEffect, useRef } from "react";
import tissue1 from "../assets/tissue1.png";

import { Link } from "react-router-dom";
import pattern1 from "../assets/pattern1.png";
import facialTissue from "../assets/productAssets/facial_tissue.mp4";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


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


  const scrollContainerRef = useRef(null);
  const MyJourneyRef = useRef(null);

  useEffect(() => {
    const MyJourney = MyJourneyRef.current;
    const scrollContainer = scrollContainerRef.current;
  
    const totalScrollDistance = MyJourney.scrollWidth - scrollContainer.offsetWidth;
  
    const tl = gsap.to(MyJourney, {
      x: () => `-${totalScrollDistance}px`, // Adjusted calculation
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainer,
        start: "top top",
        end: `+=${totalScrollDistance}`, // Dynamically calculated end
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  const bgColors = ["bg-orange-300", "bg-blue-300", "bg-green-300", "bg-red-300"];

  
  return (
    <div>
    <div
      ref={scrollContainerRef}
      className="w-full h-screen overflow-x-hidden overflow-y-hidden  scroll-container"
      aria-label="Horizontal Scroll Container"
    >
      <div
        ref={MyJourneyRef}
        className="flex space-x-10 md:mt-10  overflow-hidden items-center justify-center  horizontal-scroll w-max"
      >
        {allproducts?.map((product, index) => {
          const isInCart = cart.find(
            (item) => item.itemCode === product.itemCode
          );
  
          return (
            <div
              className="md:w-[70vw] h-[100vh] mx-40 flex  items-center justify-center"
              key={index}
            >
              <div className={`flex flex-col w-full h-[70vh]  mt-20 border border-dark border-2   ${bgColors[index % bgColors.length]} lg:flex-row`}>
                {/* Left side with image */}
                <img
                  className="object-cover  object-top h-[55%] w-full lg:max-w-[60vw] xl:max-w-[50vw] mx-auto lg:h-full bg-cover no-repeat"
                  src={product.imageUrl} // Remove curly braces around `product.imageUrl`
                  alt="Journey image"
                />
                {/* Right side with description */}
                <div className="w-[100vw] lg:w-[70vw] h-full text-white flex flex-col justify-center items-center p-4 lg:p-10">
                  <p className="mb-10 text-2xl text-center text-maincolor lg:text-3xl head">
                  {product.name}
                  </p>
                  <span className="text-gray-100">{product.quality}</span>
                  <p
                    className="text-sm font-thin text-center lg:text-xl"
                    style={{ letterSpacing: "2px" }}
                  >
                    {product.description}
                  </p>
                  <Link
                    to={`/product/${product.itemCode}`}
                    className="w-[93%] p-2 mb-4 mx-auto mt-8 un text-center hover:underline text-white transition-transform duration-300 rounded-md  hover:scale-105 hover:bg-opacity-90"
                  >
                    View Product
                  </Link>

                </div>
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
