import { useState, useEffect, useContext } from "react";
import axios from "axios";



const useFetch=(url)=>{
    const [data,setData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true);
            try {
                await axios.get(url).then(res=>{
                    setData(res.data);
                }).catch(err=>{
                    setError(err);
                }).finally(()=>{
                    console.log("succesfully patched");
                })
            }catch(err){
                console.log(err);
            }
            setLoading(false);
            }
            fetchData();
        },[url])

    const reFetch = async()=>{
        setLoading(true);
        try {
            await axios.get(url).then((res)=>{
                setData(res.data);
            });
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }
    return {data,error,loading,reFetch}
}

export default useFetch;