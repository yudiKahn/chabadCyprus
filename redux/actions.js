import * as T from './types';

export const setLang = (lang) => ({
    type:T.SET_LANG,
    payload:lang
});

export const addAlert = (alertObj) => ({
    type:T.SET_ALERT,
    payload:alertObj
});

export const clearAlert = (index) => ({
    type:T.CLEAR_ALERT,
    payload: index
});

export const setLoading = (flag) => ({
    type:T.SET_LOADING,
    payload:flag
});

export const setAdmin = (admin) => admin === null ? ({
    type: T.CLEAR_ADMIN
}) : ({
    type:T.SET_ADMIN,
    payload:admin
});
