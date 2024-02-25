import { useEffect } from "react";
import { useState } from "react";

const useCodersList = () => {
    const [codersList,setCodersList] = useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/search/users?q=a")
        .then(response=>response.json())
        .then(data=> setCodersList(data))
        .catch(error=>console.log(error));
    },[]);
    return codersList.items;
}

export default useCodersList;