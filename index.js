function updateMap(){
    url = "https://corona.lmao.ninja/v2/countries?yesterday=&sort="
    const apifetch = async()=>{
        try{
            const resp  = await fetch(url);
            const data = await resp.json();
            data.map((country)=>{
                console.log(country);
                 lat = country.countryInfo.lat;
                    long = country.countryInfo.long;
                    deaths = country.deaths;

                    if(deaths<500){
                        color = "rgb(128, 128, 128)"
                    }
                    else if(deaths<1000){
                        color = "rgb(255, 87, 51 )"
                    }
                    else if(deaths<3000){
                        color = "rbg(255, 87, 51)"

                    }
                    else if (deaths <5000){
                        color = "rgb(199, 0, 57)"
                    }

                    else if(deaths<7000){
                        color = "rgb(144, 12, 63 )"
                    }
                    else {
                        color = "rgb(88, 24, 69 )"
                    }
                    var marker = new mapboxgl.Marker({
                    draggable: false,
                    color:color

                })
                
        
                .setLngLat([long, lat])
                .addTo(map);
                
                
                
            })

        }
        catch(error){
            console.log(error);
        }
    }
    apifetch()


}


updateMap();
