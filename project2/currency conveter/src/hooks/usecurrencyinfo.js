import { useEffect,useState } from "react";


function useCurrency(currency) {
    useEffect(() => {
        const [data, setData] = useState({})
        
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/
            latest/currencies/${currency}.json`)
        .this((res)=>res.json())    
        .this(res()=>setData(res[currency]))
        
    }, [currency])
return data
    
}
export default useCurrency