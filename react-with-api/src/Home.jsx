import React,{useEffect, useState} from 'react';
import Colors from'./Colors';
import axios from 'axios';

const Home=()=>{

    const [Data,setData]=useState({
        Company:'',
        Description:''
    })
    const [colorsData,setColorsData]=useState([])

    useEffect(()=>{
        axios.get('https://reqres.in/api/unknown', {headers: {'x-api-key': 'reqres_617aeb79c0dc41f3ad5453e75dbce7fa'}})
            .then(res=>{
                
                let companyName = "Katelyns Book store";
                let compnayDesc = "Have any books you want";

                setData({Company:companyName,Description:compnayDesc})
                setColorsData(res.data.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }, [])

    return(
        <>
            <h1>{Data.Company}</h1>
            <p>{Data.Description}</p>
            <Colors data={colorsData}/>
        </>
    )

    return(
        <>
        <h1>{Data.Company}</h1>
        <p>{Data.Description}</p>
        <Colors data={colorsData}/>
        </>
    )

}

export default Home;