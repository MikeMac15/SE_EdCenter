import React, {useState, useEffect, useContext} from "react";
import { userContext } from "../FunZone";
import { Float, Environment, PresentationControls, Html, Stars, useGLTF} from "@react-three/drei";
// import NasaApi from "./NasaApi";
import { api } from "../utils";

export const NASAAPIPage = () => {
    ////////////////////NASA API////////////////////////////
    const [APOD,setAPOD] = useState(null);
    const [Dzoom, setDzoom] = useState(false)
    const [imgZoom, setImgZoom] = useState(false)
    const [dateIn, setDateIn] = useState('2023-08-02')
    

    const [picTitle, setPicTitle] = useState();
    const [picDescription, setPicDescription] = useState();
    const [picUrl, setPicUrl] = useState();

    

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
            setPicTitle(APODData.title)
            setPicDescription(APODData.explanation)
            setPicUrl(APODData.hdurl)
        } catch (err) {
            console.error("Error fetching data", err);
        }
}

useEffect(()=> {
    getFetch(dateIn)
    console.log(dateIn)
},[dateIn])

console.log(picUrl)


// const handleDateChange = (e) => {
    //     setDateIn(e.target.value);
    //     getFetch(dateIn)
    // }
    const token = localStorage.getItem('token');
    //////////////////////////MY API////////////////////////
    const {user} = useContext(userContext);
    const [favoritePics, setFavoritePics] = useState();
    const [savedPic,setSavedPic] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const fetchFavorites = async() => {
        try{
            
            if(!token){
                console.error('no token found');
                return;
            }
            api.defaults.headers.common["Authorization"] = `Token ${token}`

            let response = await api.get('spacepage/favoritePics/')
            
            console.log('myapi',response.data)
            setFavoritePics(response.data)
        } catch (err) {
            console.error('Error fetching Favorites.', err)
        }
    }

    const accessFav = (index) => {
        // sets
        setPicTitle(favoritePics[index].title)
        setPicDescription(favoritePics[index].explanation)
        setPicUrl(favoritePics[index].hdurl)
    }

    const deleteFavPic = async (index) => {
        try {
            if (!token) {
                console.error('No token found');
                return;
            }
            api.defaults.headers.common["Authorization"] = `Token ${token}`;
    
            let response = await api.delete(`spacepage/favoritePics/${index}/`);
    
            if (response.status === 204) {
                console.log('Item deleted successfully.');
                setDeleted(true)
            } else {
                console.error('Failed to delete item.');
                console.error('Response status:', response.status);
                console.error('Response data:', response.data);
            }
        } catch (err) {
            console.error('Error deleting Favorites.', err);
        }
    };

    const saveFavPic = async () => {
       try{
        api.defaults.headers.common["Authorization"] = `Token ${token}`;
        let response = await api.post("spacepage/favoritePics/", {
            date: APOD.date,
            explanation: APOD.explanation,
            hdurl: APOD.hdurl,
            title: APOD.title
        })
        if (response.status === 201) {
            console.log('Item created successfully.');
            setSavedPic(true)
        } else {
            console.error('Failed to add item.');
            console.error('Response status:', response.status);
            console.error('Response data:', response.data);
        }
    } catch (err) {
        console.error('Error creating Favorites.', err);
    }
    }




    useEffect(()=> {
        fetchFavorites()
    },[savedPic,deleted])

    
// console.log('stu',favoritePics.date)

    /////////////////////////Model/////////////////////////
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
                            position={ [ 0, 2.9, - 1.7 ] }
                            rotation-x={ - 0.256 }
                        >
                            <div className="ApodTitle">
                                {APOD && 
                                <div>
                                {picTitle}
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
                            <img src={picUrl} alt={picTitle} />
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
                                <p>{picDescription}</p>
                                {APOD.copyright && 
                                (<h3>Credit: {APOD.copyright}</h3>)} 
                            </div>
                               
                            )}    
                                
                        </Html> 






                        <Html 
                            transform
                            wrapperClass="SpaceFavorites"
                            distanceFactor={ 1.17 }
                            position={ [  -2, 1.56, -0.5 ] }
                            rotation-x={- 0.256 }
                            rotation-y={0.2}
                            
                        >
                            {APOD && (
                            <div onClick={() => console.log('favClick')}>
                                <h3>Favorites</h3>
                                <button className="saveBtn" onClick={() => saveFavPic()}>{savedPic ? 'saved' : 'save'}</button>
                                
                                <ul>
                                    
                                            
                                                {favoritePics ?
                                                        favoritePics.map((pic, index)=>(
                                                            <li key={index}
                                                                onClick={()=> accessFav(index)}
                                    
                                                            >
                                                                {pic.date}
                                                                <button onClick={() => deleteFavPic(index)} hidden={deleted}>delete</button>
                                                            </li>
                                                        ))
                                                            :
                                                            <li>no pictures</li>
                                                            
                                                }
                                            
                                        
                                      

                                    

                                </ul>


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