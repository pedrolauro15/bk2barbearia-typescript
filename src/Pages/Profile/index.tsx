import React, { useContext } from 'react';
import Header from '../../components/Header';
import AuthContext from '../../contexts/authContext';
import { BodyContainer, Container, ProfileCard, ProfileCardBody, ProfiledCardHeader } from './styles';

const Profile: React.FC = () => {
	const { signOut, user } = useContext(AuthContext);

	return (
		<Container>
			<Header title="Cliente" />
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
								{user?.contato?.contato || 'Você não possui contato cadastrado'}
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
