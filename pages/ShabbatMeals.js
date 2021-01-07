import React, { useEffect, useState } from 'react';
import text from '../assets/text.json';
import Layout from '../components/Layout';
const shabbatUrl = `https://www.hebcal.com/hebcal?v=1&cfg=json&year=now&month=${new Date().getMonth()+1}&ss=on&c=on&geo=city&city=CY-Nicosia&m=50&s=on`;


export default function ShabbatMeals({state:{lang}}) {
    const [shabbats, setShabbats] = useState([]);
    const [fields, setFields] = useState({
        shabbat:'', night:0, day:0, email:'', phone:'', name:'', donation:0
    });
    const [shabbatTime, setShabbatTime] = useState({parasha:'',start:'',end:''});

    useEffect(()=>{
        fetch(shabbatUrl, {method:'GET'}).then(res=> res.ok && res.json().then(d=> setShabbats(d.items)));
    }, []);
    
    const onChange = (e) => {
        e.target.id === 'shabbat' && displayShabbatTime(e.target.value);
        /(day|night|donation)/.test(e.target.id) && Number(e.target.value) < 0 && (e.target.value=0); 
        setFields({...fields, [e.target.id]: e.target.value})
    };
    const displayShabbatTime = (parasha) => {
        const obj = shabbats.map((o,i)=> o.title === parasha ? ({
            parasha: {en:o.title, he:o.hebrew},
            start: shabbats[i-1].title.match(/[0-9][0-9]:[0-9][0-9]/)[0],
            end: shabbats[i+1].title.match(/[0-9][0-9]:[0-9][0-9]/)[0]
        }):null).filter(v=>v)[0];
        setShabbatTime(obj);
    };
    const onsubmit = e => {
        e.preventDefault();
        const {shabbat, night, day, email, phone, name} = fields;
        if(shabbat && (Number(night)>0 || Number(day)>0) && email && phone && name){
            fetch('/api/shabbat', {method:'POST', body:JSON.stringify(fields)})
        } else {
            console.log('fill all fields')
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
                <div className={`form-group ${lang==='he'?'text-right':''}`}>
                    <label>{text[lang]['shabbat-form'][0]}</label>
                    <select id="shabbat" className="form-control danger" onChange={onChange}>
                    {
                        shabbats.map((v,i)=> v.category==='parashat' && <option key={i} value={v.title}>
                            {lang==='he'?v.hebrew:v.title} - {v.date}
                        </option>)
                    }
                    </select>
                </div>
                <div className="shabbat-time mx-auto my-4 row">
                    <div style={{width:70, height:70}} className="col-3 candles-img"></div>
                    <div className="col-9" style={{display:'grid',placeContent:'center'}}>
                    <span>
                    {
                        shabbatTime.parasha ? (<>
                            <h4>{shabbatTime.parasha[lang]}</h4>
                            <small>Candle Light</small><br/>
                            <p className="p-0 text-danger">{shabbatTime.start}</p>
                            <small>Shabbat\holiday end's</small><br/>
                            <p className="p-0 text-danger">{shabbatTime.end}</p>
                        </>): (<h4>Select a shabbat</h4>)
                    }
                    </span>
                </div>
                </div>
                {
                    Object.keys(fields).map((k,i)=> i>0 && <div className={`form-group ${lang==='he'?'text-right':''}`} key={i}>
                    <label htmlFor={k}>{text[lang]['shabbat-form'][i]}</label>
                    <input id={k} type={/email/.test(k)?'email':/(day|night|donation)/.test(k)?'number':'text'} className="form-control danger" value={fields[k]} onChange={onChange}/>
                    </div>)
                }
                <button className="btn btn-danger btn-block" onClick={onsubmit}>
                    {text[lang]['submit']} (&euro; {(Number(fields.night)+Number(fields.day))*30 + Number(fields.donation)})
                </button>
            </form>
        </div>
    </Layout>)
}