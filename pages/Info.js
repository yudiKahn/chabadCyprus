import { connect } from 'react-redux';
import {ImgTop, Card, Popups} from '../components';
import {Info as text, infoCateg as categories} from '../assets/text';
import { useEffect, useState } from 'react';
import {setPopup, addAlert} from '../redux/actions';

/**
 * 
 * @param {{addAlert: addAlert}} props
 */
function Info({lang, setPopup, addAlert}) {
    const [category, setCategory] = useState('');
    useEffect(()=>setCategory(''),[lang]);
    const setPopupTo = (txt) => addAlert(txt ? {msg:txt, type:"primary", isInfo:true} : {msg:text[lang].no_info});

    return (<>
        <ImgTop title={text[lang].title}/>
        <div className="container py-3">
            <div className="row mx-0"  style={{placeContent:'center'}}>
            { text[lang].items.map((v,i)=> (category ? Array.from(v.categories).includes(category) :true) && 
            <Card 
                key={i} 
                title={v.title} 
                text={<>
                    {v.categories.map((v,i,a)=><img key={i} className="info-icon-sm mr-1" src={`/icons/${v}`}/>)}
                    <br/>
                    <b onClick={()=>setPopupTo(v.info)} style={{cursor:'pointer',textDecoration:'underline'}} className="my-1">{text[lang].more_info}</b>
                </>} 
                img={v.img} 
                link={v.link}/>)}
            </div>
        </div>
    </>)
}

export default connect(s=>({lang:s.lang}), {setPopup, addAlert})(Info)