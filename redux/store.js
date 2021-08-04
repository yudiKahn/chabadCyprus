import {createStore} from 'redux';
import * as T from './types';

const initialState = {
    admin: (typeof window === 'undefined' ? null:localStorage.getItem('admin')) || null,
    alerts: [],
    lang: 'he',
    loading: false,
    adminHeader:{'x-admin-header': typeof window === 'undefined' ? "":localStorage.getItem('admin')}
}

function reducer(state=initialState, action){
    const {type, payload} = action;
    switch (type){
        case T.SET_ADMIN:
            localStorage.setItem('admin', payload);
            return {...state, admin: payload};
        case T.CLEAR_ADMIN:
            localStorage.removeItem('admin');
            return {...state, admin:null };
        case T.SET_LANG:
            return {...state, lang: payload};
        case T.SET_ALERT:
            return {...state, alerts:[...state.alerts, payload]};
        case T.CLEAR_ALERT:
            return {...state, alerts: state.alerts.filter((v,i)=> i !== payload) };
        case T.SET_LOADING:
            return {...state, loading: payload}
        default:
            return state;
    }
}

const store = createStore(reducer, initialState);
export default store;