import { Form } from "@unform/web";
import React, { useContext } from "react";
import logo from "../../assets/logo_preta.png";
import googlePlayAsset from "../../assets/svg/Google Play.svg";
import backgroundImageAsset from "../../assets/svg/login-background.svg";
import Input from "../../components/Form/Input";
import {
  Container,
  LeftContainer,
  PlayStoreButton,
  RightContainer,
} from "./styles";
import AuthContext from "../../contexts/authContext";

export interface Data {
  usuario: string;
  senha: string;
}

const Login: React.FC = () => {
  const { signIn } = useContext(AuthContext);

  const handleSubmit = async (data: Data) => {
    try {
     await signIn(data.usuario, data.senha);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt="logo" />
        <h1>Faça seu login</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            name="usuario"
            placeholder="Usuário"
            required
            autoComplete="off"
            autoFocus
          />
          <Input name="senha" placeholder="Senha" type="password" required />
          <button type="submit">Entrar</button>
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
    </Container>
  );
};

export default Login;
