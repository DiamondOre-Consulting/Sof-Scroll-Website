import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AboutusPage = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
  
    useEffect(() => {
      // GSAP animation to zoom out the image when scrolling to the section
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2 },
        {
          scale: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
  
      // GSAP animation to fade in the text
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }, []);
  
    return (
      <section
        className="flex flex-col lg:flex-row justify-between items-center absolute bg-cover "
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/roll-toilet-paper-green-leaves-260nw-2236474479.jpg')",
        }}
      >
        <div
          ref={textRef}
          className="lg:w-1/3 h-full w-full px-10 py-6 text-gray-700 bg-light text-left lg:text-justify relative left-[50vw]"
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cumque
            labore praesentium non vero id sapiente, molestiae totam voluptas aut
            eius? Et ea neque sed quo pariatur nulla, placeat laudantium laborum
            deleniti perspiciatis voluptas vero, aut voluptate atque quidem
            quaerat!
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            nihil, voluptates illum eligendi fugit animi consequuntur distinctio,
            ipsum ipsa facilis nobis doloremque mollitia omnis hic. Debitis
            possimus tempore modi odit?
          </p>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            eaque nesciunt cupiditate deserunt nobis cum quibusdam illum beatae
            quae nihil, quas odio autem dolorem voluptate, similique magni aliquid
            tempora maiores?
          </p>
  
          <a
            href="#"
            class="group relative inline-block overflow-hidden rounded-full border border-gray-100 bg-gray-200 px-12 py-3 text-sm font-medium text-slate-800 hover:text-dark focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
          >
            <span class="ease absolute inset-0 rounded-full h-full w-full border-2 border-transparent group-hover:border-dark transition-all duration-300"></span>
  
            <span class="relative">Read More</span>
          </a>
        </div>
      </section>
  )
}

export default AboutusPage
