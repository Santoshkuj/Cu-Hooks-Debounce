import { useEffect, useState } from "react"

export default function useUserDetails(url){
    const[details,setDetails] = useState({
        userDetails : [],
        isLoading : true
    })
    try {
        async function d(){
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);
            setDetails({
                userDetails : data.items,
                isLoading : false 
            })
        }
        useEffect(()=>{
            d()
        },[])
    } catch (error) {
        console.log(error);
    }
    return [details];
}