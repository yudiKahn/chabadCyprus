import Layout from "../components/Layout";
import text from "../assets/text.json";

function About({state:{lang}}) {

    return (<Layout title="About">
        <div className="shabbat-head-img">
            <div className="w-100 h-100">
                <h1 className="text-white text-center w-100" style={{fontWeight:800}}>
                    {text[lang]["about-title"]}
                </h1>
            </div>
        </div>
        <div className="container py-2" style={{minHeight:'100vh'}}>
        <div className="row mx-0" style={{height:200}}>
            <img className="w-100 h-100" alt="about chabbad" src="https://th.bing.com/th/id/OIP.1XJQIFqhxcn0cTuiCH7nTgAAAA?pid=Api&rs=1"/>
        </div>
        <div className="row mx-0 mt-3">
            <p style={{fontSize:'larger',textAlign:'center'}}>
            <strong>{text[lang].about.split(' ~ ')[0]}</strong> - 
            {text[lang].about.split(' ~ ')[1]}
            </p>
        </div>
    </div>
    </Layout>)
}

export default About;