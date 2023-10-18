




//                                  NEW Homezone













import { useGLTF, Float, Text, OrbitControls, MeshReflectorMaterial, Html} from "@react-three/drei";
import { useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";

// import './funZoneStyles/styleHomeZone.css'
import './funZoneStyles/mathPage.css'


export default function HomeZoneNew () {
    const macbook = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
                        // macbook
    const [hover, setHover] = useState(false);
    const [mathHover, setMathHover] = useState(false)
    const [mathpageClick, setMathpageClick] = useState(false)
    const navigate = useNavigate();

    useEffect(()=> {
        console.log(hover)
    },[hover])

return(
   <>
                        {/* environment */}
        <color args={ ['#87CEEB'] } attach='background' />
        <OrbitControls  />
        <directionalLight position={[1,2,3]} intensity={1.5} />
        <ambientLight intensity={0.5} />


        <primitive
                        object={ macbook.scene }
                        position-y={ hover ? 0.22 : 0.2195 }
                        position-x={ 0.35 }
                        position-z={ 0.7 }
                        // rotation-x={ 0.05 }
                        rotation-y={ hover ? -1.7 : -1.3 }
                        scale= {hover ? 0.045 : 0.04}
                        onPointerEnter={()=>setHover(true)}
                        onPointerLeave={()=>setHover(false)}
                        onClick={()=>navigate('/funzone/spacePage/')}
                        />

               {/* SEED Floating Text */}
        
            
            {   mathpageClick ? ////////

                                    
                            
                                <Html transform
                                wrapperClass="MathChalkBoard"
                                distanceFactor={0.7} 
                                position={[0.935,0.39,0.02]}
                                rotation-y={-Math.PI * 0.5}
                                >
                                    <iframe src='http://localhost:5173/mathPage'/>
                                </Html>
                            

                :
        
                <Text 
                position={[0.935,0.4,0.02]}
                rotation-y={- Math.PI * .5}
                scale={0.15}
                fontSize={0.3}
                maxWidth={3}
                textAlign="center"
                color={ mathHover ? 'gold' : 'white'}
                onPointerEnter={() => setMathHover(true)}
                onPointerLeave={()=> setMathHover(false)}
                onClick={()=>setMathpageClick(true)}
                >
                    Practice Your Math Skills Here!
                </Text>
        
             
            }

     

     
    </>
)
}