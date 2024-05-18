import styled from "styled-components"
import ProfileHeader from "../ProfileHeader"
import ProfileDetails from "../ProfileDetails"
import { useContext } from "react"
import { AuthContext } from "../contexts/Auth/AuthContext"

const ProfileContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ProfilePage = styled.main`
  width: 438px;
  height: 334px;
  background-color: #FFFFFF;
  border-radius: 18px; 

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export default function Profile() {
  const auth = useContext(AuthContext);

  return (
      <ProfileContainer>
        <ProfileHeader/>
        <ProfilePage>
            <ProfileDetails picture={auth.user?.avatar.high} name={auth.user?.name} email={auth.user?.email}/>
        </ProfilePage>
      </ProfileContainer>
  )
}