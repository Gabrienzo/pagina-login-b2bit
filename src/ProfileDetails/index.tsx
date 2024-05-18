import styled from "styled-components";
import ProfileData from "./ProfileData";

const PictureHeader = styled.h3`
    font-family: NunitoRegular;
    color: #2F2F2F;
    font-size: 12px;
`

const ProfilePicture = styled.img`
    width: 75px;
    height: 75px;
`
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5%;
`
const PictureFrame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

interface ProfileDetailsProps {
    picture?: string;
    name?: string;
    email?: string;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({picture, name, email}) => {
    return (
        <ProfileContainer>
            <PictureFrame>
                <PictureHeader>Profile Picture</PictureHeader>
                <ProfilePicture src={picture}/>
            </PictureFrame>
            <ProfileData name="Name" data={name}/>
            <ProfileData name="E-mail" data={email}/>   
        </ProfileContainer>
    )
};

export default ProfileDetails