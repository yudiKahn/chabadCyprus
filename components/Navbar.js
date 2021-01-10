import React from 'react';
import Link from 'next/link';
import text from '../assets/text.json';
import { types } from '../pages/_app';

export default function Navbar({state:{lang},dispatch}) {
    const toggleClass = e => {
        let btn = e.nativeEvent.path.find(el=>Array.from(el.classList).indexOf('navbar-toggler')>-1);
        Array.from(btn.classList).indexOf('click') < 0 ? btn.classList+=' click' : btn.classList.remove('click');
    }

    return (<header id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-white font-bold">
            <div className="row mx-0 w-100 justify-content-between">
                <div className="nav-col-1">
                    <Link href="/">
                        <a className="navbar-brand"><img src="/logo.jpg" className="w-100 h-100"/></a>
                    </Link>
                </div>
                <div className="nav-col-2">
                    <button onClick={toggleClass} className="navbar-toggler" data-toggle="collapse" data-target="#nav-coll" aria-controls="nav-coll" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                    </button>
                </div>
                <div className="row w-100 collapse navbar-collapse justify-content-center" id="nav-coll">
                    <ul className="navbar-nav" style={{direction:lang==='he'?'rtl':'ltr'}}>
                        <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link">{text[lang].links[0]}</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/ShabbatMeals">
                                <a className="nav-link">{text[lang].links[1]}</a>
                            </Link>                        </li>
                        <li className="nav-item">
                            <Link href="/About">
                                <a className="nav-link">{text[lang].links[2]}</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Gallery">
                                <a className="nav-link">{text[lang].links[4]}</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Donate">
                                <a className="nav-link">{text[lang].links[3]}</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div className="nav-btns">
                                <div className={`col ${lang==='he'?'text-right':''}`}>
                                    <button className="btn btn-blue mx-1" onClick={()=>dispatch({type:types.SET_LANG,payload:'he'})}>
                                        עברית
                                    </button>
                                    <button className="btn btn-blue mx-1" onClick={()=>dispatch({type:types.SET_LANG,payload:'en'})}>
                                        English
                                    </button>
                                </div>
                                <div className={`col ${lang==='he'?'':'text-right'}`}>
                                    <a href="https://www.facebook.com/chabadofnapa" target="_blank" rel="noreferrer">
                                        <i className="btn btn-blue fa m-1 fa-facebook"></i>
                                    </a>
                                    <a href="https://www.instagram.com/chabad_ayia_napa/" target="_blank" rel="noreferrer">
                                        <i className="btn btn-blue fa m-1 fa-instagram"></i>
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=+35796640980&text=Hello">
                                        <i className="btn btn-blue fa m-1 fa-whatsapp"></i>
                                    </a>
                                    <Link href="/Admin">
                                        <a className="btn btn-blue fa m-1 fa-user-circle-o"></a>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>)
}