import React from 'react';
import Link from 'next/link';

const Card = ({title, text, link, img, imgReplacement}) => (<Link href={link||"/404"}>
    <a className="card card-custom bg-white border-white border-0 m-3">
    {img&&<div className="card-custom-img" style={{backgroundImage: `url(${img})`}}></div>}
    {!img && imgReplacement ? imgReplacement: null}
    <div className="card-body py-0" style={{overflowY: 'auto'}}>
    <h4 className="card-title text-dark">{title}</h4>
    </div>
    {/* <div className="card-footer pt-1" style={{background: 'inherit', borderColor: 'inherit'}}>
    </div> */}
    </a>
</Link>)

export default Card;