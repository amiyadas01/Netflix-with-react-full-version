import axios from 'axios';
import conf from '../conf/conf';

const api = axios.create({
    baseURL: conf.apiurl, 
    headers:{
        accept: 'application/json',
        Authorization: `Bearer ${conf.apitoken}`
    }
});

export const fetchMovies = async (endpoint, params = {}) => {
    try {
        const response = await api.get(endpoint, { params : { ...params,api_key: conf.apikey } });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export default api;