import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import React, { useContext, useState, useEffect, useRef } from 'react';
import { RingLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import logo from '../../assets/logo_preta.png';
import googlePlayAsset from '../../assets/svg/Google Play.svg';
import backgroundImageAsset from '../../assets/svg/login-background.svg';
import Input from '../../components/Form/Input';
import AuthContext from '../../contexts/authContext';
import { Container, LeftContainer, PlayStoreButton, RightContainer } from './styles';

export interface Data {
	usuario: string;
	senha: string;
}

const Login: React.FC = () => {
	const { signIn } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const formRef = useRef<FormHandles>(null);

	useEffect(() => {
		const userData = localStorage.getItem('@bk2barbearia_user_data');
		if(userData){
			const data = JSON.parse(userData);
			formRef.current?.setData(data);
		}
	}, [])

	const handleSubmit = async (data: Data) => {
		try {
			setLoading(true);
			await signIn(data.usuario, data.senha);
			localStorage.setItem('@bk2barbearia_user_data', JSON.stringify(data));
		} catch (error) {
			const err = { error };
			toast.error(err.error.response.data.error, {
				position: 'bottom-center',
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
		setLoading(false);
	};

	return (
		<Container>
			<LeftContainer>
				<img src={logo} alt="logo" />
				<h1>Faça seu login</h1>
				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input
						name="usuario"
						placeholder="Usuário"
						required
						autoComplete="off"
						autoFocus
					/>
					<Input
						name="senha"
						placeholder="Senha"
						type="password"
						required
						autoComplete="off"
					/>
					<button disabled={loading} type="submit">
						{loading ? <RingLoader size={30} color="#FFF" /> : 'Entrar'}
					</button>
				</Form>
			</LeftContainer>
			<RightContainer>
				<img src={backgroundImageAsset} alt="barbeiro" />
			</RightContainer>
			<a href="https://play.google.com/store/apps/details?id=com.BK2.Bk2Barbearia">
				<PlayStoreButton>
					<img src={googlePlayAsset} alt="play store" />
				</PlayStoreButton>
			</a>
			<ToastContainer />
		</Container>
	);
};

export default Login;
