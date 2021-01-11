import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import text from '../assets/text.json';
import {types} from './_app';

function Gallery({state:{lang, admin}, adminHeader, dispatch}) {
    const [imgs, setImgs]  = useState([]);
    const [img, setImg] = useState('');

    const getImgs = useRef(()=>{});
    getImgs.current = () => {
        dispatch({type: types.SET_LOAD, payload: true});
        fetch('/api/gallery', {method:'GET'}).then(res=> res.ok && res.json().then(d=> {
            setImgs(d.data); 
            dispatch({type: types.SET_LOAD, payload:false});
        }));
    };
    useEffect(()=>{
        getImgs.current();
    },[]);

    const uploadImgForAdmin = () => {    
        dispatch({type: types.SET_LOAD, payload: true});   
        const fd = new FormData();
        fd.append('img', img);
        fetch('/api/gallery', {method:'POST',body:fd, headers:adminHeader })
        .then(res=>{
            if(res.ok){
                getImgs.current();
                dispatch({type:types.SET_ALERTS, payload:[{type:'success', msg:'Image uploaded successfuly'}]});
            } else {
                dispatch({type: types.SET_LOAD, payload: false});
                dispatch({type: types.SET_ALERTS, payload: [{type:'danger', msg:'An error has occurred'}]});
            }
        });
    }

    const deleteImgForAdmin = (name) => {
        dispatch({type: types.SET_LOAD, payload: true});
        fetch(`/api/gallery/${name}`, {method:'delete',headers:adminHeader})
            .then(res=>{
                if(res.ok){
                    dispatch({type:types.SET_ALERTS, payload:[{type:'success', msg:'Image deleted successfuly'}]});
                    setTimeout(getImgs.current, 500);
                } else {
                    dispatch({type: types.SET_ALERTS, payload:[{type:'danger',msg:'An error occurred'}]});
                }
            });
    }

    return (<Layout title="Gallery">
    <div className="shabbat-head-img">
        <div className="w-100 h-100">
            <h1 className="text-white text-center w-100" style={{fontWeight:800}}>
                {text[lang]["gallery-title"]}
            </h1>
        </div>
    </div>
    {
        admin && <div className="row mx-0 justify-content-center py-1">
        <input type="file" accept="image/*" onChange={e=> setImg(e.target.files[0])}/>
        <button className="btn btn-blue" onClick={uploadImgForAdmin}>Save</button>
        </div>
    }
    <div className="gal-body py-5">
        <div className="gal-grid-container">
            {
                imgs.map((src,i)=><div key={i}>
                    <img src={src} alt="chabbad gallery" className="gal-grid-item grid-item-1"/>
                    {admin && <p className="m-0 badge badge-danger c-p" onClick={()=>deleteImgForAdmin(src)}>
                        <i className="fa fa-trash"></i> Delete
                    </p>}
                </div>)
            }
        </div>
    </div>
    </Layout>)
}


export default Gallery;