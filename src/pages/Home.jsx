import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Color } from 'three'; 
import Loader from '../components/Loader'
import Greenhouse from '../models/Greenhouse'
import Sky from '../models/Sky';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [greenhouseScale, setScale] = useState([2, 2, 2])
  const [greenhousePosition, setPosition] = useState([0, -6.5, -43])
  const [greenhouseRotation, setRotation] = useState([0.1, 4.7, 0])

  const adjustGreenhouseForScreenSize = () => {
    if (window.innerWidth < 768) {
      setScale([1.9, 1.9, 1.9])
    } else {
      setScale([2, 2, 2])
    }
  }

  useEffect(() => {
    adjustGreenhouseForScreenSize()

    const handleResize = () => adjustGreenhouseForScreenSize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])


  return (
    <section className="w-full h-screen relative overflow-hidden">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo  currentStage={currentStage} />}
      </div>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far:1000 }}
      >
        <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.2} />
            <hemisphereLight 
              skyColor={new Color(0x1e2a47)}   
              groundColor={new Color(0x2e3d56)}  
              intensity={0.2}                        
            />
            <directionalLight 
              position={[0, 10, 5]} 
              intensity={0.5}  
              castShadow 
            />

          <Sky isRotating={isRotating}/>
          <Greenhouse 
            position = {greenhousePosition}
            scale = {greenhouseScale}
            rotation = {greenhouseRotation}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>

       <div className="absolute bottom-5 left-0 right-0 z-20 text-center text-gray-500 text-xs">
          <p>
            "Stylized Mangrove Greenhouse" (https://skfb.ly/ovoBo) by Bársh is licensed under 
            <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              Creative Commons Attribution (CC BY 4.0)
            </a>
          </p>
        </div>

    </section>
  )
}

export default Home