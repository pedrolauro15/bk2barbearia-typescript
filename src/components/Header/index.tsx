import React from 'react';
import { Container } from './styles';

export interface Props {
  title?: string;
  headerRight?: React.FC; 
}

const Header: React.FC<Props> = ({ title, headerRight }) => {
  return (
    <Container>
      <div>{title ?? title}</div>
      {
        headerRight ?? headerRight
      }
    </Container>
  );
}

export default Header;