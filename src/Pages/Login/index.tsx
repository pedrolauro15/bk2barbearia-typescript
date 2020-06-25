import { Form } from "@unform/web";
import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo_preta.png";
import googlePlayAsset from "../../assets/svg/Google Play.svg";
import backgroundImageAsset from "../../assets/svg/login-background.svg";
import Input from "../../components/Form/Input";
import { Container, LeftContainer, PlayStoreButton, RightContainer } from "./styles";

export interface Data {
  usuario: string;
  senha: string;
}

const Login: React.FC = () => {
  const { push } = useHistory();

  const handleSubmit = (data: Data) => {
    console.log(data);
    push("/perfil");
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
