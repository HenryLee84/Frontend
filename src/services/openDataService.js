import axios from 'axios';

export default {
    // 取得氣象資料
    async getWeb(params) {
        try {
            const response = await axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001', { params });
            return response;
        } catch (error) {
            return error.response;
        }
    }
};