import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

  setErrors({
    ...errors,
    [e.target.name]: "",
  });
};
const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  }

  if (!formData.subject.trim()) {
    newErrors.subject = "Subject is required";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setErrors({});

  console.log(formData);

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
};
  return (
    
     
    
    <main className="bg-[#0b0b0b] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute left-0 top-0 w-80 h-80 bg-yellow-500/20 blur-[180px] rounded-full"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-yellow-500/10 blur-[180px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-28 relative">

          <div className="text-center">

            <p className="uppercase tracking-[8px] text-yellow-500 font-semibold">
              Contact Us
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold mt-5">
              Get In Touch
            </h1>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
              Have questions about our collection? We'd love to hear from you.
              Our team is ready to help you find the perfect luxury watch.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT INFO */}

      <section className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#151515] border border-[#222] rounded-3xl p-8 hover:border-yellow-500 duration-300 text-center">

            <FaLocationDot className="text-yellow-500 text-4xl mx-auto"/>

            <h3 className="text-2xl font-semibold mt-6">
              Address
            </h3>

            <p className="text-gray-400 mt-3">
              Baku, Azerbaijan
            </p>

          </div>

          <div className="bg-[#151515] border border-[#222] rounded-3xl p-8 hover:border-yellow-500 duration-300 text-center">

            <FaPhone className="text-yellow-500 text-4xl mx-auto"/>

            <h3 className="text-2xl font-semibold mt-6">
              Phone
            </h3>

            <p className="text-gray-400 mt-3">
              +994 50 123 45 67
            </p>

          </div>

          <div className="bg-[#151515] border border-[#222] rounded-3xl p-8 hover:border-yellow-500 duration-300 text-center">

            <FaEnvelope className="text-yellow-500 text-4xl mx-auto"/>

            <h3 className="text-2xl font-semibold mt-6">
              Email
            </h3>

            <p className="text-gray-400 mt-3">
              info@luxurywatch.com
            </p>

          </div>

        </div>

      </section>

      {/* FORM */}

      <section className="max-w-5xl mx-auto px-6 py-24">

        <div className="bg-[#151515] border border-[#222] rounded-[40px] p-10 lg:p-14">

          <h2 className="text-4xl font-bold text-center mb-10">
            Send Us A Message
          </h2>
          

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

       <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className={`w-full rounded-xl p-4 outline-none duration-300 bg-[#0f0f0f]
    ${
      errors.name
        ? "border border-red-500"
        : "border border-[#222] focus:border-yellow-500"
    }`}
/>

{errors.name && (
  <p className="mt-1 text-sm text-red-500">
    {errors.name}
  </p>
)}
   <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Your Email"
  className={`w-full rounded-xl p-4 outline-none duration-300 bg-[#0f0f0f]
    ${
      errors.email
        ? "border border-red-500"
        : "border border-[#222] focus:border-yellow-500"
    }`}
/>

{errors.email && (
  <p className="mt-1 text-sm text-red-500">
    {errors.email}
  </p>
)}

            </div>

  <input
  type="text"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  placeholder="Subject"
  className={`w-full rounded-xl p-4 outline-none duration-300 bg-[#0f0f0f]
    ${
      errors.subject
        ? "border border-red-500"
        : "border border-[#222] focus:border-yellow-500"
    }`}
/>

{errors.subject && (
  <p className="mt-1 text-sm text-red-500">
    {errors.subject}
  </p>
)}

  <textarea
  rows="6"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Write your message..."
  className={`w-full rounded-xl p-4 outline-none resize-none duration-300 bg-[#0f0f0f]
    ${
      errors.message
        ? "border border-red-500"
        : "border border-[#222] focus:border-yellow-500"
    }`}
/>

{errors.message && (
  <p className="mt-1 text-sm text-red-500">
    {errors.message}
  </p>
)}

            <button
  type="submit"
  className="w-full bg-yellow-500 text-black py-4 rounded-xl font-semibold hover:bg-yellow-400 duration-300 hover:scale-[1.02]"
>
  Send Message
</button>

          </form>

        </div>

      </section>

    </main>
  );
}