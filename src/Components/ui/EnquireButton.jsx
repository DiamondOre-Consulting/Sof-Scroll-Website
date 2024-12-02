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
import { RxQuestionMarkCircled } from "react-icons/rx";

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
          class="bg-dark py-2 px-2 rounded-full text-white flex justify-center items-center gap-1 "
        >
        <span className='text-xl '>Enquire</span> <RxQuestionMarkCircled className='text-white mt-1 text-xl' />
        </button>  : 
        
         <div className='w-screen z-50 flex items-center justify-center fixed top-0 bg-opacity-60 right-0  h-screen bg-black' >
            <div className='absolute top-0 left-10'>
            <FaXmark onClick={()=>{setEnquire(prev=>!prev)}}  className=" text-3xl md:text-6xl cursor-pointer text-white" />
            </div>

              <div className='md:mx-40 mx-10 z-50 rounded-tr-lg rounded-tl-lg  relative top-8 md:top-10 flex justify-center w-fit md:max-w-96   bg-white shadow h-full'>

              <div className="w-full sm:p-12 z-50 px-6  bg-white shadow-sm rounded-xl enquiryForm md:min-w-[37rem] mt-2 md:mt-10 lg:mt-0" data-aos="fade-up" data-aos-duration="600">
                    <h3 className="mb-4  text-dark underline text-center text-4xl mx-auto sora-600">Enquire!</h3>
                    
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-4 ">
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
                            <div className="w-full  px-2 mb-4 lg:w-[60%] lg:mb-0">
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
                            <div className="w-full px-2 lg:w-[40%] ">
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
                            
                            <select className=' h-[6rem]  w-full mb-3  border border-gray-200 focus:outline-none' 
                            name=""
                            multiple 
                            id=""
                            onChange={handleSelectedProductsChange}
                              >
                                {allProducts.map((product,index)=>{
                                    return (
                                    <option className='text-wrap ' key={index} value={product.name}><span className='text-2xl'>{index+1}</span>. {product.name}</option>
                                    )
                                })}
                            </select>


                            {formData?.products?.length===0?<div className='border  border-gray-200 p-2'>
                               Select products
                            </div>:<div className='border overflow-y-auto  h-28 enquiryForm gap-3 flex flex-wrap  border-gray-200 p-2'>
                                {formData?.products?.map((product,ind)=>{
                                    return (
                                       <div key={ind} className='border flex gap-2 justify-center items-center '> {product} <span onClick={()=>{handleSelectedProductCrossClick(ind)}}  className='text-black text-2xl '><HiMiniXMark className='cursor-pointer' />
                                   </span></div>
                                    )
                                })}
                            </div>}
                        </div>
                        <div className="mb-4 ">
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
                            className="relative  flex items-center w-full px-6 py-[0.6rem] overflow-hidden font-medium text-center transition-all rounded-md bg-[#2F8B69] group"
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
