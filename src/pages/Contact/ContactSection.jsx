


import { Mail, MapIcon, MapPin, Phone } from "lucide-react";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const whatsappNumber = "919342508635"; // ← apna WhatsApp number daal do (with country code)
    const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <section
      className="text-white py-32 px-4 md:px-0 bg-cover"
      style={{ backgroundImage: "url('bg.jpg')" }}
    >
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Left: Contact Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-cover bg-center bg-no-repeat relative">
          <div className="absolute inset-0 bg-black/30 rounded-3xl" />
          <div className="relative z-10 space-y-6 text-center text-[#bebab3]">
            <h2 className="text-3xl uppercase tracking-wide font-['Dancing_Script'] text-[#cda45e] font-extrabold">
              Get in Touch with Us
            </h2>
            <p className="text-lg text-[#e0d3c2] font-['Abril_Fatface']">
              Whether you’ve got questions, feedback, or want to discuss an event,
              we’re here to listen and help.
            </p>

            {/* Contact Form */}
            <form
              className="space-y-4 mt-8 font-['Abril_Fatface'] text-xl"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-transparent border-b border-white w-full p-2 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-white w-full p-2 focus:outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="bg-transparent border-b border-white w-full p-2 focus:outline-none"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="bg-transparent border-b border-white w-full p-2 focus:outline-none"
                required
              ></textarea>
              <div className=" flex justify-center">
              <button
                type="submit"
                className="bg-[#d9b47b] hover:bg-[#c4a66f] text-black px-6 py-3 uppercase tracking-wider font-semibold rounded-full mt-4 flex items-center gap-2"
              >
                <BsWhatsapp className="text-green-600"/>
                Send Message
              </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right: Visual Info Cards */}
        <div className="w-full md:w-1/2 p-10">
          <div className="space-y-8">
            <div className="grid gap-6">
              {/* Email Card */}
              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Mail className="text-black"/>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Email Us</h3>
                    <p className="text-slate-400">contact@example.com</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Phone className="text-black " />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Call Us</h3>
                    <p className="text-slate-400">+919845774497, 9342508635</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                    {/* <MapIcon className="text-black"/> */}
                    <MapPin className="text-black"/>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Visit Us</h3>
                    <p className="text-slate-400">123 Business Ave, City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

