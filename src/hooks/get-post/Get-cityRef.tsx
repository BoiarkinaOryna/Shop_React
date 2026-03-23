import { useEffect, useState } from "react";


export function useGetCityRef(cityName: string | undefined){
    const [ cityRef, setCityRef ] = useState<string>("")
    const cityList = ["Вінниця", "Одеса", "Харків", "Дніпро", "Київ", "Львів"] 

    useEffect(() =>{
        
        console.log("cityName", cityName)
        async function getCityRef() {
            const MY_API_KEY = process.env.REACT_APP_MY_API_KEY
        
            const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    apiKey: MY_API_KEY,
                    modelName: "Address",
                    calledMethod: "searchSettlements",
                    methodProperties: {
                        CityName: cityName,
                        Limit: 1
                    }
                })
            });
        
            const data = await response.json();
            // console.log(data)
            setCityRef(data.data[0].Addresses[0].Ref)
        
            console.log("CityRef:", cityRef);
        }
        if (!cityName) return
        for (let city of cityList){
            // console.log("cityName", cityName)
            // console.log("city", city)
            if (city === cityName) {
                getCityRef()
            }
        }
        

    }, [cityName])
    return cityRef

}
