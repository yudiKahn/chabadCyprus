import { connect } from 'react-redux';
import text from '../assets/text.json';
import {ImgTop, Layout} from '../components';

function Donate({lang}){
    return (<>
        <div style={{minHeight:'100vh'}}>
        <ImgTop title="donate-title"/>
        <div style={{display:'grid',placeContent:'center', marginTop:20}}>
            <a href="https://secure.cardcom.co.il/e/6Cv/" className="btn btn-blue" target="_blank" rel="noreferrer">
                {text[lang]["click-me"]}
            </a>
        </div>
    </div>
    </>);
}

export default connect(s=>({lang:s.lang}))(Donate);