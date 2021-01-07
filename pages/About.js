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
            <p>
                <b>Lorem Ipsum</b> 
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
                <b>Lorem Ipsum</b> 
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    </div>
    </Layout>)
}

export default About;