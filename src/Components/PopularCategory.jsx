import React, { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const PopularCategory = () => {
  useEffect(() => {
    const cardWrappers = gsap.utils.toArray(".card-wrapper");

    const scaleMax = gsap.utils.mapRange(1, cardWrappers.length - 1, 0.95, 1);

    const blockHeight = 300;
    const time = 1;

    gsap.set(cardWrappers, {
      y: (index) => 30 * index,
      transformOrigin: "center top",
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".trigger",
        start: "center center",
        end: `${blockHeight * 5} top`,
        scrub: true,
        markers: false,
      },
    });

    console.log("fixed")

    tl.from(".card-container", {
      y: () => blockHeight / 2,
      duration: 1,
    })
      .to(".card-wrapper:not(:first-child)", {
        yPercent: (i) => -100 * (i + 1),
        duration: time / 2,
        stagger: time,
      })
      .to(
        ".card-wrapper:not(:last-child)",
        {
          rotationX: -20,
          scale: (index) => scaleMax(index),
          stagger: {
            each: time,
          },
        },
        "<"
      );

    ScrollTrigger.refresh();

    ScrollTrigger.create({
      trigger: ".extra-trigger",
      start: "top top",
      end: () => tl.scrollTrigger.end,
      pin: true,

      markers: false,
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  // start: "top top",
  // end: () => tl.scrollTrigger.end,
  const images = [
    {
      category: "Toilet Rolls",
      src: "https://m.media-amazon.com/images/I/61gAWx8qoUL._SY450_.jpg",
      text: "Toilet Tissue Rolls",
      description:
        "Essential for maintaining hygiene in homes and public spaces.",
    },
    {
      category: "Kitchen Rolls",
      src: "https://m.media-amazon.com/images/I/71pLrJb--mL._SX522_.jpg",
      text: "Kitchen Tissue Rolls",
      description:
        "Perfect for cleaning spills and keeping kitchen surfaces clean.",
    },
    {
      category: "Facial Tissue",
      src: "https://img.freepik.com/free-vector/realistic-tissue-box-mockup_52683-87334.jpg?t=st=1732854132~exp=1732857732~hmac=6206598c7b2d41d117418427cb5a5b6bc007f45d34ddb160a052f1a3fa1679fd&w=740",
      text: "Facial Tissue Box",
      description:
        "Soft and gentle for personal use, especially for sensitive skin.",
    },
    {
      category: "Hospital Roll",
      src: "https://m.media-amazon.com/images/I/31lyTISOoDL.jpg",
      text: "Hospital Couch Roll",
      description:
        "Used in healthcare settings to maintain cleanliness and hygiene.",
    },
  ];

  return (
    <>
      <div className="trigger relative h-screen">
        <div className="hero "></div>
        <div className="extra-trigger">
          <h1 className="text-3xl md:text-5xl head mb-20 text-center">
            Popular Categories
          </h1>
          <div className="card-container relative">
            {images.map((item, index) => (
              <div key={index} className="card-wrapper relative">
                <div className="card relative text-white  flex flex-row-reverse items-start  h-[30vh] md:h-[70vh] w-[80vw] mx-auto rounded-lg shadow-lg overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0  bg-gradient-to-r from-dark via-transparent to-transparent  opacity-100 md:bg-gradient-to-r from-dark md:via-dark to-transparent  md:opacity-100 z-10"></div>

                  {/* Image */}
                  <img
                    src={item.src}
                    alt={item.category}
                    className="md:h-full md:w-[50vw] relative md:-right-32 object-cover z-0"
                  />

                  {/* Text Content */}
                  <div className="p-4 absolute md:relative z-20 md:py-40">
                    <h1 className="text-4xl md:text-4xl font-semibold head  ">
                      {item.text}
                    </h1>
                    <p>{item.description}</p>
                    <Link to={`/products/category/${item.category}`}>
                      {" "}
                      <button class="group relative  my-4 inline-flex h-10 w-10 md:h-14 md:w-14 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 transition-all duration-300 hover:w-60">
                        <div class="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
                          Know More
                        </div>
                        <div class="absolute right-3.5">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-10 w-[18px] md:w-[30px]"
                          >
                            <path
                              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="h-[120vh] md:h-[250vh] flex items-center justify-center">
        {/* <h1>Scroll down to see the animation</h1> */}
      </section>
    </>
  );
};

export default PopularCategory;
