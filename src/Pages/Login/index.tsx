import React from "react";
import { MdLockOutline, MdPersonOutline } from "react-icons/md";
import logo from "../../assets/logo_preta.png";
import { Box, Button, Container, FormControl, Input } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <Box>
        <img src={logo} alt="logo" />
        <form action="">
          <FormControl>
            <MdPersonOutline />
            <Input placeholder="Usuário" />
          </FormControl>
          <FormControl>
            <MdLockOutline />
            <Input placeholder="Senha" type="password" />
          </FormControl>
          <Button type="submit">Entrar</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
