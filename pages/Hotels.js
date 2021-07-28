import {Card, ImgTop} from '../components';
import {Hotels as text} from '../assets/text';
import { connect } from 'react-redux';

function Hotels({lang}) {
    return (<>
        <ImgTop title={text[lang].title}/>
        <div className="container py-3">
            <div className="row mx-0"  style={{placeContent:'center'}}>
            {text[lang].items.map((v,i)=> <Card key={i} title={v.title} link={v.link} img={v.img}/>)}
            </div>
        </div>
    </>)
}

export default connect(s=>({lang:s.lang}))(Hotels);