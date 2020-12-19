import React,{useEffect, useState} from 'react';

const Tempapp = () => {
    const [city, setCity]= useState(null);
    const [search, setSearch]=useState("Sangli");
    useEffect(()=>{
        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7e773a3b719cf12cc8a79d5e7e6916c8`

            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search])
    return (
        <>
           <div className="box">
               <div className="input">
                   <input
                   type="search"
                   value={search}
                   className="inputF"
                    onChange={(event)=>{setSearch(event.target.value)}}
                    
                   />
               </div>
            {!city ? (
                <p>no data found</p>):
                <div>
                <div className="info">
               <h2 className="location"><i className="fas fa-map-marker-alt"></i>{search}</h2>
               <h1 className="temp">{city.temp}&deg;C</h1>
               <h3 className="temp_min_max">Min : {city.temp_min}&deg;C | Max : {city.temp_max}&deg;C</h3>
           </div>
           </div>
            }
           {/* <div className="info">
               <h2 className="location"><i className="fas fa-street-view"></i>{search}</h2>
               <h1 className="temp">{city.main.temp}</h1>
               <h3 className="tempin_max">arshad | arshad</h3>
           </div> */}
           {/* <div className="wave-one"></div>
           <div className="wave-two"></div>
           <div className="wave-three"></div> */}
           </div>
        </>
    )
}

export default Tempapp;
