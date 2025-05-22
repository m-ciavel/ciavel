import { useState } from 'react';
import { FaEnvelope, FaGithubAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here (e.g., send email or save data)
  };

  return (
    <section className="w-full h-screen relative overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] sm:w-[125%] md:w-full max-w-none" style={{ filter: 'drop-shadow(0px 4px 10px rgba(255, 255, 255, 0.5))' }}>
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#4e73df', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#8e44ad', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#d0a4f1', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave-gradient)"
          fillOpacity="1"
          d="M0,128L48,141.3C96,154,192,176,288,171.3C384,166,480,144,576,123.3C672,102,768,80,864,75C960,70,1056,80,1152,117.3C1248,154,1344,218,1392,250.7L1440,283L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>

      <div className="w-full h-full flex flex-col justify-center items-center text-white relative z-10 p-8 mt-12">
        <h2 className="text-5xl mb-4 font-bold">Get in Touch</h2>

        <div id="icons" className="flex space-x-6 mt-4 mb-16">
          {[
            { icon: <FaEnvelope />, href: "mailto:m.cap1218@gmail.com" },
            { icon: <FaGithubAlt />, href: "https://github.com/m-ciavel" },
            { icon: <FaFacebookF />, href: "https://www.facebook.com/ciavel.montenegro" },
            { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/ciavel-montenegro-5a2165229/" },
          ].map(({ icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="text-2xl text-white p-3 rounded-full border-2 border-transparent hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-300 transition duration-300 ease-in-out"
            >
              {icon}
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="w-full sm:w-3/4 md:w-1/2 bg-opacity-80 bg-black rounded-lg p-6 space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-4 focus:ring-gradient-to-r focus:ring-amber-400 focus:ring-yellow-400 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-4 focus:ring-gradient-to-r focus:ring-amber-400 focus:ring-yellow-400 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-4 focus:ring-gradient-to-r focus:ring-amber-400 focus:ring-yellow-400 focus:outline-none"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
