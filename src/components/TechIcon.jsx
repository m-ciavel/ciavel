const TechIcon = ({ src, alt, label }) => (
  <div className="relative w-26 h-26 group flex items-center justify-center">
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-80 transition-all duration-300 z-0"></div>
    <div className="flex flex-col items-center z-10">
      <img src={src} alt={alt} className="w-16 transition-transform duration-300 group-hover:scale-85" />
      <span className="text-sm text-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{label}</span>
    </div>
  </div>
);

export default TechIcon;
