import React, { useEffect, useState } from 'react';
import text from '../assets/text.json';
import {Layout, Icons } from '../components';
import { connect } from 'react-redux';
import {addAlert} from '../redux/actions';

const Shabbat = {
    formatShabbatsList: (list) => {
        const now = new Date().valueOf();
        const weekInMs = 604800000;
        const showWeeks = 9;
        let res = [];
        for(let i=0; i<list.length;i++){
            let tmpTime = new Date(list[i].date).valueOf();
            if(tmpTime > now + (weekInMs * showWeeks)){
                break;
            } else if(now <= tmpTime && (list[i].date && new Date(list[i].date).getDay()===5)) {
                const obj = {
                    date: new Date(list[i].date).toDateString(),
                    start: `${new Date(list[i].date).getHours()}:${new Date(list[i].date).getMinutes()}`,
                    parasha: {
                        he: list[i+1].hebrew,
                        en: list[i+1].title
                    },
                    end: `${new Date(list[i+2].date).getHours()}:${new Date(list[i+2].date).getMinutes()}`
                }
                res.push(obj);
            }
        } 
        return res;
    },
    getUpcommingShabbat: (list) => {
        const msInWeek = -604800000;
        let res = list.filter((v)=>{
            const diffrence = new Date().valueOf() - new Date(v.date).valueOf();
            if(diffrence < 0 && diffrence >= msInWeek){
                return v;
            }
        });
    
        return res[0];
    },
    isShabbat: (list, index) => {
        if(list[index].date && new Date(list[index].date).getDay() === 5){//if friday

        }
    }
};

function ShabbatMeals({lang, addAlert, shabbats}) {
    const [shabbat, setShabbat] = useState(null)
    const [fields, setFields] = useState({
        shabbat:'', night:0, day:0, email:'', phone:'', name:'', donation:0
    });

    const onChange = (e) => {
        /(day|night|donation)/.test(e.target.id) && Number(e.target.value) < 0 && (e.target.value=0); 
        /(day|night)/.test(e.target.id) && (e.target.value = Number(e.target.value).toFixed(0));
        setFields({...fields, [e.target.id]: e.target.value});
    };
    const onsubmit = async e => {
        e.preventDefault();
        const {shabbat, night, day, email, phone, name} = fields;
        if(shabbat && (Number(night)>0 || Number(day)>0) && email && phone && name){
            let resp = await fetch('/api/shabbat', {method:'POST', body:JSON.stringify(fields)});
            addAlert(resp.ok ? {type:'success',msg:'Registration succeeded'} : {type:'secondary',msg:"Error while registering"});
        } else {
            addAlert({type:'warning',msg:'Please fill all fields'});
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
                    <Icons.ShabbatMeals style={{width:70,height:70,fill:"#dc3546"}} id="candle-img"/>
                    <div className="col-9" style={{display:'grid',placeContent:'center'}}>
                    {   JSON.stringify(shabbat)
                        // getUpcommingShabbat(shabbats) && (<>
                        // <h4>{getUpcommingShabbat(shabbats).parasha[lang]}</h4>
                        // <p className="p-0 text-danger">{getUpcommingShabbat(shabbats).start}</p>
                        // <p className="p-0 text-danger">{getUpcommingShabbat(shabbats).end}</p>
                        // </>)
                    }
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

export async function getStaticProps() {
    let res = {props: { shabbats:[], city:'' }};
    try {
        let resp = await fetch('https://www.hebcal.com/hebcal?v=1&cfg=json&year=now&ss=on&c=on&geo=city&city=CY-Nicosia&m=50&s=on')
        if(!resp.ok) throw new Error();
        let data = await resp.json();
        res.props.shabbats = Shabbat.formatShabbatsList(data.items);
        res.props.city = data.location.title;
    } catch (err) {
        
    }
    return res;
}

export default connect(s=>({lang:s.lang}), {addAlert})(ShabbatMeals);