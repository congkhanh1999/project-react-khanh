import axios from "axios";
import queryString from 'query-string'
import firebase from "firebase/compat/app";

const getFirebaseToken = () => {
    const currentUser = firebase.auth().currentUser
    if (currentUser) {
        return currentUser.getIdToken();
    }
    const hasRememberAccount = localStorage.getItem('firebaseui::rememberedAccounts')
    if (!hasRememberAccount) {
        return null;
    }

    return new Promise((resolve, reject) => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {

                reject(null);
            }

            const token = await user.getIdToken()
            resolve(token)

        });

        unregisterAuthObserver();
    })
}

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'content_type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.request.use(async (config) => {
    // const currentUser = firebase.auth().currentUser
    // if (currentUser) {
    //     const token = await currentUser.getIdToken();
    //     config.headers.Authorization = `Bearer${token}`
    // }

    const token = await getFirebaseToken()
    if (token) {
        console.log('set token', token)
        console.log(config)
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})


axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }
    return response;

}, (error) => {
    throw error
})

export default axiosClient;