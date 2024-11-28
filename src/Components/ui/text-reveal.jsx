"use client";;
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export const TextRevealByWord = ({
  text,
  className,
}) => {
  const targetRef = useRef(null);
  console.log(targetRef)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "end 0.5"],
  });
  const words = text.split(" ");

  return (
    (<div ref={targetRef} className={cn("relative z-0 min-h-fit", className)}>
      <div
        className={
          "sticky top-40 mx-auto flex h-[50%]  md:max-w-[90vw] items-center  bg-transparent "
        }>
        <p
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-2xl font-semibold text-black/30   md:px-8 md:text-3xl lg:px-6 lg:text-4xl xl:text-3xl"
          }>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              (<Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>)
            );
          })}
        </p>
      </div>
    </div>)
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    (<span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-80"}>{children}</span>
      <motion.span style={{ opacity }} className={"text-black "}>
        {children}
      </motion.span>
    </span>)
  );
};

export default TextRevealByWord;
