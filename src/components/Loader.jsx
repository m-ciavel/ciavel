import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <>
      <Html center className="z-50">
        <div className="flex flex-col items-center justify-center w-72 min-h-screen relative px-2">
          {/* Loader centered in the middle */}
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="relative w-12 h-12 mb-4">
              <div className="absolute inset-0 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-sm animate-pulse">Loading...</p>
          </div>

          <div className="text-center text-s text-white pb-20 whitespace-nowrap overflow-x-auto">
            — made with React, Vite, Tailwind CSS, and Three.js
          </div>
        </div>
      </Html>
    </>
  );
};

export default Loader;
