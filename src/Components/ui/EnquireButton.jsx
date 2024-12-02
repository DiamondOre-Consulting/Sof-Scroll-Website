import { Divide } from 'lucide-react'
import React,{useState, useRef} from 'react'
import { FaXmark } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdSend } from "react-icons/io";
import AllProducts from '../../Components/Products/AllProducts'
import { HiMiniXMark } from "react-icons/hi2";

function EnquireButton() {
    const [enquire, setEnquire] = useState(true)
    const [loading, setLoading] = useState(false);
    const [loadingToastId, setLoadingToastId] = useState(null);

    const selectedProducts =[];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        products: [],
        description: '',
    });

    const handleSelectedProductCrossClick=(ind)=>{
        
        setFormData((prevFormDetails)=>{
            return {
                ...prevFormDetails,
                products:prevFormDetails.products.filter((_, i) => i !== ind) 
            }
        })

    }

    

    const allProducts= AllProducts
    // const toastId = useRef(null);
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEnquireButton = () => {
        setEnquire(prev=>!prev)        
    }
    
    const handleSelectedProductsChange=(e)=>{
       console.log(e.target.value)
         
       if(formData.products.find(product => product === e.target.value)){
        //    const toastId = toast.loading('Sending message...');
        //    setLoadingToastId(toastId);
           

        toast.error("This product is already added!", {
            autoClose: 2000, // Adjust the auto close time to 2 seconds
        });

       }
       else{

           setFormData({
              ...formData,
              products:[...formData.products,e.target.value]
           })
       }

    }

    // console.log(formData)
        


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.email || !formData.address) {
            return toast.error("All fields are required")
        }
        setLoading(true);
        const toastId = toast.loading('Sending message...');
        setLoadingToastId(toastId);

        const serviceID = 'service_uwuijxf';
        const templateID = 'template_je04x6n';
        const userID = 'iz6s-w2-bkXxSr9fL';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                toast.update(toastId, {
                    render: 'Email sent successfully!',
                    type: 'success',
                    isLoading: false,
                    autoClose: 3000,
                });
                setLoading(false);
                setFormData({ name: '', email: '', phone: '',products:'', description: '' });
            })
            .catch((error) => {
                toast.update(toastId, {
                    render: 'An error occurred while sending the email.',
                    type: 'error',
                    isLoading: false,
                    autoClose: 3000,
                });
                setLoading(false);
            });
    };

  return (
    
<>
{enquire ? 
    <button onClick={handleEnquireButton}
          class="relative  inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
          <span
            class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
          >
          </span>
          <span
            class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-dark px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
          >
            Enquire?
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
              ></path>
            </svg>
          </span>
        </button>  :  <div className='w-screen flex items-center justify-center fixed top-0 bg-opacity-60 right-0  h-screen bg-black'>
            <div className='absolute top-0 left-10 '>
            <FaXmark onClick={()=>{setEnquire(prev=>!prev)}}  className="text-6xl cursor-pointer text-white" />
            </div>

              <div className='mx-40 relative top-10 flex justify-center w-fit  bg-white h-full'>

              <div className="max-w-[34rem] sm:p-12 p-6 overflow-auto bg-white shadow-sm rounded-xl enquiryForm md:min-w-[37rem] mt-10 lg:mt-0" data-aos="fade-up" data-aos-duration="600">
                    <h3 className="mb-4 text-2xl text-dark sora-600">Enquire</h3>
                    {/* <p className="mb-6 sora-400 text-[#535760]">Feel free to contact with us, guaranteed response within 24 hours</p> */}
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-dark"
                                required
                            />
                        </div>
                        <div className="flex flex-wrap mb-4 -mx-2">
                            <div className="w-full px-2 mb-4 lg:w-[60%] lg:mb-0">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email address"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-dark"
                                    required
                                />
                            </div>
                            <div className="w-full px-2 lg:w-[40%]">
                                <input
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone number"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-dark"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            
                            <select className=' h-[5rem] w-full mb-3  border border-gray-200 focus:outline-none' 
                            name=""
                            multiple 
                            id=""
                            onChange={handleSelectedProductsChange}
                              >
                                {allProducts.map((product,index)=>{
                                    return (
                                    <option key={index} value={product.name}>{product.name}</option>
                                    )
                                })}
                            </select>


                            {formData?.products?.length===0?<div className='border text-gray-400 border-gray-200 p-2'>
                               Select products
                            </div>:<div className='border gap-3 flex flex-wrap text-gray-400 border-gray-200 p-2'>
                                {formData?.products?.map((product,ind)=>{
                                    return (
                                       <div key={ind} className='border flex gap-2 justify-center items-center '> {product} <span onClick={()=>{handleSelectedProductCrossClick(ind)}}  className='text-black text-2xl '><HiMiniXMark />
                                   </span></div>
                                    )
                                })}
                            </div>}
                        </div>
                        <div className="mb-4">
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Add Description"
                                className="w-full p-2 border rounded resize-none focus:outline-none focus:ring-1 focus:ring-dark"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            className="relative flex items-center w-full px-6 py-[0.6rem] overflow-hidden font-medium text-center transition-all rounded-md bg-[#2F8B69] group"
                        >
                            <span
                                className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rounded bg-dark group-hover:-mr-4 group-hover:-mt-4"
                            >
                                <span
                                    className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                className="absolute bottom-0 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rotate-180 rounded bg-dark group-hover:-ml-4 group-hover:-mb-4"
                            >
                                <span
                                    className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full rounded-md bg-dark group-hover:translate-x-0"
                            ></span>
                            <span
                                className="relative flex w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                            > {loading ? 'Sending...' : <span className='flex items-center justify-center w-full gap-2'>Send Message <IoMdSend /></span>}
                            </span>
                        </button>

                    </form>
                    <ToastContainer  />
                </div>
            </div>
        
               
            

              





        </div>}

        </>

      
    
  )
}

export default EnquireButton
