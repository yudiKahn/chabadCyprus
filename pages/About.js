import text from "../assets/text.json";
import { connect } from "react-redux";
import { ImgTop } from "../components";

function About({lang}) {

    return (<>
        <ImgTop title="about-title"/>
        <div className="container py-2" style={{minHeight:'100vh'}}>
        <div className="row mx-0" style={{height:200}}>
            <img className="w-100 h-100" alt="about chabbad" src="https://th.bing.com/th/id/OIP.1XJQIFqhxcn0cTuiCH7nTgAAAA?pid=Api&rs=1"/>
        </div>
        <div className="row mx-0 my-4">
            <p style={{fontSize:30,textAlign:'center'}}>
            <strong>{text[lang].about.split(' ~ ')[0]}</strong>&nbsp;
            <i>{text[lang].about.split(' ~ ')[1]}</i>
            </p>
        </div>
    </div>
    </>)
}

export default connect(s=>({lang:s.lang}))(About);