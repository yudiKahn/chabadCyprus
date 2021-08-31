import Link from 'next/link';
import text from '../assets/text.json';
import {Icons} from '../components';
import { connect } from 'react-redux';
import React from 'react';

function Home({lang}) {
    return (<>
        <section className="bg-img">
            <div className="text w-100 h-100 px-3" style={lang==='he'?{justifyContent:'flex-end'}:{}}>
                <span style={lang==='he'?{textAlign:'end'}:{}}>
                    <h1>{text[lang].welcome}</h1>
                    <a className="btn btn-fill-blue mx-1" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=+35796640980&text=Hello">
                        <i className="fa fa-whatsapp"></i>
                    </a>
                    <a className="btn btn-fill-blue mx-1" target="_blank" rel="noreferrer" href="mailto:ayianapa@chabadcyprus.com">
                        <i className="fa fa-envelope"></i>
                    </a>
                    <a className="btn btn-fill-blue mx-1" target="_blank" rel="noreferrer" href="tel:+35796640980">
                        <i className="fa fa-phone"></i>
                    </a>
                </span>
            </div>
        </section>
        <div className="py-5 row mx-0 justify-content-center">
            <Link href="/ShabbatMeals">
                <div className="col info-icon py-4 m-3">
                    <Icons.ShabbatMeals style={{width:90,height:90,fill:'var(--blue)'}} className="icon"/>
                    <p className="mb-0 mt-4">{text[lang].info[0]}</p>
                </div>
            </Link>
            <Link href="/Food">
                <div className="col info-icon py-4 m-3">
                    <Icons.Food style={{width:90,height:90,fill:'var(--blue)'}} className="icon"/>
                    <p className="mb-0 mt-4">{text[lang].info[2]}</p>
                </div>
            </Link>
            <Link href="/Hotels">
                <div className="col info-icon py-4 m-3">
                    <Icons.Hotels style={{width:90,height:90,fill:'var(--blue)'}} className="icon"/>
                    <p className="mb-0 mt-4">{text[lang].info[3]}</p>
                </div>
            </Link>
            <Link href="/Info">
                <div className="col info-icon py-4 m-3">
                    <i style={{fontSize:90,color:'var(--blue)'}} className="icon fa fa-exclamation"></i>
                    <p className="mb-0 mt-4">{text[lang].info[4]}</p>
                </div>
            </Link>
            <Link href="/Contact">
                <div className="col info-icon py-4 m-3">
                    <Icons.Contact style={{width:90,height:90,fill:'var(--blue)'}} className="icon"/>
                    <p className="mb-0 mt-4">{text[lang].info[1]}</p>
                </div>
            </Link>
        </div>
        <section className="video-container">
            <video playsInline controls loop>
                <source src="/ayianapa.mp4" type="video/mp4"/>
            </video>
        </section>
        <section className="contact row mx-0 justify-content-center">
            <div className="col" style={{ minWidth: 300, maxWidth: 300 }}>
                <div className="row mx-0">
                    <i className="fa fa-4x fa-map-marker col-3"></i>
                    <span className="col-9">
                        <h4 style={{fontSize:23, fontWeight:'bold'}}>{text[lang]["info-row"].location[0]}</h4>
                        <p style={{fontSize:13}}>{text[lang]["info-row"].location[1]}</p>
                    </span>
                </div>
            </div>
            <div className="col" style={{ minWidth: 300, maxWidth: 300 }}>
                <div className="row mx-0">
                    <i className="fa fa-4x fa-phone col-3"></i>
                    <span className="col-9">
                        <h4 style={{fontSize:23, fontWeight:'bold'}}>{text[lang]["info-row"].phone[0]}</h4>
                        <p style={{fontSize:13}}>{text[lang]["info-row"].phone[1]}</p>
                    </span>
                </div>
            </div>
            <div className="col" style={{ minWidth: 300, maxWidth: 300 }}>
                <div className="row mx-0">
                    <i className="fa fa-4x fa-clock-o col-3"></i>
                    <span className="col-9">
                        <h4 style={{fontSize:23, fontWeight:'bold'}}>{text[lang]["info-row"].hours[0]}</h4>
                        <p style={{fontSize:13}}>{text[lang]["info-row"].hours[1]}</p>
                    </span>
                </div>
            </div>
        </section>
        <section className="map">
            <iframe title="map" className="w-100 h-100" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Chabad+Ayia+Napa-חבד+איה+נפה,+Ayia+Napa,+Cyprus&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
            </iframe>
        </section>
    </>)
}
const mapSTP = s => ({
    lang:s.lang
})
export default connect(mapSTP)(Home);