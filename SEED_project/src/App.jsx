// import { Canvas } from '@react-three/fiber'
import { Outlet } from 'react-router-dom'
// import * as THREE from 'three'
import Navbar from './pages/Navbar'
// import HomeScene from './threeHomeScene'
import './App.css'


function App() {
  
  // const created = ({scene}) => {
  //   scene.background = new THREE.Color('antiquewhite')
  //   console.log('created')
  // }

  return (
    <>
      <Navbar />
      
      {/* <Canvas onCreated={created} >
        <HomeScene />
      </Canvas> */}
  

      <Outlet />
    </>
    
  )
}

export default App;
