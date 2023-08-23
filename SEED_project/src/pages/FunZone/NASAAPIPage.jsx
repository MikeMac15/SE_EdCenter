import React, {useState, useEffect} from "react";
import { Float, Environment, PresentationControls, Html, Stars, useGLTF} from "@react-three/drei";
// import NasaApi from "./NasaApi";

export const NASAAPIPage = () => {
    const [APOD,setAPOD] = useState(null);
    const [Dzoom, setDzoom] = useState(false)
    const [imgZoom, setImgZoom] = useState(false)
    const [dateIn, setDateIn] = useState('2023-08-02')
    const [prevDate, setPrevDate] = useState(null)
    

    async function getFetch(dateIn) {
        const url = 'https://api.nasa.gov/planetary/apod?api_key=';
        const key = 'AYHHmYlM0FOTQ9WzG7J7zSSFK6POd66I3RgrUewq';
        const dP = '&date='
        const send = `${url+key+dP+dateIn}`;
        
        try {
            const data = await fetch(send);
            const APODData = await data.json();
            console.log(APODData)
            setAPOD(APODData);
        } catch (err) {
            console.error("Error fetching data", err);
        }
}

    useEffect(()=> {
        getFetch(dateIn)
        console.log(dateIn)
    },[dateIn])


    // const handleDateChange = (e) => {
    //     setDateIn(e.target.value);
    //     getFetch(dateIn)
    // }



    



   const macbook = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    
    return (
        <>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                {/* environment */}
            <color args={ ['#000'] } attach='background' /> {/* ////takeout eventually */}
           
            {/* SEED Floating Text */}
                    {/* Ground */}
            <Environment preset="night" />
            
            <PresentationControls
            
            rotation={ [ 0.13, 0.2, 0 ] }
            >

                <Float rotationIntensity={Dzoom  ? 0 : 0.2}>

                    <primitive
                        object={ macbook.scene }
                        position-y={ - 1.2 }
                        rotation-x={ 0.13 }
                        >
                            {/* TITLE */}
                        <Html 
                            transform
                            wrapperClass="SpaceScreen"
                            distanceFactor={ 1.17 }
                            position={ [ 0, 2.7, - 1.7 ] }
                            rotation-x={ - 0.256 }
                        >
                            <div className="ApodTitle">
                                {APOD && 
                                <div>
                                {APOD.title}
                                </div>
                                }
                                <input type="date"  onChange={(e)=> setDateIn(e.target.value)}/>
                            </div>
                        </Html>
                            {/* IMAGE */}
                        <Html 
                            transform
                            wrapperClass="SpaceScreen"
                            distanceFactor={ imgZoom ? 2 : 1.17  }
                            position={ [  0, imgZoom ? 1.3 : 1.56, imgZoom ? 0 : - 1.4 ] }
                            rotation-x={ - 0.256 }
                            >
                            {APOD && (
                            
                        <div onClick={() => setImgZoom(!imgZoom)}>
                            <img src={APOD.hdurl} alt={APOD.title} />
                        </div>
                    
                            
                        )}
                        </Html>

                        <Html 
                            transform
                            wrapperClass="SpaceDescription"
                            distanceFactor={!Dzoom ? 1.17 : 2 }
                            position={ [ (!Dzoom ? 2.5 : 3), 1.56, (!Dzoom ? -1.4 : -0.5) ] }
                            rotation-x={- 0.256 }
                            rotation-y={!Dzoom ? 0 : -0.5}
                            
                        >
                            {APOD && (
                            <div onClick={() => setDzoom(!Dzoom)}>
                                <h3>Description</h3>
                                <p>{APOD.explanation}</p>
                                {APOD.copyright && 
                                (<h3>Credit: {APOD.copyright}</h3>)} 
                            </div>
                               
                            )}    
                                
                        </Html> 
                    </primitive>
                    
                </Float>

            </PresentationControls>
        </>
    )
}

export default NASAAPIPage;