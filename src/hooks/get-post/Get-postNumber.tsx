import { useEffect, useState } from "react";


interface UseGetPostNumberContract {
    deliveryType: string | undefined,
    cityRef: string | undefined
}

export function useGetPostNumber(props: UseGetPostNumberContract){
    const { deliveryType, cityRef} = props
    const [ warehouses, setWarehouses ] = useState<[]>([])
    const MY_API_KEY = process.env.REACT_APP_MY_API_KEY
    
    useEffect(() => {
        async function getWarehouses() {
            
            console.log("deliveryType:", deliveryType, "cityRef:", cityRef)
            const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({
                apiKey: MY_API_KEY,
                modelName: "Address",
                calledMethod: "getWarehouses",
                methodProperties: {
                    CityRef: cityRef
                }
                })
            });

            const data = await response.json();
            console.log("Available addresses:", data); // ✅ always works
            
            setWarehouses(data.data);
            // while (true){
            //     try{
            //         data[0]
            //         return;
            //     } catch{
            //         continue;
            //     }
            // }

            // setWarehouses(data.data)
            // let allWarehouses = data.data;


            // filter type
            // if (deliveryType === "locker") {
            //     setWarehouses(allWarehouses.filter(w => w.CategoryOfWarehouse === "Postomat"))
            // }

            // if (deliveryType === "office") {
            //     setWarehouses(allWarehouses.filter(w => w.CategoryOfWarehouse !== "Postomat"))
            // }

            // console.log("Available addresses:", warehouses);

        }
        if (!deliveryType || !cityRef) return
        getWarehouses()
    }, [deliveryType, cityRef])
    
    return warehouses;
}