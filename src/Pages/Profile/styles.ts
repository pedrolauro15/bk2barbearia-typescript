import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const BodyContainer = styled.div`
  padding: 64px 15%;

`;

export const ProfileCard = styled.div`
  background-color: #FFF;
  box-shadow: 10px, 10px, 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export const ProfiledCardHeader = styled.header`
  background-color: #333;
  color: #FFF;
  font-weight: bold;
  padding: 16px;
  font-size: 16px;
`;

export const ProfileCardBody = styled.div`
  padding: 32px 10%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(355px, 1fr));
  grid-gap: 16px 0;

  > div {
    display: flex;
    flex-direction: column;
  }

  >div label {
    font-weight: bold;
    color: #555;
    margin-bottom: 4px;
  }
`;