'use client'
import { Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import { Text, Stage } from '@react-three/drei'
import { useState } from 'react'
import { Group } from 'three';
import { OrbitControls } from '@react-three/drei'
import { useFBX } from '@react-three/drei'

function FBXModel () {
  const fbx = useFBX("https://wzoufxhlnywsvostunnp.supabase.co/storage/v1/object/public/FBX%20file/Remy1.fbx") as Group;
  return( <primitive object={fbx} scale ={0.02} position ={[0, -4, 0]}/>)
}

  
function headklick() { const [text, setText] = useState('Click the button!') };
function rightarmklick() { console.log("right");};
function leftarmklick() { console.log("left");};
function bodyklick() { console.log("body");};
function rightlegklick() { console.log("rightleg");};
function leftlegklick() { console.log("leftleg");};


export default function App() {
  return (
    <div>
    <div style={{ 
      width: '80vw', 
      height: '100vh', 
      position: 'fixed', 
      top: 0, 
      left: 0,
      color: 'white', 
    }} >
      

      <Canvas style={{ width: '100%', height: '100%' }}> <color attach="background" args={['#436cbf']} />
        
      

      <mesh position={[0, 3, 0]} onClick={headklick} visible={false}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
       <mesh position={[2.3, 2, 0]} onClick={rightarmklick} visible={false}>
        <boxGeometry args={[3, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
       <mesh position={[-2.3, 2, 0]} onClick={leftarmklick} visible={false}>
        <boxGeometry args={[3, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh position={[0, 0.9, 0]} onClick={bodyklick} visible={false}>
        <boxGeometry args={[1.6, 3, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh position={[0.4, -2, 0]} onClick={rightlegklick} visible={false}>
        <boxGeometry args={[1, 3, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh position={[-0.4, -2, 0]} onClick={leftlegklick} visible={false}>
        <boxGeometry args={[1, 3, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
         
        <ambientLight intensity={0.4} />
       
        <directionalLight color="white" position={[1, 1, 0]} />

        <FBXModel/>
          
          
          <planeGeometry args={[50, 50]} />
       <OrbitControls enablePan={false} enableZoom={true} minPolarAngle={Math.PI / 2.7} maxPolarAngle={Math.PI / 2.7} />
       
      

        
      </Canvas>
    </div>
    <div className='bg-slate-700 flex place-self-end rounded-lg  ' style={{ 
      width: '30vw', 
      height: '90vh', 
      position: 'fixed', 
      top: 30, 
      right: 100
    }}>  </div>
  

    </div>
  )
}