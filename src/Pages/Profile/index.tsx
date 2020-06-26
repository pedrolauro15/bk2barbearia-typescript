import React, { useContext } from "react";
import Header from "../../components/Header";
import AuthContext from "../../contexts/authContext";
import profilePhoto from "../../assets/svg/profile-logo.svg";
import {
  Container,
  InfoConteiner,
  ProfileContainer,
  CardContainer,
} from "./styles";

const Profile: React.FC = () => {
  const { signOut, user } = useContext(AuthContext);

  return (
    <Container>
      <Header title="BK2 Barbearia" />
      <InfoConteiner>
        <ProfileContainer>
          <img src={profilePhoto} alt="teste" width={500}/>
        </ProfileContainer>
        <CardContainer></CardContainer>
      </InfoConteiner>
    </Container>
  );
};

export default Profile;
