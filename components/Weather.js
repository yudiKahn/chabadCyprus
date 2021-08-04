import React, { useEffect, useRef, useState } from 'react';

function Weather() {
    const [obj, setObj] = useState({});
    const initWeather = useRef(async()=>{});
    initWeather.current = async()=>{
        let data =  await GetWeatherObj();
        setObj(data);
    }

    useEffect(()=>{
        initWeather.current();
    },[]);
    return (
        <div>
            {JSON.stringify(obj)}
        </div>
    )
}

export default Weather;

async function GetWeatherObj(apiKey="fab14b78f1b8e2984277771c6a6dbc01"){
    let uri = `https://api.openweathermap.org/data/2.5/weather?q=ayia%20napa&appid=${apiKey}`;
    try {
        let resp = await fetch(uri);
        let data = await resp.json();
        if(resp.ok) return data;
    } catch {
        return {};
    }
}