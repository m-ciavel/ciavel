import { FaEnvelope, FaGithubAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import '../index.css';

const Contact = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] sm:w-[125%] md:w-full max-w-none animate-slide-top" style={{ filter: 'drop-shadow(0px 4px 10px rgba(255, 255, 255, 0.5))' }}>
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

      <div className="w-full h-full flex flex-col justify-center items-center text-white relative z-10 p-8 mt-8">
        <div className="group cursor-pointer inline-block">
          <h2 className="text-5xl font-bold mb-2 transition-all duration-500 ease-in-out group-hover:mb-8 group-hover:scale-105">
            Get in Touch
            <span
              className="block w-[80%] h-1 mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out delay-150 mx-auto rounded-2xl"
            ></span>
          </h2>
        </div>
        
        <p className="text-gray-300 text-center text-lg mb-6 font-semibold">
          Feel free to reach out via email or connect with me on social media.
        </p>

        <div id="icons" className="flex space-x-6 mt-8 mb-16">
          {[
            { icon: <FaEnvelope />, href: "mailto:m.cap1218@gmail.com" },
            { icon: <FaGithubAlt />, href: "https://github.com/m-ciavel" },
            { icon: <FaFacebookF />, href: "https://www.facebook.com/ciavel.montenegro" },
            { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/ciavel-montenegro-5a2165229/" },
          ].map(({ icon, href }, index) => (
            <a
              key={index}
              href={href}  
              target="_blank" 
              rel="noopener noreferrer"
              className="text-4xl text-white p-3 rounded-full border-2 border-transparent hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-300 transition duration-300 ease-in-out"
            >
              {icon}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
