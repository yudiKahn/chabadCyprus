import '../styles/index.css';
import {Navbar, Footer, Alerts, Spinner, Sidebar} from '../components';
import { useEffect, useReducer, useRef, useState } from 'react';
//#region redux import
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from '../redux/store'
//#endregion

function App({ Component, pageProps, ...props }) {
    // const getAdmin = useRef(()=>{});
    // getAdmin.current = () => (
    //     fetch('/api/admin', {method:'POST', body:JSON.stringify({token:localStorage.getItem('admin')}) })
    //     .then(res=> res.ok && res.json().then(d=> dispatch({type:types.SET_ADMIN, payload:d.token })))
    // );

    // useEffect(()=>{
    //    getAdmin.current();
    //    if(/http:/.test(window.location.href) && !/localhost/.test(window.location.href)){
    //        window.location.replace(window.location.href.replace('http','https'))
    //    }
    // },[]);
    return (<Provider store={store}>
        <Navbar/>
        <Alerts/>
        <Spinner/>
        <Sidebar/>
        <Component {...pageProps}/>
        <Footer/>
    </Provider>);
}
export default createWrapper(()=>store).withRedux(App);