import React from 'react';
import { connect } from 'react-redux';
import text from '../assets/text.json';

const ImgTop = ({lang, title}) => (<div className="w-100" style={{height:150,
    background:'url("/imgs/AyiaNapa.jpg") no-repeat fixed'}}>
<div className="w-100 h-100">
    <h1 className="text-white text-center w-100" style={{fontWeight:800}}>
        {text[lang][title]||title}
    </h1>
</div>
</div>)

export default connect(s=>({lang:s.lang}))(ImgTop);
/**
 * background-image: url('/chabadHouse');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    background-attachment: fixed;
 */