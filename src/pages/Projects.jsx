import { Suspense, useEffect, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Color, Points, BufferGeometry, Float32BufferAttribute, PointsMaterial } from 'three'; 
import Loader from '../components/Loader'
import ProjectCard from '../components/ProjectCard';

import  ciavelImg from '../assets/2d/ciavel.png';
import clashCardsImg from '../assets/2d/ClashCards.png';
import redTalksImg from '../assets/2d/RedTalks.png';
import bookNookImg from '../assets/2d/BookNook.png';
import netWoinkGif from '../assets/2d/NetWoink.gif';

const Projects = () => {
  const [scrollY, setScrollY] = useState(0);

  const projects = [
    {
      title: 'ciavel.',
      description: 'Flashcard system to make studying engaging. You are here right now.',
      image: ciavelImg,
      tags:['React', 'Three.js', 'Vite', 'MongoDB', 'FastAPI', 'Vite', 'Chart.js'],
      link: 'https://github.com/ZAAALJLJ/ClashCards',
    },
    {
      title: 'ClashCards',
      description: 'Flashcard system to make studying engaging.',
      image: clashCardsImg,
      tags:['React', 'Python', 'JavaScript', 'MongoDB', 'FastAPI', 'Vite', 'Chart.js'],
      link: 'https://github.com/ZAAALJLJ/ClashCards',
    },
    {
      title: 'RedTalks',
      description: 'BSU student community platform.',
      image: redTalksImg,
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript', 'HTML/CSS'],
      link: 'https://github.com/DirkSteven/RedTalks',
    },
    {
      title: 'Book Nook',
      description: 'Mock bookstore UI for front-end practice.',
      image: bookNookImg,
      tags: ['HTML/CSS', 'JavaScript'],
      link: 'https://m-ciavel.github.io/hci/',
    },
    {
      title: 'NetWoink',
      description: 'Network management & monitoring tool.',
      image: netWoinkGif,
      tags: ['C#', '.NET', 'WPF'],
      link: 'https://github.com/DirkSteven/NetWoink',
    },
    {
      title: 'AquaFarm',
      description: 'Java-based aquaculture management game.',
      trailer: 'https://www.youtube.com/embed/bSObNTJUVVQ',
      tags: ['Java', 'SQL'],
      link: 'https://github.com/m-ciavel/AquaFarm',
    },
  ];

  const starGeometry = useMemo(() => {
    const geometry = new BufferGeometry();
    const count = 10000;
    const positions = [];
    const colors = [];

    for (let i = 0; i < count; i++) {
      positions.push(Math.random() * 1000 - 500); 
      positions.push(Math.random() * 2000 - 1000);
      positions.push(Math.random() * 1000 - 500); 
      colors.push(Math.random(), Math.random(), Math.random()); 
    }

    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
    return geometry;
  }, []);

  function Stars() {
    useFrame((state, delta) => {
      const positions = starGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(state.clock.elapsedTime + i * 0.01) * 0.1; 
        positions[i + 1] += Math.cos(state.clock.elapsedTime + i * 0.01) * 0.1; 
        positions[i + 2] += Math.sin(state.clock.elapsedTime + i * 0.01) * 0.1; 
      }
      starGeometry.attributes.position.needsUpdate = true; 
    });

    return (
      <points geometry={starGeometry} renderOrder={-1}>
        <pointsMaterial size={0.6} sizeAttenuation={true} vertexColors={true} />
      </points>
    );
  }


   useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);  
    };

    window.addEventListener('scroll', handleScroll);  
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  return (
    <section className="w-full h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas
        camera={{ near: 0.1, far: 1000 }}
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

             <Stars />
          </Suspense>
        </Canvas>
      </div>
      

       <div className="relative z-10 px-4 py-20 max-h-screen overflow-y-auto overflow-x-hidden">
        <h2 className="text-3xl font-bold text-center text-white mb-10">My Projects</h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default Projects