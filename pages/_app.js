import '../styles/index.css';
import {Navbar, Footer, Alerts, Spinner, Sidebar, Layout} from '../components';
import { useEffect, useReducer, useRef, useState } from 'react';
//#region redux import
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from '../redux/store'
//#endregion

function App({ Component, pageProps, ...props }) {
    return (<Provider store={store}>
        <Navbar/>
        <Alerts/>
        <Spinner/>
        <Sidebar/>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
        <Footer/>
    </Provider>);
}
export default createWrapper(()=>store).withRedux(App);