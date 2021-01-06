import '../styles/index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useReducer, useRef, useState } from 'react';

export const types = {
    SET_ADMIN:'SET_ADMIN',
    CLEAR_ADMIN: 'CLEAR_ADMIN'
}

function App({ Component, props }) {
    const [lang, setLang] = useState('he');
    const [user, dispatchUser] = useReducer(reducer, { admin:null });

    const getAdmin = useRef(()=>{});
    getAdmin.current = () => (
        fetch('/api/admin', {method:'POST', body:JSON.stringify({token:localStorage.getItem('admin')}) })
        .then(res=> res.ok && res.json().then(d=> dispatchUser({type:types.SET_ADMIN, payload:d.token })))
    );

    useEffect(()=>{
       getAdmin.current();
    },[]);

    return (<>
    <Navbar lang={lang} setLang={(v)=>setLang(v)}/>
    <Component {...props} lang={lang} user={user} setUser={dispatchUser}
     adminHeader={{'x-Admin-Header':user.admin}}/>
    <Footer/>
    </>);
}

export default  App;

function reducer(state, {type,payload}){
    switch (type){
        case types.SET_ADMIN:
            localStorage.setItem('admin', payload);
            return {...state, admin: payload};
        case types.CLEAR_ADMIN:
            localStorage.removeItem('admin');
            return {...state, admin:null };
        default:
            return state;
    }
};