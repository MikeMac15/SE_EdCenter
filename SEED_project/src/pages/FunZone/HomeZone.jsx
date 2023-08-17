import { useGLTF, Float, Text, OrbitControls, MeshReflectorMaterial, Html} from "@react-three/drei";
import './funZoneStyles/styleHomeZone.css'

export default function HomeZone () {
                        // display stand
    const {scene:compScene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/solar-panel/model.gltf')
    
return(
   <>
                        {/* environment */}
        <color args={ ['#241a1a'] } attach='background' />
        <OrbitControls  />
        <directionalLight position={[1,2,3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

                    {/* SEED Floating Text */}
        <Float speed={3} floatIntensity={3}>
            <Text position={[0,4.5,-2]} color='white'>Soaring Eagle Ed Center</Text>
        </Float>

                        {/* Display L */}
    <primitive object={ compScene.clone() } position={[-2,1.75,0]}>
        <Html transform
         wrapperClass="htmlScreen"
         distanceFactor={1.17} 
         position={[0,0.06,0.2]}
         rotation-x={-1.05}
         ><iframe src='http://localhost:5173/funzone/mathpage'/> </Html>
    </primitive>

                          {/* Display L */}
    <primitive object={ compScene.clone() } position={[2,1.75,0]}>
        <Html transform
         wrapperClass="htmlScreen"
         distanceFactor={1.17} 
         position={[0,0.06,0.2]}
         rotation-x={-1.05}
         >
            <iframe src='http://localhost:5173/funzone/mathPage/'/> 
        </Html>
    </primitive>
                            {/* Ground */}
        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 100 }>
            <planeGeometry />
            <MeshReflectorMaterial 
            resolution={512}
            blur={[1000,1000]}
            mixBlur={1}
            mirror={.1}
            color='tan'
            />
        </mesh>
    </>
)
}