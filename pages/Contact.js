import text from '../assets/text.json';
import Layout from '../components/Layout';


function Contact({lang}) {
    return (<Layout title="Contact">
    <div style={{minHeight:'90vh'}}>
        <div className="shabbat-head-img">
            <div className="w-100 h-100">
                <h1 className="text-white text-center w-100" style={{fontWeight:800}}>
                    {text[lang]["contact-title"]}
                </h1>
            </div>
        </div>
    </div>
    </Layout>)
}

export default Contact;