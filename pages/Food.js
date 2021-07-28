import { connect } from 'react-redux';
import {ImgTop} from '../components';
import {Food as text} from '../assets/text';

function Food({lang}) {
    return (<>
        <ImgTop title={text[lang].title}/>
        <div className="container text-center py-5">
            <div style={{fontFamily:"fantasy"}} className="pb-3">
                <h1 className="mb-0" style={{fontSize:90,color:'#059668'}}>M</h1>
                <h1 className="text-center">MAIMONIDES</h1>
            </div>
            <p>{text[lang].opening}</p>
            <p>{text[lang].more}</p>
            <p><b>{text[lang].shabbat}</b></p>
            <ul className="list-group" style={{placeItems:'center',direction:lang==='he'?'rtl':'ltr'}}>
                {text[lang].shabbatFood.map((v,i)=> <li key={i}>{v}</li>)}
            </ul>
            <p className="pt-2"><b>{text[lang].cost}</b></p>
            <ul className="list-group" style={{placeItems:'center',direction:lang==='he'?'rtl':'ltr'}}>
                {text[lang].costs.map((v,i)=> <li key={i}>{v}&euro;</li>)}
            </ul>
        </div>
    </>)
}

export default connect(s=>({lang:s.lang}))(Food);