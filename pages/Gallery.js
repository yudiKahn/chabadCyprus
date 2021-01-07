import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import text from '../assets/text.json';

function Gallery({state:{lang, admin}, adminHeader}) {
    const [imgs, setImgs]  = useState([]);
    const [img, setImg] = useState('');

    const getImgs = useRef(()=>{});
    getImgs.current = () => {
        fetch('/api/gallery', {method:'GET'}).then(res=> res.ok && res.json().then(d=> setImgs(d.data)));
    };
    useEffect(()=>{
        getImgs.current();
    },[]);

    return (<Layout title="Gallery">
    <div className="shabbat-head-img">
        <div className="w-100 h-100">
            <h1 className="text-white text-center w-100" style={{fontWeight:800}}>
                {text[lang]["gallery-title"]}
            </h1>
        </div>
    </div>
    {
        admin && <>
        <input type="file" accept="image/*" onChange={e=> setImg(e.target.files[0])}/>
        <button className="btn btn-blue" onClick={()=>{
            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onload = function(e){
                fetch('/api/gallery', {method:'POST', body:e.target.result, headers: adminHeader})
                .then(res=> res.ok ? setTimeout(getImgs.current, 500) : console.log('err'));
            }
        }}>Save</button>
        </>
    }
    <div className="gal-body py-5">
        <div className="gal-grid-container">
            {
                imgs.map((src,i)=><div key={i}>
                    <img className="gal-grid-item grid-item-1" src={src} alt='chabbad gallery'/>
                    {admin && <p className="m-0 badge badge-danger c-p" onClick={()=>{
                        fetch('/api/gallery', {method:'delete',body:i,headers:adminHeader})
                        .then(res=> res.ok ? setTimeout(getImgs.current, 500) : console.log('err'));
                    }}>
                        <i className="fa fa-trash"></i> Delete
                    </p>}
                </div>)
            }
        </div>
    </div>
    </Layout>)
}


export default Gallery;