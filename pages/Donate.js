import text from '../assets/text.json';
import Layout from '../components/Layout';

function Donate({lang}){
    return (<Layout>
        <div style={{minHeight:'100vh'}}>
        <div className="shabbat-head-img">
            <div className="w-100 h-100">
                <h1 className="text-white text-center w-100" style={{fontWeight:800}}>
                    {text[lang]["donate-title"]}
                </h1>
            </div>
        </div>
        <div style={{display:'grid',placeContent:'center', marginTop:20}}>
            <a href="https://secure.cardcom.co.il/e/6Cv/" className="btn btn-blue" target="_blank" rel="noreferrer">
                {text[lang]["click-me"]}
            </a>
        </div>
    </div>
    </Layout>);
}

export default Donate;