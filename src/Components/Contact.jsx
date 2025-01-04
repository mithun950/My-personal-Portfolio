import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9ufdorn", // service ID
        "template_584zsj5", // template ID
        e.target, // form
        "JwDMzoBTUxWEmgUbM" // user ID
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!");
        },
        (error) => {
          toast.error("Error Sending Message: " + error.text);
        }
      );
  };

  const contact_info = [
    {
      logo: <FaEnvelope />,
      text: "mithunrony46@gmail.com",
      link: "mailto:mithunrony46@gmail.com",
    },
    {
      logo: <FaWhatsapp />,
      text: "01943252411",
      link: "https://wa.me/123456780",
    },
    {
      logo: <FaMapMarkerAlt />,
      text: "Location",
      link: "https://www.google.com/maps/place/DOHS+Baridhara,+Dhaka/@23.8124559,90.4080167,16z/data=!4m6!3m5!1s0x3755c6556f8d0183:0xaad698adc3e0f420!8m2!3d23.8125614!4d90.4131072!16s%2Fg%2F11dxf0jbm9?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex flex-col md:flex-row gap-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto">
          <form onSubmit={sendEmail} className="flex flex-col gap-5 md:w-2/3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
          </form>

          <div className="md:w-1/3 flex flex-col gap-6">
            {contact_info.map((contact, i) => (
              <div key={i} className="flex flex-row md:flex-col text-left gap-4 flex-wrap items-center">
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  {contact.logo}
                </div>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:text-base text-sm break-words"
                >
                  {contact.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
