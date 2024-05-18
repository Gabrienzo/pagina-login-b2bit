import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('accessToken');
            if(storageData) {
                const data = await api.validateToken(storageData);
                if(data){
                    setUser(data);
                }
            }
        }
        validateToken();
    }, [api]);

    const signin = async (email: string, password: string) => {
        try {
            const dataToken = await api.signin(email, password);
            const dataUser = await api.validateToken(dataToken);
    
            if (dataUser && dataToken) {
                setUser(dataUser);
                localStorage.setItem('dataUser', JSON.stringify(dataUser));
                setAcessToken(dataToken);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    };

    const signout = async () => {
        setAcessToken('');
        setUser(null);
        localStorage.removeItem('dataUser');
        await api.signout();
    }

    const setAcessToken = (token: string) => {
        localStorage.setItem('accessToken', token);
    }


    return (
        <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}