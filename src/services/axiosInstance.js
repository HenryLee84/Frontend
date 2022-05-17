import axios from 'axios';
import router from '../router';

const instance = axios.create();

instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    // 取到token
    if (token)
        config.headers.Authorization = `Bearer ${token}`;
    return config;
}, error => Promise.reject(error));

instance.interceptors.response.use(config => config,
    error => {
    const { response } = error;

    // 回傳為401，跳轉至登入頁
    if (response?.status === 401) {
        router.replace({ name: 'login', params: { redirect: router.currentRoute.value.fullPath } });
    }

    return Promise.reject(error);
});

export default instance;