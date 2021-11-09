import '../styles/index.css';
import {Navbar, Footer, Alerts, Spinner, Sidebar, Layout} from '../components';
import React from 'react';
import HttpsRedirect from 'react-https-redirect';

//#region redux import
import {connect, Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from '../redux/store'
//#endregion

function App({ Component, pageProps,popup, ...props }) {
    return (<Provider store={store}>
        <HttpsRedirect>
        <Navbar/>
        <Alerts/> 
        <Spinner/>
        <Sidebar/>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
        <Footer/>
        </HttpsRedirect>
    </Provider>);
}
export default createWrapper(()=>store).withRedux(connect(s=>({popup:s.popup}))(App));