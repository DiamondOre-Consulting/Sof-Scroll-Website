import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa6";

const faqList = [
    {
        isActive: false,
        question: "How can I place an order?",
        answer:
            "Placing an order is a straightforward process designed to provide you with a seamless experience. Begin by navigating to the enquiry form on our website. In the form, you’ll be required to fill in key details such as the specific product you’re interested in, the quantity required, and any custom requirements you might have, like packaging preferences or delivery instructions. Once submitted, our dedicated customer service team will promptly review your enquiry and reach out to confirm the details. They will also guide you through the next steps, which may include providing a quotation, discussing timelines, and arranging payment options. Whether you’re placing a bulk order or a single request, we ensure the process is hassle-free and tailored to your needs.",
    },
    {
        isActive: false,
        question: "What are the different types of tissue paper?",
        answer:
            "Tissue paper is a versatile product available in various forms, each designed for specific uses. Common types include: \n\n- **Toilet Paper**: Essential for maintaining personal hygiene in bathrooms, often designed to be soft yet durable. \n- **Wipes**: Pre-moistened or dry sheets ideal for quick cleaning tasks, including skincare and surface cleaning. \n- **Kitchen Towels**: Highly absorbent sheets used for wiping spills and cleaning surfaces in the kitchen. \n- **Handkerchiefs**: Compact and portable tissues, perfect for personal use when on the go. \n- **Facial Tissue**: Soft and gentle tissues for skincare, often used for wiping the face or removing makeup. \n- **Household Towels**: Multipurpose cleaning towels that are durable and suitable for various household tasks. \n- **Napkins**: Designed for use during meals to maintain cleanliness and enhance dining etiquette. \n\nEach type of tissue paper is crafted with unique properties to suit its purpose, ensuring convenience and hygiene for users.",
    },
    {
        isActive: false,
        question: "How do I choose tissue paper?",
        answer:
            "Selecting the right tissue paper can be simplified by considering your specific needs and preferences. Our product categories include detailed descriptions, making it easier for you to identify the best option. For example:\n\n- **Softness**: If you have sensitive skin, opt for facial tissues labeled as hypoallergenic or ultra-soft.\n- **Absorbency**: For cleaning spills, kitchen towels with high absorbency are the ideal choice.\n- **Durability**: For tasks requiring strength, such as wiping tough stains, choose thicker or multi-ply tissue papers.\n- **Eco-Friendly Options**: If sustainability is a priority, look for recycled or biodegradable tissues.\n\nEach product is accompanied by a comprehensive description outlining its features, materials used, and intended use, allowing you to make an informed decision. Feel free to contact our support team for personalized recommendations.",
    },
    {
        isActive: false,
        question: "What is the usefulness of tissue paper?",
        answer:
            "Tissue paper serves as an indispensable tool in everyday life, offering a range of benefits that promote hygiene, convenience, and comfort. Its primary uses include:\n\n- **Hygiene**: Bathroom tissues ensure cleanliness and personal sanitation, while facial tissues provide a gentle option for managing colds or allergies.\n- **Cleaning**: Paper towels and wipes are excellent for cleaning spills, wiping surfaces, and maintaining a tidy environment.\n- **Dining**: Napkins enhance the dining experience by keeping hands and mouths clean during meals.\n- **Health and Safety**: Tissue products help prevent the spread of germs, bacteria, and viruses by encouraging proper hygiene practices.\n\nBeyond their practical applications, tissue products are designed to be disposable, ensuring that they contribute to cleanliness and reduce the risk of cross-contamination in both personal and shared spaces.",
    },
    {
        isActive: false,
        question: "What are the key properties of tissue paper?",
        answer:
            "The quality and effectiveness of tissue paper are determined by several critical properties, including:\n\n- **Softness**: This ensures comfort, particularly for products like facial tissues and toilet paper, where gentleness on the skin is important.\n- **Absorbency**: Highly absorbent tissues are ideal for quickly soaking up liquids, making them suitable for kitchen towels and wipes.\n- **Strength**: Durability ensures that the tissue does not tear easily, even when wet, which is crucial for cleaning tasks.\n- **Thickness**: Multi-ply tissues offer better performance and absorbency compared to single-ply options.\n- **Brightness and Appearance**: Bright white or decorative tissues enhance visual appeal, especially for napkins used in dining.\n- **Eco-Friendliness**: Recycled or biodegradable options cater to environmentally conscious users.\n\nThese properties vary across different types of tissues, making each suitable for specific applications while ensuring a balance between functionality and comfort.",
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
