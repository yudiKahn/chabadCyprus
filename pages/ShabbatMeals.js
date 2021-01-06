import React, { useEffect, useRef, useState } from 'react';
// import candlesImg from '../assets/candles.svg';
import text from '../assets/text.json';
import Layout from '../components/Layout';

export default function ShabbatMeals({lang}) {
    const [shabbats, setShabbats] = useState([]);
    const [selShabbat, setSelShabbat] = useState({ parasha:'',start:'', end:'',date:''});
    const [form, setForm] = useState(1);
    const [form2input, setForm2] = useState({
        friday:0, saturday:0, name:'', email:'',phone:'',donation:0
    });
    const {friday, saturday, name, email, phone, donation} = form2input;
    const form2change = (e, num) => {
        const keys = ['friday','saturday','name','email','phone','donation'];
        return setForm2({...form2input, [keys[num-1]]: e.target.value});   
    }

    const url = useRef('');
    url.current = `https://www.hebcal.com/hebcal?v=1&cfg=json&year=now&month=${new Date().getMonth()+1}&ss=on&c=on&geo=city&city=CY-Nicosia&m=50&s=on`;
    const initSelShabbat = useRef(()=>{});
    initSelShabbat.current = () => {
        if(shabbats[0]){
            setSelShabbat({
                parasha:shabbats[0].Parasha.title,
                start:shabbats[0].Candle.title,
                end:shabbats[0].Havdalah.title,
                date:shabbats[0].Candle.date});
        }
    }

    useEffect(()=>{
        fetch(url.current, {method: 'GET'}).then(res=> res.ok && res.json().then(data=>{
            setShabbats(three(data.items));
            initSelShabbat.current();
        }));
    }, []);

    const selChange = e => {
        const val = e.target.value.split('~');
        setSelShabbat({parasha:val[0], start:val[1], end:val[2],date:val[3]});
    }

    const saveInvitation = () => {
        if((friday !== 0 || saturday !== 0) && (email && phone && name)){
            // axios.post('/api/shabbatMeals/register', {...form2input, parasha:selShabbat.parasha, date:selShabbat.date })
            //     .then(res=>console.log(res));
        }
    }

    const [alerts, setAlerts] = useState([]);
    const onSubmit = e => {
        e.preventDefault();
        let newAlerts = [];
        if(friday === 0 && saturday === 0){
            newAlerts.push('Please select friday night or saturday.');
        }
        if(!email || !phone || !name){
            newAlerts.push('Please fill all your details.');
        }
        setAlerts([...alerts, ...newAlerts]);

        saveInvitation();

        setForm2({
            friday:0, saturday:0, donation:0,
            email:"",name:"",phone:""
        });
        setTimeout(()=>setAlerts([]), 3000);
    }

    return (<Layout>
        <div style={{minHeight:'100vh'}}>
        <div className="shabbat-head-img">
            <div className="w-100 h-100">
                <h1 className="text-white text-center w-100" style={{fontWeight:800}}>
                    {text[lang]["shabbat-title"]}
                </h1>
            </div>
        </div>
        <div className="shabbat-sel mx-auto">
        {
            form === 1 && (<>
            <h3 className={lang==='he'?'text-right':''}>
                {text[lang]["shabbat-subtitle"]}
            </h3>
            <form>
                <div className="row mx-0">
                <select className="form-control col-8 border-danger" style={{borderRadius:'20px 0 0 20px',borderWidth:3}} onChange={selChange}>
                {
                    shabbats.map((v,i)=> <option key={i} value={`${v.Parasha.title}~${v.Candle.title}~${v.Havdalah.title}~${v.Parasha.date}`}>
                        {v.Parasha.title} ({v.Parasha.date})
                    </option>)
                }
                </select>
                <button className="btn btn-danger col-4" style={{borderRadius:'0 20px 20px 0'}} onClick={e=>{
                    e.preventDefault();
                    setForm(2);
                }}>
                    REGISTER
                </button>
                </div>
            </form>
            <div className="shabbat-time mx-auto my-5 row mx-0">
                <div style={{width:70, height:70}} className="col-3 candles-img"></div>
                <div className="col-9" style={{display:'grid',placeContent:'center'}}>
                    <span>
                        <h4>{selShabbat.parasha}</h4>
                        <small>Candle Light</small><br/>
                        <p className="p-0 text-danger">{selShabbat.start.split(': ')[1]}</p>
                        <small>Shabbat\holiday end's</small><br/>
                        <p className="p-0 text-danger">{selShabbat.end.split(': ')[1]}</p>
                    </span>
                </div>
            </div>
            </>)
        }
        {
            form === 2 && (<>
                <div>
                {
                    alerts.map((v,i)=> <div key={i} className="alert alert-warning alert-dismissible fade show" role="alert">
                        <b>{v}</b>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>)
                }
                </div>
                <div className="row mx-0">
                    <h3 className="col-8">
                        {selShabbat.parasha} &nbsp;
                        <b className="text-danger">
                            ({new Date(selShabbat.date).getDay()}-{new Date(selShabbat.date).getDay()-1}/{new Date(selShabbat.date).getMonth()}/{new Date(selShabbat.date).getFullYear()})
                        </b>
                    </h3>
                    <div className="col-4 font-bold" style={{cursor:'pointer'}}>
                        <span className="badge-danger badge p-1" onClick={()=>setForm(1)}>Change Date</span>
                    </div>
                </div>
                <p></p>
                <div className="form-group font-bold row mx-0">
                    <label className="col-12 px-0" htmlFor="fn">Friday Night</label>
                    <input id="fn" className=" col-6 form-control danger" style={{maxWidth:200}} type="number" min="0" 
                        value={friday} onChange={(e)=>form2change(e, 1)}/>
                    <b className="col-6">Cost &euro; 30</b>
                </div>
                <div className="form-group font-bold row mx-0">
                    <label className="col-12 px-0" htmlFor="sd">Saturday</label>
                    <input id="sd" className=" col-6 form-control danger" style={{maxWidth:200}} type="number" min="0"
                     value={saturday} onChange={(e)=>form2change(e, 2)}/>
                    <b className="col-6">Cost &euro; 30</b>
                </div>
                <form className="font-bold">
                    <p>Your Details</p>
                    <div className="form-group" style={{maxWidth:300}}>
                        <input className="form-control danger my-1" type="text" placeholder="Full Name" required value={name} onChange={(e)=>form2change(e, 3)}/>
                        <input className="form-control danger my-1" type="email" placeholder="Email" required value={email} onChange={(e)=>form2change(e, 4)}/>
                        <input className="form-control danger my-1" type="phone" placeholder="Phone Number" required value={phone} onChange={(e)=>form2change(e, 5)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="donation">Would you like to give a donation ?</label>
                        <input id="donation"  style={{maxWidth:200}} placeholder="&euro;" className="form-control danger" 
                            type="number" min="0" value={donation} onChange={(e)=>form2change(e, 6)}/>
                    </div>
                    <button className="btn btn-danger" style={{borderRadius:20}} onClick={onSubmit}>Submit</button>
                </form>
            </>)
        }
        </div>
    </div>
    </Layout>)
}

function three(arr){
    let res = [];
    for(let i=0;i<arr.length;i+=3){
        res.push({
            Candle:arr[i], Parasha:arr[i+1], Havdalah:arr[i+2]
        });
    }
    return res;
}
