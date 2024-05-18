import styled from "styled-components"
import { AuthContext } from "../contexts/Auth/AuthContext"
import { useContext } from "react"
import React from "react"

const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const LogoutButton = styled.button`
    width: 272px;
    height: 44px;
    background-color: #02274F;
    border-radius: 6.33px;
    font-family: NunitoBold;
    color: #FFFFFF;
    font-size: 16px;
    margin-right: 30px;
`

const ProfileHeader: React.FC = () => {
    const auth = useContext(AuthContext);

    const handleLogout = () => {
        auth.signout();
        window.location.href = window.location.href;
    }

    return (
        <HeaderContainer>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </HeaderContainer>
    )
}

export default ProfileHeader