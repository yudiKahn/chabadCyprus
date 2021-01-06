import Link from 'next/link';
import text from '../assets/text.json';
import Layout from '../components/Layout';

function Home({lang}) {
    return (<Layout>
        <section className="bg-img">
            <div className="w-100 h-100 px-3" style={lang==='he'?{justifyContent:'flex-end'}:{}}>
                <span style={lang==='he'?{textAlign:'end'}:{}}>
                    <h1>{text[lang].welcome}</h1>
                    <Link href="/Donate">
                      <a className="btn btn-fill-blue mx-1">{text[lang].welcome_btn1}</a>
                    </Link>
                    <Link href="/Contact">
                      <a className="btn btn-fill-blue mx-1">{text[lang].welcome_btn2}</a>
                    </Link>
                </span>
            </div>
        </section>
        <div style={{ minHeight: '100vh' }} className="py-5">
            <h1 className="text-center">{text[lang].info_title}</h1>
            <div className="xx-body font-bold">
                <div className="xx-container">
                    <div className="xx-card">
                        <img alt="xx" src="https://images.squarespace-cdn.com/content/v1/5f18474e111f1c29da62258f/1597852695013-G6YZR8M48IM92IGTMP1V/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Friday+Night.jpg" />
                        <Link href="/Shabbat-Meals">
                          <a className="xx-card__head">{text[lang].info[0]} &nbsp;<i className="fa fa-mouse-pointer" style={{fontSize:20}}></i></a>
                        </Link>
                    </div>
                    <div className="xx-card">
                        <img alt="xx" src="https://mknhs.org.uk/wp-content/uploads/2015/03/Contact-Us-Icon.jpg" />
                        <Link href="/Contact">
                          <a className="xx-card__head">{text[lang].info[1]} &nbsp;<i className="fa fa-mouse-pointer" style={{fontSize:20}}></i></a>
                        </Link>
                    </div>
                    <div className="xx-card">
                        <img alt="xx" src="https://www.villazzo.com/blog/wp-content/uploads/2017/10/kosher-food.jpg" />
                        <Link href="/">
                          <a className="xx-card__head">{text[lang].info[2]} &nbsp;<i className="fa fa-mouse-pointer" style={{fontSize:20}}></i></a>
                        </Link>
                    </div>
                    <div className="xx-card">
                        <img alt="xx" src="https://greatcyprusresorts.files.wordpress.com/2013/01/luxury-hotel.jpg" />
                        <Link href="/Hotels">
                          <a className="xx-card__head">{text[lang].info[3]} &nbsp;<i className="fa fa-mouse-pointer" style={{fontSize:20}}></i></a>
                        </Link>
                    </div>
                    <div className="xx-card">
                        <img alt="xx" src="https://cdn.londonandpartners.com/assets/maps/tourist_information/2992-640x360-tourist_information_sign_640.jpg" />
                        <Link href="/">
                          <a className="xx-card__head">{text[lang].info[4]} &nbsp;<i className="fa fa-mouse-pointer" style={{fontSize:20}}></i></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <section className="contact row mx-0 justify-content-center">
            <div className="col" style={{ minWidth: 300, maxWidth: 300 }}>
                <div className="row mx-0">
                    <i className="fa fa-4x fa-map-marker col-3"></i>
                    <span className="col-9">
                        <h4 style={{fontSize:23, fontWeight:'bold'}}>Waiting for you at Chabad House</h4>
                        <p style={{fontSize:13}}>Taborstraße 20A, 1020 Wien, Austria</p>
                    </span>
                </div>
            </div>
            <div className="col" style={{ minWidth: 300, maxWidth: 300 }}>
                <div className="row mx-0">
                    <i className="fa fa-4x fa-phone col-3"></i>
                    <span className="col-9">
                        <h4 style={{fontSize:23, fontWeight:'bold'}}>We are available for any questions</h4>
                        <p style={{fontSize:13}}>+43-676-83181-771</p>
                    </span>
                </div>
            </div>
            <div className="col" style={{ minWidth: 300, maxWidth: 300 }}>
                <div className="row mx-0">
                    <i className="fa fa-4x fa-clock-o col-3"></i>
                    <span className="col-9">
                        <h4 style={{fontSize:23, fontWeight:'bold'}}>Our hours of operation</h4>
                        <p style={{fontSize:13}}>Sunday through Thursday: 08:00-18:00 Friday: 08:00-14:30</p>
                    </span>
                </div>
            </div>
        </section>
        <section className="map">
            <iframe title="map" className="w-100 h-100" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Chabad+Ayia+Napa-חבד+איה+נפה,+Ayia+Napa,+Cyprus&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
            </iframe>
        </section>
    </Layout>)
}

export default Home;