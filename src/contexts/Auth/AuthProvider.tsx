import { useEffect, useState, useCallback } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    const validateToken = useCallback(async () => {
        const storageToken = localStorage.getItem('accessToken');
        if (storageToken) {
            const data = await api.validateToken(storageToken);
            if (data) {
                setUser(data);
            }
        }
        //aqui parou de bugar, FALTA POUCO
    }, [api]);

    useEffect(() => {
        validateToken();
    }, [validateToken]);

    const signin = async (email: string, password: string) => {
        try {
            const dataToken = await api.signin(email, password);
            const dataUser = await api.validateToken(dataToken);

            if (dataUser && dataToken) {
                setUser(dataUser);
                localStorage.setItem('dataUser', JSON.stringify(dataUser));
                setAccessToken(dataToken);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    };

    const signout = async () => {
        setAccessToken('');
        setUser(null);
        localStorage.removeItem('dataUser');
        localStorage.removeItem('accessToken');
        await api.signout();
    };

    const setAccessToken = (token: string) => {
        localStorage.setItem('accessToken', token);
    };

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};
