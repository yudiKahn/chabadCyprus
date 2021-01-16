import React, { useEffect, useState } from 'react';
import text from '../assets/text.json';
import Layout from '../components/Layout';
import { types } from './_app';
import {ShabbatMeals as Candles} from '../components/Icons';
const shabbatUrl = `https://www.hebcal.com/hebcal?v=1&cfg=json&year=now&ss=on&c=on&geo=city&city=CY-Nicosia&m=50&s=on`;


export default function ShabbatMeals({state:{lang}, dispatch}) {
    const [shabbats, setShabbats] = useState([]);
    const [fields, setFields] = useState({
        shabbat:'', night:0, day:0, email:'', phone:'', name:'', donation:0
    });

    useEffect(()=>{
        fetch(shabbatUrl, {method:'GET'}).then(res=> res.ok && res.json().then(d=> setShabbats(formatShabbatsList(d.items))));
    }, []);

    const onChange = (e) => {
        /(day|night|donation)/.test(e.target.id) && Number(e.target.value) < 0 && (e.target.value=0); 
        /(day|night)/.test(e.target.id) && (e.target.value = Number(e.target.value).toFixed(0));
        setFields({...fields, [e.target.id]: e.target.value});
    };
    const onsubmit = e => {
        e.preventDefault();
        const {shabbat, night, day, email, phone, name} = fields;
        if(shabbat && (Number(night)>0 || Number(day)>0) && email && phone && name){
            fetch('/api/shabbat', {method:'POST', body:JSON.stringify(fields)})
            .then(res=> res.ok ? 
                dispatch({type:types.SET_ALERTS,payload:[{type:'success',msg:'Registration succeeded'}]}) : 
                res.json().then(d=> dispatch({type:types.SET_ALERTS,payload:[{type:'secondary',msg:d.data}]})))
        } else {
            dispatch({type: types.SET_ALERTS, payload:[{type:'warning',msg:'Please fill all fields'}]});
        }
    }

    return (<Layout title="Shabbat">
        <div className="shabbat-head-img">
            <div className="w-100 h-100">
                <h1 className="text-white text-center w-100" style={{fontWeight:800}}>
                    {text[lang]["shabbat-title"]}
                </h1>
            </div>
        </div>
        <div className="container py-3">
            <form className="p-4 mx-auto shabbat-sel">
                <div className="shabbat-time mx-auto my-4 row">
                    <Candles style={{width:70,height:70,fill:"#dc3546"}} id="candle-img"/>
                    <div className="col-9" style={{display:'grid',placeContent:'center'}}>
                        <h4>{getUpcommingShabbat(shabbats).parasha[lang]}</h4>
                        <p className="p-0 text-danger">{getUpcommingShabbat(shabbats).start}</p>
                        <p className="p-0 text-danger">{getUpcommingShabbat(shabbats).end}</p>
                    </div>
                </div>
                <div className={`form-group ${lang==='he'?'text-right':''}`}>
                    <label>{text[lang]['shabbat-form'][0]}</label>
                    <select id="shabbat" className="form-control danger" onChange={onChange}>
                    {
                        shabbats.map((v,i)=> <option key={i} value={v.parasha["en"]}>
                            {v.parasha[lang]} - {v.date}
                        </option>)
                    }
                    </select>
                </div>
                {
                    Object.keys(fields).map((k,i)=> i>0 && <div className={`form-group ${lang==='he'?'text-right':''}`} key={i}>
                    <label htmlFor={k}>
                        {text[lang]['shabbat-form'][i].split('~')[0]}
                        <small> {text[lang]['shabbat-form'][i].split('~')[1]}</small>
                    </label>
                    <input id={k} type={/email/.test(k)?'email':/(day|night|donation)/.test(k)?'number':'text'} className="form-control danger" value={fields[k]} onChange={onChange}/>
                    </div>)
                }
                <button className="btn btn-danger btn-block" onClick={onsubmit}>
                    {text[lang]['submit']}&nbsp;&nbsp;
                    <small>&euro; {(Number(fields.night)+Number(fields.day))*18 + Number(fields.donation)}</small>
                </button>
            </form>
        </div>
    </Layout>)
}

function formatShabbatsList(list){
    const now = new Date().valueOf();
    const weekInMs = 604800000;
    const showWeeks = 9;
    let res = [];
    for(let i=0; i<list.length; i+=3){
        let tmpTime = new Date(list[i].date).valueOf();
        if(tmpTime > now + (weekInMs * 9)){
            break;
        } else if(now <= tmpTime) {
            const obj = {
                date: new Date(list[i].date).toDateString(),
                start: list[i].title,
                parasha: {
                    he: list[i+1].hebrew,
                    en: list[i+1].title
                },
                end: list[i+2].title
            }
            res.push(obj);
        }
    }
    
    return res;
};

function getUpcommingShabbat(list){
    const msInWeek = -604800000;
    let res = list.filter((v)=>{
        const diffrence = new Date().valueOf() - new Date(v.date).valueOf();
        if(diffrence < 0 && diffrence >= msInWeek){
            return v;
        }
    });

    return res[0];
}