import React, { useEffect, useRef, useState } from 'react';
import {ImgTop, Layout} from '../components';
import text from '../assets/text.json';
import firebase from 'firebase/app';
import "firebase/storage";
import { connect } from 'react-redux';
import {setLoading} from '../redux/actions';
import init_firebase from '../firebase';

function Gallery({lang,admin, setLoading}) {
    const [img, setImg] = useState('');
    const [imgs, setImgs] = useState([]);

    const initImgs = useRef(async ()=>{});
    initImgs.current = async () => {
        setLoading(true);
        try {
            init_firebase();
            let tmp = [];
            let allFiles = await firebase.storage().ref('gallery').listAll();
            for(let i=0;i<allFiles.items.length;i++){
                let url = await allFiles.items[i].getDownloadURL();
                tmp.push({url,name:allFiles.items[i].name});
            } setImgs(tmp);
        } catch (error) {
            console.log(error)
        } setLoading(false);
    }

    const uploadImgForAdmin = async () => {   
        try {
            setLoading(true); 
            await firebase.storage().ref('gallery/'+img.name).put(img);
            await initImgs.current();
        } catch (err) {
            console.log(err);
        } setLoading(false);
    }

    const deleteImgForAdmin = async (name) => {
        try {
            setLoading(true); 
            await firebase.storage().ref('gallery/'+name).delete();
            await initImgs.current();
        } catch (err) {
            console.log(err);
        } setLoading(false);
    }

    useEffect(()=>{
        initImgs.current();
    },[]);

    return (<>
    <ImgTop title="gallery-title"/>
    {
        admin && <div className="row mx-0 justify-content-center py-1">
        <input type="file" accept="image/*" onChange={e=> setImg(e.target.files[0])}/>
        <button className="btn btn-blue" onClick={uploadImgForAdmin}>Save</button>
        </div>
    }
    <div className="gal-body py-5">
        <div className="gal-grid-container">
            {
                imgs.map((val,i)=><div key={i}>
                    <img src={val.url} alt="chabbad gallery" className="gal-grid-item grid-item-1"/>
                    {admin && <p className="m-0 badge badge-danger c-p" onClick={()=>deleteImgForAdmin(val.name)}>
                        <i className="fa fa-trash"></i> Delete
                    </p>}
                </div>)
            }
        </div>
    </div>
    </>)
}

export default connect(s=>({lang:s.lang,admin:s.admin}), {setLoading})(Gallery);