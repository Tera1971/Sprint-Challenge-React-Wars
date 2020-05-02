import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cardcreator from "./CardCreator";



const CardInfo = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        axios
        .get("https://swapi.py4e.com/api/people/")
            .then(response => {
                console.log(response)
                setData(response.data.results)
            })
            .catch(err => {
                console.log(err)
            })

    },[])

    return (
        <div>
            {data.map(i => (
                <Cardcreator data = {i}/>
            ))}

        </div>
    );
}

export default CardInfo;