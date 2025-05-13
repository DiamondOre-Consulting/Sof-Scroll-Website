import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BreadCrumbs from '../Components/BreadCrumbs';
import { FaLocationDot } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdSend } from "react-icons/io";
import ContactSection from '@/Components/ContactSection';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact Us' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [loadingToastId, setLoadingToastId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        setFormData({ name: '', email: '', phone: '', message: '' });
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>

        <Helmet>
        <title>Contact Us | SOF SSCRROL – Tissue & Makhana Solutions</title>
        <meta
          name="description"
          content="Get in touch with SOF SSCRROL for premium tissue paper and nutritious Makhana (Nuts Magic) product inquiries. We're here to assist with bulk orders, partnerships, and customer support."
        />
      </Helmet>
      
      <BreadCrumbs headText={"Contact Us"} items={breadcrumbItems} />
      <ContactSection contact={true} />

    </div>
  )
}

export default ContactPage