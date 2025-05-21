import { useEffect, useRef, useState } from 'react';

const ProjectCard = ({ title, description, image, trailer, tags, link, contentList }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-gradient-to-r from-blue-900 bg-blue-950 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-700 ease-out max-w-md w-full
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}
      `}
    >
      <div className="w-full h-48 overflow-hidden">
        {trailer ? (
          <iframe
            src={trailer}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </div>

      <div className="p-4">
        <h3 className="text-white text-xl font-semibold">{title}</h3>

        <p className="text-gray-300 text-sm mt-2">{description}</p>

        {contentList?.length > 0 && (
          <ul className="list-disc list-inside mt-3 text-sm text-gray-300 space-y-1">
            {contentList.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        )}

        <div className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-white hover:underline text-sm font-medium"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
