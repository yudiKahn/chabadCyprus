import { connect } from 'react-redux';
import text from '../assets/text.json';
import {ImgTop, Layout} from '../components';


function Contact({lang}) {
    return (<Layout title="Contact">
    <div style={{minHeight:'90vh'}}>
        <ImgTop title="contact-title"/>
    </div>
    </Layout>)
}

export default connect(s=>({lang:s.lang}))(Contact);