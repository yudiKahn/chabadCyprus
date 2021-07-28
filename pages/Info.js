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
            <div className={`row mx-0 py-1 ${lang==='he'&&'justify-content-end'}`}>
                <select className="form-control blue col-2" id="catSelect" value={category} onChange={e=>setCategory(e.target.value)}>
                    <option selected value={''}>{text[lang].select}</option>
                {
                    Object.values(categories).map((v,i) => <option value={v[lang]} key={i}>#{v[lang]}</option>)
                }
                </select>
            </div>
            <div className="row mx-0"  style={{placeContent:'center'}}>
            { text[lang].items.map((v,i)=> (category ? Array.from(v.categories).includes(category) :true) && <Card key={i} title={v.title} text={v.text} img={v.img} link={v.link}/>)}
            </div>
        </div>
    </>)
}

export default connect(s=>({lang:s.lang}))(Info)