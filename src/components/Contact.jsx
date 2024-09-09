import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [glow, setGlow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGlow(true);
    emailjs
      .sendForm(
        "service_npl581k",
        "template_rj6kf9m",
        e.target,
        "cZv1ud06Mnm3blohQ"
      )
      .then(
        () => {
          setTimeout(() => setGlow(false), 1500);
          alert("Message sent successfully!");
        },
        () => {
          setGlow(false);
          alert("Failed to send message, please try again.");
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-5xl font-bold text-white" // Larger font for the header
      >
        GET IN TOUCH
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Section - Contact Information */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 w-full px-4 text-center md:text-left tracking-tighter text-white" // Text color
        >
          <motion.p className="my-4 text-lg">{CONTACT.address}</motion.p>{" "}
          {/* Larger font for address */}
          {/* Phone */}
          <motion.div className="my-4 flex items-center justify-center md:justify-start text-lg">
            <FaPhone className="mr-2" />
            <a href={`tel:${CONTACT.phoneNo}`} className="border-b">
              Call Us
            </a>
          </motion.div>
          {/* Email */}
          <motion.div className="my-4 flex items-center justify-center md:justify-start text-lg">
            <FaEnvelope className="mr-2" />
            <a href="#contact-form" className="border-b">
              Send Email
            </a>
          </motion.div>
          {/* WhatsApp */}
          <motion.div className="my-4 flex items-center justify-center md:justify-start text-lg">
            <FaWhatsapp className="mr-2" />
            <a
              href={`https://wa.me/6239419039?text=Hello, I would like to get in touch. I am ??`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          id="contact-form"
          className="md:w-1/2 w-full px-4 mt-10 md:mt-0"
        >
          <h2 className="text-center text-4xl mb-6 font-semibold text-white">
            Contact Me
          </h2>{" "}
          {/* Larger form title */}
          <form
            onSubmit={handleSubmit}
            className={`${
              glow ? "glow" : ""
            }space-y-4 bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg`}
          >
            {" "}
            {/* Gradient background, padding, and shadow */}
            <div>
              <label htmlFor="name" className="block mb-2 text-white text-lg">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 px-4 py-2 rounded-lg bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-white text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 px-4 py-2 rounded-lg bg-gray-700 text-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-white text-lg"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 px-4 py-2 rounded-lg bg-gray-700 text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
