import React, { useState, useEffect, useRef } from 'react';
import { FaMessage } from 'react-icons/fa6';
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";

const ChatBot = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [welcomeopen, setWelcomeOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loadingToastId, setLoadingToastId] = useState(null);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userDetails, setUserDetails] = useState({
        name: null,
        email: null,
        phone: null,
        address: null,
        tissue: null,
        quantity: null,
    });
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const chatboxBodyRef = useRef(null);

    const questions = [
        'What is your Name?',
        'What is your Email ID?',
        'What is your Phone Number?',
        'What is your Address?',
        'What type of tissues are you looking for?',
        'What is your preferred quantity of tissues?',
    ];


    const introMessage =
        `Hi! Welcome to SOF SSCRROL. We’re here to provide you with the highest quality tissues for all your needs. To get started, please share a bit more about what you're looking for.`;

    const endingMessage = 'Thank you for providing your information. We will contact you soon';

    const toggleChatbox = () => {
        setIsOpen(!isOpen);
        setCurrentQuestionIndex(0);
        setMessages([]);

        if (!isOpen) {
            setMessages([{ sender: 'chatbot', text: introMessage }]);
            setTimeout(() => {
                if (!isOpen) {
                    setMessages((prevMessages) => [...prevMessages, { sender: 'chatbot', text: questions[currentQuestionIndex] }]);
                }
            }, 1000);
        }
    };

    const closeChatbox = () => {
        setIsOpen(false);
        setCurrentQuestionIndex(0);
        setMessages([]);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (scrollEnabled && !welcomeopen) { // Check if scroll is enabled and welcome box is open
                const scrollPosition = window.scrollY;
                // Open the welcome box if the user scrolls down even a little bit
                if (scrollPosition > 50) {
                    setWelcomeOpen(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollEnabled, welcomeopen]);

    const closeWelcomeBox = () => {
        setWelcomeOpen(false);
        setScrollEnabled(false); // Disable scroll after closing welcome box
    };

    const sendMessage = async (userDetails) => {
        console.log(userDetails)

        const toastId = toast.loading('Submitting order...');
        setLoadingToastId(toastId);

        const chatData = {
            to_name: "Owner",
            from_name: userDetails.name,
            name: userDetails.name,
            email: userDetails.email,
            phone: userDetails.phone,
            address: userDetails.address,
            tissue: userDetails.tissue,
            quantity: userDetails.quantity
        }



        emailjs
            .send(
                "service_uwuijxf", // Your EmailJS service ID
                "template_je04x6n", // Your EmailJS template ID
                chatData,
                "iz6s-w2-bkXxSr9fL" // Your EmailJS user ID
            )
            .then((response) => {
                toast.update(toastId, {
                    render: 'Order placed successfully!',
                    type: 'success',
                    isLoading: false,
                    autoClose: 3000,
                });
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: 'chatbot', text: endingMessage },
                ]);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to place order!");
            });



    };

    const updateUserDetails = (key, value) => {
        setUserDetails(prevUserDetails => {
            const updatedDetails = {
                ...prevUserDetails,
                [key]: value
            };

            return updatedDetails;
        });
    };

    useEffect(() => {
        if (chatboxBodyRef.current) {
            chatboxBodyRef.current.scrollTop = chatboxBodyRef.current.scrollHeight;
        }
    }, [messages]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };


    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            const key = Object.keys(userDetails)[currentQuestionIndex];
            const updatedUserDetails = { ...userDetails, [key]: inputValue };

            setUserDetails(updatedUserDetails);
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: 'user', text: inputValue },
            ]);
            setInputValue('');

            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setMessages(prevMessages => [
                    ...prevMessages,
                    { sender: 'chatbot', text: questions[currentQuestionIndex + 1] },
                ]);
            } else {
                sendMessage(updatedUserDetails);
            }
        }
    };

    const isSendButtonDisabled = messages[messages.length - 1]?.text === endingMessage;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>

            <div className={`fixed bottom-12 rounded border border-gray-300 z-10 right-[4.5rem] w-48  shadow-lg p-3 ${welcomeopen ? 'block' : 'hidden'}`}>
                <div className='flex items-center justify-center'>

                    <button className="absolute flex text-[1.5rem] items-center justify-center top-0 right-0 text-sm text-gray-100 bg-red-400 rounded size-[1.45rem] hover:bg-red-500" onClick={closeWelcomeBox}>
                        X
                    </button>
                </div>
                <p className="pb-2 mt-2 text-xs font-bold">Hi I'm Robo Recruiter How may I Help You Today?</p>
            </div>

            <div className="">
                <div className="float-right cursor-pointer chat-icon" onClick={toggleChatbox}>
                    {!isOpen && <div className='flex items-center justify-center bg-black text-light size-[3.1rem] rounded-full text-[1.4rem]'>
                        <FaMessage />
                    </div>}
                </div>
                {isOpen && (
                    <div className="p-4 fixed border border-gray-300 z-[100000000] bottom-12 sm:bottom-8 right-4 bg-white rounded-lg shadow-lg chatbox shadow-gray-400 w-72">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-gray-200 chatbox-header">
                            <span className="text-lg font-bold text-dark">Welcome</span>
                            <button className="text-red-500 hover:text-red-700" onClick={closeChatbox}>
                                Close
                            </button>
                        </div>
                        <div
                            className="h-64 mb-4 overflow-y-auto chatbox-body scrollbar-none"
                            style={{ scrollbarWidth: 'none' }}
                            ref={chatboxBodyRef}
                        >
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`chat-message ${message.sender === 'user' ? 'text-right mb-2 text-xs' : 'text-left mb-2 text-xs'}`}
                                >
                                    {message.sender === 'chatbot' && questions.includes(message.text) ? (
                                        <span className="italic font-bold text-blue-950">{message.text}</span>
                                    ) : (
                                        <span className='font-semibold text-gray-700'>{message.text}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center chatbox-input">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                className="flex-grow w-1/2 px-2 py-[0.45rem] border rounded-l-lg border-dark focus:outline-none"
                                placeholder="Type your message..."
                            />
                            <button
                                onClick={handleSendMessage}
                                className={`bg-dark text-white px-2 py-2 rounded-r-lg ${isSendButtonDisabled ? 'opapreferredCity-50 cursor-not-allowed' : ''
                                    }`}
                                disabled={isSendButtonDisabled}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
                    <div className="w-full max-w-lg p-6 mx-4 transition-transform duration-500 transform bg-gray-200 rounded-md">
                        <svg onClick={closeModal} className="float-right w-6 h-6 mb-2 -mt-5 -mr-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {/* <img src={certificate} alt="Certificate" className="max-w-full max-h-full" /> */}

                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatBot;