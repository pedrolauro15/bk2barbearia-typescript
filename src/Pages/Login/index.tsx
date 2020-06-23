import React, { FormEvent } from "react";
import { MdLockOutline, MdPersonOutline } from "react-icons/md";
import logo from "../../assets/logo_preta.png";
import { Box, Button, Container, FormControl, Input } from "./styles";
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const { push } = useHistory();
  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    push('/perfil');
  }

  return (
    <Container>
      <Box>
        <img src={logo} alt="logo" />
        <form onSubmit={handleLogin}>
          <FormControl>
            <MdPersonOutline />
            <Input required placeholder="Usuário" />
          </FormControl>
          <FormControl>
            <MdLockOutline />
            <Input required placeholder="Senha" type="password" />
          </FormControl>
          <Button type="submit">Entrar</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
