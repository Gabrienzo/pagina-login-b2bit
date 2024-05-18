import styled from "styled-components"
import LogoImagem from "../assets/B2Bit-Logo.png"
import CamposLogin from "../CamposLogin"

const LoginPage = styled.main`
  width: 438px;
  height: 534px;
  background-color: #FFFFFF;
  border-radius: 18px; 

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5%;
  box-shadow: 0 0 64px rgba(0, 0, 0, 0.25);
`

const LogoB2bit = styled.img`
  width: 295px;
  height: 116px;
  margin: 55px 72px;
`

export default function Login() {

  return (
    <LoginPage>
      <LogoB2bit src={LogoImagem}  alt='logo da b2bit, contem o nome da empresa nas cores amarelo e azul escuro'/>
      <CamposLogin/>
    </LoginPage>
  )
}