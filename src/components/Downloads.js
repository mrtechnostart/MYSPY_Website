import React, { useEffect, useState } from "react";
import Download from "./Download";
import axios from "axios";
const Downloads = () => {
    const [data,setData] = useState([])
    async function getData(){
        setData((await axios.get("https://raw.githubusercontent.com/mrtechnostart/Myspy_Backend/main/data.json")).data)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
    <Download title="Madhusudhan Pathak" data ={data} />
    <Download title="MYSPY" data={data}/>
    <Download title="CaptainX" data={data}/>
    <Download title="Maneshwar" data={data}/>
    </>
  );
};

export default Downloads;
