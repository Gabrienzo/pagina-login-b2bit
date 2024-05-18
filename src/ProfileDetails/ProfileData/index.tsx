import styled from "styled-components";

const DataName = styled.h3`
    font-family: NunitoRegular;
    color: #262626;
    font-size: 14px;
`

const DataBackground = styled.div`
    height: 44px;
    width: auto;
    border-radius: 8px;
    border: none;
    background-color: #F4F4F4;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    p {
        color: #262626;
        font-family: 'NunitoRegular';
        font-size: 12px;
        padding-left: 15px;  
    }
    
`;

interface ProfileDataProps {
    name: string;
    data?: string;
}

const ProfileData: React.FC<ProfileDataProps> = ({name, data}) => {
    return (
        <div>
            <DataName>Your <strong>{name}</strong></DataName>
            <DataBackground>
                <p>{data}</p>
            </DataBackground>
        </div>
    )
}

export default ProfileData