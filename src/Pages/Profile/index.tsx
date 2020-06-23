import React from 'react';
import { Container, ProfileCard, ProfiledCardHeader, BodyContainer, ProfileCardBody } from './styles';
import Header from '../../components/Header';

const Profile: React.FC = () => {
  return (
    <Container>
      <Header title="Cliente" />
      <BodyContainer>
        <ProfileCard>
          <ProfiledCardHeader>Perfil</ProfiledCardHeader>
          <ProfileCardBody>
            <div>
              <label>Nome</label>
              <span>Enaelson Pedro de Sousa Messias</span>
            </div>

            <div>
              <label>Data de nascimento</label>
              <span>29/01/2000</span>
            </div>

            <div>
              <label>Indicados</label>
              <span>99 indicações</span>
            </div>

            <div>
              <label>Contato</label>
              <span>(85) 98869-4099</span>
            </div>

            <div>
              <label>Ranking</label>
              <span>1º lugar em todos os cortes</span>
            </div>
          </ProfileCardBody>
        </ProfileCard>
      </BodyContainer>
    </Container>
  );
}

export default Profile;