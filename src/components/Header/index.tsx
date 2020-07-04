import React, { useContext } from 'react';
import { Container } from './styles';
import { FiLogOut } from 'react-icons/fi';
import AuthContext from '../../contexts/authContext';


export interface Props {
  title?: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <div>{title ?? title}</div>
      <ul>
        <li onClick={signOut}>Sair <FiLogOut/></li>
      </ul>
    </Container>
  );
}

export default Header;