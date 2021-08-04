import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import {Donate as text} from '../assets/text';
import {ImgTop} from '../components';

function Donate({lang}){
    const iframe=useRef();
    useEffect(()=>{
        styleIframe(iframe.current)  
    },[]);

    return (<>
        <div style={{minHeight:'100vh'}}>
        <ImgTop title={text[lang].title}/>
        <div style={{display:'grid',placeContent:'center', marginTop:20}}>
            <a href="https://secure.cardcom.co.il/e/6Cv/" className="btn btn-blue" target="_blank" rel="noreferrer">
                {text[lang].btn}
            </a>
        </div>
        <div style={{display:'grid',placeContent:'center', marginTop:20}}>
        <iframe ref={i => iframe.current = i} src="https://secure.cardcom.co.il/e/6Cv/" className="donate-frame"></iframe>
        </div>
    </div>
    </>);
}

export default connect(s=>({lang:s.lang}))(Donate);

function styleIframe(iframe){
    
}