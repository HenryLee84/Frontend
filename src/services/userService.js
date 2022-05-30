import axios from '../services/axiosInstance';
import { apiurl } from '../tools/config';

export default {
    // 登入
    async login(data) {
        try {
            const response = await axios.post(`${apiurl}/login`, data);
            return response;
        } catch (error) {
            return error.response;
        }
    },

    // 註冊
    async register(data) {
        try {
            const response = await axios.post(`${apiurl}/user`, data);
            return response;
        } catch (error) {
            return error.response;
        }
    },

    // 取得使用者資料
    async getUser() {
        try {
            const response = await axios.get(`${apiurl}/user`);
            return response;
        } catch (error) {
            return error.response;
        }
    }
};