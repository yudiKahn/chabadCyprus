import React from 'react';
import Link from 'next/link';

const Card = ({title, text, link, img}) => (<Link href={link}>
    <a className="card card-custom bg-white border-white border-0 m-1">
    <div className="card-custom-img" style={{backgroundImage: `url(${img})`}}></div>
    <div className="card-body py-0" style={{overflowY: 'auto'}}>
    <h4 className="card-title text-dark">{title}</h4>
    </div>
    {/* <div className="card-footer pt-1" style={{background: 'inherit', borderColor: 'inherit'}}>
    </div> */}
    </a>
</Link>)

export default Card;