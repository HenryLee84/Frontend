import axios from '../services/axiosInstance';
import { apiurl } from '../tools/config';

export default {
    // 取得氣象資料
    async getWeb(params) {
        try {
            const response = await axios.get(`${apiurl}/weather`, { params });
            return response;
        } catch (error) {
            return error.response;
        }
    }
};