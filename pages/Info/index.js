import React from 'react';
import { connect } from 'react-redux';
import {ImgTop} from '../../components';
import {Info as text, infoCateg as categories} from '../../assets/text';
import Link from 'next/link';

function Info({lang}) {

    return (<>
        <ImgTop title={{en:"Info",he:"מידע"}[lang]}/>
        <div className="container py-3 text-center" style={{maxWidth:1050}}>
        {
            Object.values(categories).map((v,i)=> <Link href={`/Info/${v.txt.en}`} key={i}>
                <a className="btn btn-blue mx-5 my-2 p-4" style={{width:170}}>
                    <i className={`${v.i} fa-2x`}></i>
                    <br/>
                    <small>{v.txt[lang]}</small>
                </a>
            </Link>)
        }
        </div>
    </>)
}

export default connect(s=>({lang:s.lang}))(Info);