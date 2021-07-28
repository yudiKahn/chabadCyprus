import { connect } from 'react-redux';
import text from '../assets/text.json';
import {ImgTop} from '../components';


function Contact({lang}) {
    return (<>
    <div style={{minHeight:'90vh'}}>
        <ImgTop title="contact-title"/>
    </div>
    </>)
}

export default connect(s=>({lang:s.lang}))(Contact);