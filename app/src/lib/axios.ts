import axios from 'axios';

if (!$API_URL) {
   throw new Error('VITE_API_URL is not defined in .env');
}

export const axiosConfig = axios.create({
   withCredentials: true,
   baseURL: $API_URL,
   timeout: 3000,
   headers: {
      'Content-Type': 'application/json',
   },
});

export default axiosConfig;
