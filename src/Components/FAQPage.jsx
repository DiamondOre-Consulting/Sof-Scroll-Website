import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa6";

const faqList = [
    {
        isActive: false,
        question: "How can I place an order?",
        answer: "Placing an order is easy. Start by filling out our enquiry form with details such as the product, quantity, and any custom requirements like packaging or delivery preferences. Once submitted, our team will review it, confirm details, and guide you through steps like providing a quote and arranging payment. Whether it’s a bulk order or a single purchase, the process is seamless and hassle-free.",
    },
    {
        isActive: false,
        question: "What are the different types of tissue paper?",
        answer: "Tissue papers are versatile and include:\n\n- **Toilet Paper**: For personal hygiene.\n- **Wipes**: For cleaning surfaces and skin.\n- **Kitchen Towels**: Highly absorbent for spills.\n- **Facial Tissues**: Soft and gentle for skincare.\n- **Napkins**: Essential during meals.\n\nEach type is designed for specific uses to ensure hygiene and convenience in daily life.",
    },
    {
        isActive: false,
        question: "How do I choose tissue paper?",
        answer: "To choose the right tissue paper, consider your specific needs:\n\n- **Softness**: Ideal for sensitive skin or facial use.\n- **Absorbency**: For cleaning and spill management.\n- **Durability**: Multi-ply options for tough tasks.\n- **Eco-Friendly**: Recycled or biodegradable options for sustainability.\n\nOur product descriptions make it easy to select the right tissue for your requirements.",
    },
    {
        isActive: false,
        question: "What is the usefulness of tissue paper?",
        answer: "Tissue paper is essential for hygiene, cleaning, and convenience. Bathroom tissues ensure sanitation, wipes handle spills and quick cleaning, and napkins keep dining areas tidy. Tissues also help prevent the spread of germs and maintain a clean, comfortable environment at home and in public spaces.",
    },
    {
        isActive: false,
        question: "What are the key properties of tissue paper?",
        answer: "High-quality tissue papers have these properties:\n\n- **Softness**: For comfort, especially in facial and toilet tissues.\n- **Absorbency**: Essential for cleaning and drying tasks.\n- **Strength**: Durability for both wet and dry use.\n- **Thickness**: Multi-ply ensures better performance.\n- **Eco-Friendliness**: Options made from recycled or biodegradable materials.\n\nThese features make tissues effective and suitable for their intended use.",
    },
];




const FaqItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(faq.isActive);

    const toggleFaq = () => setIsOpen(!isOpen);

    return (
        <div
            className={`${isOpen && "active"
                } bg-white  rounded-lg mt-6`}
        >
            <a
                href="#!"
                className="flex items-center justify-between w-full p-4 py-3 cursor-pointer lg:py-3 btn lg:p-6 text-start"
                onClick={toggleFaq}
            >
                <span>{faq.question}</span>
                {isOpen ? <FaMinus /> : <FaPlus />}
            </a>
            <div className={`${isOpen ? "block" : "hidden"} p-4 lg:p-6 pt-0 lg:pt-0`}>
                <p className="opacity-80">{faq.answer}</p>
            </div>
        </div>
    );
};

FaqItem.propTypes = {
    faq: PropTypes.object.isRequired,
};

const FAQPage = () => {
    return (
        <section className="bg-transparent ezy__faq2 light py-14 md:py-24 text-zinc-900 ">
            <div className="container px-4 md:px-8 lg:px-28 mx-auto">
                <div className="grid justify-center grid-cols-12 md:mb-6">
                    <div className="col-span-12 text-center lg:col-span-8 lg:col-start-3 xl:px-12">
                        <h2 className="font-bold text-[25px] md:text-[45px] leading-none mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="">
                            It’s easier to reach your savings goals when you have the right
                            savings account. Take a look and find the right one for you!
                        </p>
                    </div>
                </div>

                <div className="grid ">
                    <div className="col-span-12 text-xl md:col-span-6 ">
                        {faqList.slice(0, Math.floor(faqList.length / 2)).map((faq, i) => (
                            <FaqItem faq={faq} key={i} />
                        ))}
                    </div>
                    <div className="col-span-12 text-xl md:col-span-6">
                        {faqList
                            .slice(Math.floor(faqList.length / 2), faqList.length)
                            .map((faq, i) => (
                                <FaqItem faq={faq} key={i} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQPage
