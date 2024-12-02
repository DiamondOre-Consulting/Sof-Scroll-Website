import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa6";

const faqList = [
    {
        isActive: true,
        question: "What types of tissues do you offer?",
        answer:
            "We offer a variety of tissues including facial tissues, pocket tissues, toilet tissues, and paper towels designed for different needs and preferences.",
    },
    {
        isActive: false,
        question: "Are your tissues eco-friendly?",
        answer:
            "Yes, many of our tissues are made from sustainable and recycled materials. Check product descriptions for details on eco-friendly options.",
    },
    {
        isActive: false,
        question: "Do you offer bulk purchasing for businesses?",
        answer:
            "Absolutely! We provide bulk purchasing options for businesses, offices, and events at discounted rates. Please contact us for more details.",
    },
    {
        isActive: false,
        question: "What are the delivery charges?",
        answer:
            "Delivery charges vary based on your location and order size. Free shipping is available for orders above a certain amount. Check our shipping policy for more details.",
    },
    {
        isActive: false,
        question: "How can I track my order?",
        answer:
            "Once your order is shipped, we will send you a tracking number via email or SMS. You can use this number to track your order on our website.",
    },
    {
        isActive: false,
        question: "What payment methods do you accept?",
        answer:
            "We accept major credit cards, debit cards, digital wallets, and bank transfers for your convenience.",
    },
    {
        isActive: false,
        question: "Can I return or exchange my purchase?",
        answer:
            "Yes, we have a hassle-free return and exchange policy. Returns are accepted within 30 days of purchase, provided the product is unused and in its original packaging.",
    },
    {
        isActive: false,
        question: "Are your tissues suitable for sensitive skin?",
        answer:
            "Yes, we offer tissues made with hypoallergenic and fragrance-free materials that are gentle on sensitive skin.",
    },
    {
        isActive: false,
        question: "Do you offer subscription services for regular deliveries?",
        answer:
            "Yes, we offer subscription plans to ensure you never run out of tissues. Choose your frequency and preferred products, and we'll handle the rest.",
    },
    {
        isActive: false,
        question: "Do you provide custom packaging or branding for businesses?",
        answer:
            "Yes, we offer custom packaging and branding options for businesses. Please reach out to our support team for more details.",
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

                <div className="grid grid-cols-12 gap-0 md:gap-6">
                    <div className="col-span-12 md:col-span-6">
                        {faqList.slice(0, Math.floor(faqList.length / 2)).map((faq, i) => (
                            <FaqItem faq={faq} key={i} />
                        ))}
                    </div>
                    <div className="col-span-12 md:col-span-6">
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
