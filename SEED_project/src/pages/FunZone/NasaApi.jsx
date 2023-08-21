import React, {useState} from "react";
import './funZoneStyles/NasaAPOD.css'

const NasaApi = () => {
    const [APOD,setAPOD] = useState(null);

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
    
    const handleDateChange = (e) => {
        const dateIn = e.target.value;
        getFetch(dateIn)
        
    }



    
    return (
        <>
            <h1>NasaApi</h1>
            <div className="spacescr"> 
                
                {APOD && (
                    <>
                    <h2>{APOD.title}</h2>
                    <img src={APOD.hdurl} alt={APOD.title} />
                    <p>{APOD.explanation}</p>
                    {APOD.copyright && 
                    <h2>{APOD.copyright}</h2>}
                    </>
                )}
                <input type="date" onChange={handleDateChange}  />
            </div>
        </>
    )
}

export default NasaApi;