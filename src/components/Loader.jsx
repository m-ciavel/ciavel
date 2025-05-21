import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html center className="z-50">
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div> */}

      <div className="flex flex-col items-center justify-center backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-blue-800 text-sm font-semibold animate-pulse">Loading...</p>
      </div>
    </Html>
  )
}

export default Loader
