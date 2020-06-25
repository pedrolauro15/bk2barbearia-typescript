import React, { useContext } from "react";
import {
  Container,
  ProfileCard,
  ProfiledCardHeader,
  BodyContainer,
  ProfileCardBody,
} from "./styles";
import Header from "../../components/Header";
import AuthContext from "../../contexts/authContext";

const Profile: React.FC = () => {
  const Right: React.FC = () => <button onClick={signOut}>Voltar</button>;
  const { signOut, user } = useContext(AuthContext);

  return (
    <Container>
      <Header title="Cliente" headerRight={Right} />
      <BodyContainer>
        <ProfileCard>
          <ProfiledCardHeader>Perfil</ProfiledCardHeader>
          <ProfileCardBody>
            <div>
              <label onClick={signOut}>Nome</label>
              <span>{user?.dados.nome}</span>
            </div>

            <div>
              <label>Data de nascimento</label>
              <span>
                {user?.dados.dia}/{user?.dados.mes}/{user?.dados.ano}
              </span>
            </div>

            <div>
              <label>Indicados</label>
              <span>{user?.indicacao.indicados} indicados</span>
            </div>

            <div>
              <label>Contato</label>
              <span>
                {user?.contato?.contato || "Você não possui contato cadastrado"}
              </span>
            </div>

            <div>
              <label>Ranking</label>
              <span>{user?.ranking.ranking}</span>
            </div>
          </ProfileCardBody>
        </ProfileCard>
      </BodyContainer>
    </Container>
  );
};

export default Profile;
