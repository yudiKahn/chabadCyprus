import React from 'react';
//import Image from 'next/image';

const Card = ({title, text, link, img}) => (<div className="card card-custom bg-white border-white border-0 m-1">
    <div className="card-custom-img" style={{backgroundImage: `url(${img})`}}></div>
    <div className="card-body pt-0" style={{overflowY: 'auto'}}>
    <h4 className="card-title">{title}</h4>
    <p className="card-text">{text}</p>
    </div>
    <div className="card-footer" style={{background: 'inherit', borderColor: 'inherit'}}>
    <a href={link} className="btn btn-blue" target="_blank">
        <i className="fa fa-external-link"></i>
    </a>
    </div>
</div>)

export default Card;
//'url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)'