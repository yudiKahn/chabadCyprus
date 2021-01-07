import '../styles/index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Alerts from '../components/Alerts';
import { useEffect, useReducer, useRef, useState } from 'react';

export const types = {
    SET_ADMIN:'SET_ADMIN',
    CLEAR_ADMIN: 'CLEAR_ADMIN',
    SET_ALERTS: 'SET_ALERTS',
    CLEAR_ALERTS: 'CLEAR_ALERTS',
    SET_LANG: 'SET_LANG'
}
const initState = {
    admin: null,
    alerts: [],
    lang: 'he'
}

function App({ Component, props }) {
    const [state, dispatch] = useReducer(reducer, initState);

    const getAdmin = useRef(()=>{});
    getAdmin.current = () => (
        fetch('/api/admin', {method:'POST', body:JSON.stringify({token:localStorage.getItem('admin')}) })
        .then(res=> res.ok && res.json().then(d=> dispatch({type:types.SET_ADMIN, payload:d.token })))
    );

    useEffect(()=>{
       getAdmin.current();
       if(/http:/.test(window.location.href) && !/localhost/.test(window.location.href)){
           window.location.replace(window.location.href.replace('http','https'))
       }
    },[]);

    return (<>
    <Navbar state={state} dispatch={dispatch}/>
    <Alerts state={state}/>
    <Component {...props} state={state} dispatch={dispatch}
     adminHeader={{'x-Admin-Header':state.admin}}/>
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
        case types.SET_LANG:
            return {...state, lang: payload};
        case types.SET_ALERTS:
            setTimeout(()=> reducer(state, {type: types.CLEAR_ALERTS}), 4000);
            return {...state, alerts: payload};
        case types.CLEAR_ALERTS:
            return {...state, alerts:[]};
        default:
            return state;
    }
};