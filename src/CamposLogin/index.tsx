import styled from "styled-components"
import { useContext, useState } from "react"
import { AuthContext } from "../contexts/Auth/AuthContext"
import { useNavigate } from "react-router-dom"

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px;
`

const CampoLabel = styled.label`
    font-family: 'NunitoBold';
    size: 18px;
    margin: 5px 0;
`

const LoginButton = styled.button`
    width: 385px;
    height: 54px;
    margin: 25px 0 40px;
    background-color: #02274F;
    color: #FFFFFF;
    font-family: 'NunitoRegular';
    font-size: 18px;
    border: none;
    border-radius: 9px;
    cursor: pointer;
`
const CampoTexto = styled.input`
    height: 54px;
    border-radius: 9px;
    border: none;
    background-color: #f1f1f1;
    box-sizing: border-box;
    width: 385px;
    color: #999999;
    font-family: 'NunitoRegular';
    font-size: 16px;
    padding-left: 15px;
`

const ErrorMessage = styled.p`
    color: red;
    font-family: 'NunitoBold';
    margin: 5px 0;
`

const CamposLogin = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        console.log(email + " " + password);
        if (email !== '' && password !== '') {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/profile');
                window.location.href = window.location.href;
            } else {
                setError("Falha no login. Verifique se e-mail e senha estão corretos");
            }
        } else {
            setError("Não deixe nenhum campo vazio!");
        }
    };

    return (
        <LoginContainer>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <CampoLabel htmlFor="email">E-mail</CampoLabel>
                <CampoTexto 
                    type="email" 
                    placeholder="@gmail.com" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                <CampoLabel htmlFor="senha">Password</CampoLabel>
                <CampoTexto 
                    type="password" 
                    placeholder="●●●●●●●●●●" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                <LoginButton onClick={handleLogin}>Sign In</LoginButton>
            
        </LoginContainer>
    )
}

export default CamposLogin