import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.homologation.cliqdrive.com.br',
});

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response && error.response.status === 401) {
            console.log('Unauthorized, redirecting to login...');
        }
        return Promise.reject(error);
    }
);

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.get('/auth/profile/', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json;version=v1_web',
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        const response = await api.post('/auth/login/', 
            { email, password },
            {
                headers: {
                    'Accept': 'application/json;version=v1_web',
                    'Content-Type': 'application/json',
                }
            }
        );
        //aqui ja consertei
        return response.data.tokens.access;
    },
    signout: async () => {
        return { status: true };
    }
});
