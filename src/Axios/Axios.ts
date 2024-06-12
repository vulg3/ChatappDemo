import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const baseURL = 'http://192.168.100.54:3000/';

const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: baseURL
    });
    axiosInstance.interceptors.request.use(
        async (config: any) => {
            const token = await AsyncStorage.getItem('token');
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;