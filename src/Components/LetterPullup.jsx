import React from "react";
import { motion } from "framer-motion";

const LetterPullup = ({ words, delay = 0.05, className }) => {
    const letters = words.split(""); // Split the words into individual letters

    return (
        <div
            className={`${className} flex flex-wrap text-wrap justify-center break-words mx-auto max-w-xs sm:max-w-md`}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                        delay: index * delay, // Stagger effect
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                    className="inline-block overflow-hidden"
                >
                    {letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
                </motion.span>
            ))}
        </div>
    );
};

export default LetterPullup;
