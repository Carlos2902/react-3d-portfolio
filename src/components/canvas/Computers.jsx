import {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLIF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {

  const Computers =()=>{
    const computer = useGLIF('./desktop_pc/scene.glft')
  }
  return (
   <mesh>
    
   </mesh>
  )
}

export default Computers