import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.homologation.cliqdrive.com.br',
});

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
        //tudo certo aqui ta mandando o token
        return response.data.tokens.access;
    },
    signout: async () => {
        return { status: true };
    }
});
