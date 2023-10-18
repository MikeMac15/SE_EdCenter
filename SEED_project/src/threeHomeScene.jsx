import { Float, Text, OrbitControls, MeshReflectorMaterial} from "@react-three/drei";
import { Model } from "./pages/FunZone/model";


export default function HomeScene () {

return(
    <>
    
        <color args={['#faebd7']} attach='background' />

        <OrbitControls enableZoom={false} />

        <directionalLight position={[1,2,3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        {/* <Model scale={0.5} /> */}
        {/* <mesh>
            <sphereGeometry />
            <meshBasicMaterial color='red' />
        </mesh> */}

       

        <Float speed={3} floatIntensity={3}>
            <Text position={[0,1,-2]} fontSize={0.3}
                maxWidth={5.5}
                textAlign="center" color='brown'>Helping Children Soar To New Heights!
At Soaring Eagle Educational Center, your student's success is what drives us. Browse through our site to see how we can help your student achieve their academic goals.</Text>
        </Float>

        
    </>
)


}