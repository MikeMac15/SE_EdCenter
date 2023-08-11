import { Float, Text, OrbitControls, MeshReflectorMaterial} from "@react-three/drei";



export default function HomeScene () {

return(
    <>
        <OrbitControls />

        <directionalLight position={[1,2,3]} intensity={1.5} />
        <ambientLight intensity={0.5} />


        <mesh>
            <sphereGeometry />
            <meshBasicMaterial color='red' />
        </mesh>

        <mesh position={[2,0,-1]}>
            <boxGeometry />
            <meshBasicMaterial color='white' />
        </mesh>

        <Float speed={3} floatIntensity={3}>
            <Text position={[0,2.5,-2]} color='white'>Soaring Eagle Ed Center</Text>
        </Float>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 100 }>
            <planeGeometry />
            {/* <meshStandardMaterial color="greenyellow" /> */}
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