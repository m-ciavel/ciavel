import { useGLTF } from '@react-three/drei'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import skyScene from '../assets/3d/sky.glb'

const Sky = ({ isRotating }) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame(() => {
    if (skyRef.current) {
      const speed = 0.0003;
      skyRef.current.rotation.y += speed;
    }
  });
    
  return (
    <mesh ref = {skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky