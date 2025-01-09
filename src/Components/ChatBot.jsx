import React, { useState, useEffect, useRef, useCallback } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import IconButton from "@mui/material/IconButton";
import { Send as SendIcon } from "@mui/icons-material";
// import aboutus from "../assets/aboutus.png";
import Fuse from "fuse.js";
import logo from '../assets/logo.png'

const ChatBot = ({ toggleChat }) => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [currentFAQSection, setCurrentFAQSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [options, setOptions] = useState([
    "About Us",
    "E-Services",
    "List of Architectural Institutions",
    "Forms Download",
    "Generate Fee Dues",
    "Publications",
    "Help Desk",
    "FAQ's",
  ]);
  const handleChange = (e) => {
    console.log("Search Query:", e.target.value); // Debugging line
    setSearchQuery(e.target.value);
  };

  const homeIcon = (
    <svg
      className="w-7 h-7 mr-2 cursor-pointer"
      style={{ color: "#ffa800" }}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const handleHomeClick = () => {
    const initialMessages = [
      { text: "Hi!", type: "received" },
      {
        text: "Hii Welcome to SOF SSCRROL. We're here to provide you with the highest quality tissue for all your needs. To get started, please share a bit more about what you're looking for",
        type: "received",
      },
      {
        text: "How are you ? How may we can help you?",
        type: "received",
      },
    ];

    const initialOptions = [
      "About Us",
      "E-Services",
      "List of Architectural Institutions",
      "Forms Download",
      "Generate Fee Dues",
      "Publications",
      "Help Desk",
      "FAQ's",
    ];

    // Set the welcome messages
    setMessages([
      ...initialMessages,
      { text: initialOptions, type: "options" },
    ]);

    // Set the options for future interaction
    setOptions(initialOptions);
  };

  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    // Show initial message and options after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      setMessages([
        { text: "Hi!", type: "received" },
        {
            text: "Hii Welcome to SOF SSCRROL. We're here to provide you with the highest quality tissue for all your needs. To get started, please share a bit more about what you're looking for",
            type: "received",
          },
          {
            text: "How are you ? How may we can help you?",
            type: "received",
          },
        // { text: options, type: "options" },
      ]);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (option) => {
    setHistory((prevHistory) => [...prevHistory, { messages, options }]);

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: `${option}`, type: "sent" },
    ]);

    setLoading(true);

    // Simulate processing the request
    setTimeout(() => {
      setLoading(false);
      let newMessage = "";
      let newOptions = [];
      switch (option) {
        case "How can I place order?":
          newMessage = (
            <>
              <div className="flex flex-col rounded-lg">
                <div className="mb-2">{/* <img src={aboutus} alt="" /> */}</div>
                <div>
                  <p className="text-sm">
                  Sir/ Madam, you may need fill in the enquiry form

                  </p>
                </div>
              </div>
            </>
          );
     
          break;
      
        case "What are the different types of tissue paper?":
          const serviceMessages = [
            "Tissue paper comes in a variety of forms, including toilet paper, wipes, kitchen towels, handkerchiefs, facial tissue, house hold towels, and napkins",

          ];

          setMessages((prevMessages) => [
            ...prevMessages,
            { text: serviceMessages[0], type: "received" },
            // { text: serviceMessages[1], type: "received" },
          ]);
      
       
          return;
     
        case "When and where will the conference take place?":
          newMessage =
            " Under product category, Product description are mentioned accordingly you may make your choice";
        
          break;

        case " What is the usefulness of Tissue Paper? ":
       
          newMessage = (
            <>
              <p>
              Bathroom tissue, paper towels, facial tissue, paper handkerchiefs and table napkins all play a critical role in hygiene, cleanliness and comfort. Tissue paper products function marvelously to promote hygiene by helping to prevent the spread of germs, bacteria, viruses and disease.
              </p>
            </>
          );
        //   newOptions = ["Go back to main menu", "Exit"];
          break;


          case "hii":
       
          newMessage = (
            <>
              <p>
             Hii, How are you ? How may we can help you?
              </p>
            </>
          );
        //   newOptions = ["Go back to main menu", "Exit"];
          break;

        case "What are the key properties of tissue paper?":
         
          newMessage = (
            <>
              <p>
              The key properties of tissue paper are soft , strength, absorbency, basis weight, thickness, 
            brightness,  stretch, appearance, and comfort.
              </p>
            </>
          );
        //   newOptions = ["Go back to main menu", "Exit"];
          break;


          case "How do I choose tissue paper?":
         
          newMessage = (
            <>
              <p>
              Under product category, Product description are mentioned accordingly you may make your choice
              </p>
            </>
          );
        //   newOptions = ["Go back to main menu", "Exit"];
          break;



          case "What is the usefulness of Tissue Paper? ":
         
          newMessage = (
            <>
              <p>
              Bathroom tissue, paper towels, facial tissue, paper handkerchiefs and table napkins all play a critical role in hygiene, cleanliness and comfort. Tissue paper products function marvelously to promote hygiene by helping to prevent the spread of germs, bacteria, viruses and disease.
              </p>
            </>
          );
        //   newOptions = ["Go back to main menu", "Exit"];
          break;

       

      
       
     
   

        // case 'Go back to previous menu':
        //     if (history.length > 0) {
        //         const previousState = history.pop();
        //         setMessages(previousState.messages);
        //         setOptions(previousState.options);
        //         setHistory([...history]); // Update history
        //     } else {
        //         setMessages(prevMessages => [
        //             ...prevMessages,
        //             { text: "No previous menu available.", type: "received" }
        //         ]);
        //     }
        //     return;

        default:
          newMessage = "Please select an option.";
          newOptions = [
            "About Us",
            "E-Services",
            "List of Architectural Institutions",
            "Forms Download",
            "Generate Fee Dues",
            "Publications",
            "Help Desk",
            "FAQ's",
          ];
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: newMessage, type: "received" },
        { text: newOptions, type: "options" },
      ]);
      setOptions(newOptions);
    }, 2000);
  };

  const handleGoBack = () => {
    if (history.length > 0) {
      const previousState = history.pop();

      // Append previous messages instead of replacing them
      setMessages((prevMessages) => [
        ...prevMessages,
        ...previousState.messages,
      ]);

      // Restore options
      setOptions(previousState.options);

      // Update history state
      setHistory([...history]);
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "No previous menu available.", type: "received" },
      ]);
    }
  };

  const renderFAQList = (faqMessages) => (
    <div className="w-full py-2">
      <input
        type="text"
        placeholder="Search"
        // value={searchQuery}
        // onChange={handleChange}
        className="w-full px-2 py-2 rounded-lg border border-amber-500"
      />
      <div className="flex flex-col mt-1">
        {faqMessages
          .filter((m) => m.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((m) => (
            <p
              className="py-2 hover:bg-amber-500 cursor-pointer hover:rounded-lg px-2 hover:text-white"
              key={m}
              onClick={() => handleOptionClick(m)}
            >
              {m}
            </p>
          ))}
      </div>
    </div>
  );

  const studentFAQMessages = [
    "What is the eligibility criteria for admission to 1st year of 5-year B.Arch. degree course?",
    "Is qualifying an Aptitude test in Architecture mandatory for admission to B.Arch. degree course?",
    "Which Aptitude test is valid for admission to B.Arch. degree course?",
    "How can a student apply for enrolment number at COA portal?",
    "How can a student find enrolment number at COA portal?",
    "How can a student correct the details of enrollment submitted by my institution?",
    "How can a student seek NOC from the Council for Transfer/ Migration to other Institutions?",
    "Is the Enrollment number issued by the Council changed after taking a Transfer/ Migration to another Institution?",
    "How can a student file a complaint/ grievance against an Institution?",
  ];

  const facultyFAQMessages = [
    "How can I know I am eligible for a teaching post in Architecture?",
    "What is the procedure for appointment/promotion of faculty of Architecture at an institution?",
    "Has the Council prescribed a Career Advancement Scheme for promotion of faculty of Architecture?",
    "How can a faculty confirm his/her appointment in the application filled by an Institution?",
    "How can a faculty remove his/her name from the application submitted by the previous employer institution where he/she had been working?",
    "How can a faculty apply for an Equivalence Certificate for a Postgraduate Degree to M.Arch. degree awarded by Indian Universities?",
    "How can a faculty apply for recognition of his/her Post Graduate Degree awarded by Foreign Authority under the Architects Act, 1972?",
    "How the experience of a faculty is to be counted for determining eligibility for teaching post?",
    "Is the duration of a Regular/ Executive PG course counted in the period of experience of a Faculty?",
    "What should a faculty do if his/her name is misused by any institution as a faculty?",
    "How can a faculty file a complaint/ grievance against his/her Institution regarding its failure in maintaining Minimum Standards of Architectural Education?",
  ];

  const institutionFAQMessages = [
    "Which Norms of the Council are to be followed by institutions for imparting B.Arch. and M.Arch. degree courses in the country?",
    "How does an existing institution apply for extension of approval for imparting B.Arch./M.Arch. degree course, introduction of PG course or additional intake?",
    "How can an institution apply for enrolment numbers of students admitted by it during an academic session?",
    "How does a Trust/Society/University apply for introduction of B.Arch. course at its proposed new institution?",
    "How does an institution apply for change in name/site?",
  ];

  const registrationmessages = [
    "How to Apply for registration as an architect?",
    "How to find enrolment number?",
    "Forget your password?",
    "Whether Application for registration can be sumbitted on the basis of provision certificate",
    "In case of change of name, what documents are to be sent to Council?",
    "At which address hardcopy of the Application Form/ documents should be sent?",
    "Whether the hard copy of Application is received at CoA’s Office?",
    "How much time does it take to grant Registration?",
    "What is the status of my application?",
    "How many days will it take to receive the Original Certificate of Registration?",
    "Within how many days a hard copy of the application should be submitted to Council?",
  ];

  const accountmessages = [
    "Procedure for reimbursement of TA Expenses for COA Meetings/Inspections.",
    "Eligibility (eligible Class) for journey performed for COA Meetings/Inspections by Air, Train and Road for experts/members of COA.",
    "Charges per Kilometer, if journey performed by own Car",
    "Purpose for which one can claim Local Conveyance",
    "How can I get accommodation, if required, for overnight stay for COA Meetings/Inspections",
    "What is amount of sitting fee/ honorarium for meeting/Inspection.",
    "Mode of reimbursement of TA Expenses and sitting fee/ Honorarium to members/experts of COA.",
    "Procedure to claim bills in respect of services provided to office of COA",
  ];

  const renewalmessages = [
    "How can I renew my registration?",
    "How can I renew my registration through online mode?",
    "How can I update my new email id?",
    "How can I renew my registration through offline mode?",
    "Is there any provision for waiver of renewal/restoration fee/ fine?",
    "How can I get refund for my double/ extra payment.",
    "How can I submit my Bachelor of Architecture Degree?",
    "I have paid one-time payment and endorsement is due. How can I get endorsement on my certificate?",
    "I have lost my certificate of registration. What should I do?",
    "How can I apply for Duplicate certificate of registration through offline/online?",
    "How can I apply for change of Name?",
    "I am residing out of India. How can I renew my registration?",
    "How can I apply for Digital certificate of registration?",
    "How can I get my name removed in COA records as an Architect, if I do not wish to use certificate of registration due to some reasons.",
    "Applicability of Registration as an Architect and How to apply for NCARB.",
    "When will I get my renewed certificate?",
    "In case my certificate is undelivered or returned back to COA?",
    "How can I add my Additional Qualification on Certificate of Registration?",
  ];

  const fusyoptions = [
    // "How are you ? How may we can help you?",
    "How can I place order?",
    "What are the different types of tissue paper?",
    "How do I choose tissue paper?",
    "What is the usefulness of Tissue Paper? ",
    "What are the key properties of tissue paper?",
    "hii"
   
  ];

  const [history, setHistory] = useState([]);
  const fuseRef = useRef(null);

  useEffect(() => {
    // Initialize Fuse.js with options whenever options change
    fuseRef.current = new Fuse(fusyoptions, {
      includeScore: true,
      threshold: 0.3, // 70% fuzzy match (lower value = stricter match)
    });
  }, [fusyoptions]);

  const handleSearch = (query) => {
    const fuse = fuseRef.current; // Access the current Fuse instance
    if (fuse) {
      const results = fuse.search(query);
      if (results.length > 0) {
        const bestMatch = results[0].item;
        handleOptionClick(bestMatch);
        setSearchQuery("");
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "I'm sorry, I'm not able to find the information you're looking for at this moment.",
            type: "received",
          },
        ]);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch(searchQuery);
    }
  };

  const handleSendClick = () => {
    handleSearch(searchQuery);
  };

  return (
    <div>
      <div className="fixed bottom-4 right-10 w-2/3 md:w-1/4 bg-gray-200 rounded-lg  shadow-lg z-50">
        <div className="bg-white py-2 px-3 rounded-t-lg flex justify-between items-center">
          <img src={logo} alt="" className="w-20 md:w-10" />
          <div className="flex">
            <button
              onClick={toggleChat}
              className="ml-4 text-c1 font-bold hover:text-dark"
            >
              ✕
            </button>
          </div>
        </div>
        <div
          ref={chatContainerRef}
          className="p-2 overflow-y-auto h-[300px] custom-scrollbar"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex  justify-${
                message.type === "received" || message.type === "options"
                  ? "start"
                  : "end"
              }`}
            >
              <div
                className={` rounded-t-md rounded-br-md  px-2 py-1 max-w-[85%] `}
              >
                {message.type === "options" ? (
                  <div className="flex text-start flex-wrap  gap-2 ">
                    {message.text.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className={`hover:bg-c1 border border-1 border-c1 text-black text-start py-2 px-2 rounded-lg hover:text-gray-100  text-sm ${
                          message.type === "received"
                            ? "text-gray-900"
                            : "  bg-orange"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p
                    className={`text-sm  px-4 py-2 rounded-t-lg max-h-96 overflow-y-auto custom-scrollbar rounded-br-lg  ${
                      message.type === "received"
                        ? "text-gray-900 bg-white"
                        : "bg-dark text-gray-100 py-2 px-2 justify-end"
                    }`}
                  >
                    {message.text}
                  </p>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start items-center h-3 mb-2 mt-2">
              <span className="bg-white py-1 px-2 rounded-t-md rounded-br-md">
                <BeatLoader color={"#2bb673"} loading={loading} size={10} />
              </span>
            </div>
          )}
        </div>
        <div className="p-3 bg-white flex items-center">
          {/* <button onClick={handleHomeClick}>
                    {homeIcon}
                </button> */}
          <input
            type="text"
            placeholder="Enter your message!"
            className="w-full border border-gray-300 rounded py-2 px-3"
            value={searchQuery}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <IconButton
            onClick={handleSendClick}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            <SendIcon style={{ color: "#2bb673" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
