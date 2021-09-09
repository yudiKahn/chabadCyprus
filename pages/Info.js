import { connect } from 'react-redux';
import {ImgTop, Card} from '../components';
import {Info as text, infoCateg as categories} from '../assets/text';
import { useEffect, useState } from 'react';

function Info({lang}) {
    const [category, setCategory] = useState('');
    useEffect(()=>setCategory(''),[lang]);
    return (<>
        <ImgTop title={text[lang].title}/>
        <div className="container py-3">
            <div className="row mx-0"  style={{placeContent:'center'}}>
            { text[lang].items.map((v,i)=> (category ? Array.from(v.categories).includes(category) :true) && 
            <Card key={i} title={v.title} text={<>{v.text}<br/>{v.categories.map((v,i,a)=>v+(a.length==i+1?"":','))}</>} img={v.img} link={v.link}/>)}
            </div>
        </div>
    </>)
}

export default connect(s=>({lang:s.lang}))(Info)