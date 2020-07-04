import styled from "styled-components";

export const Container = styled.div``;

export const InfoConteiner = styled.div`
  display: flex;
  padding: 32px;
`;

export const ProfileContainer = styled.section`
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 0 10px #00000066;
  max-width: 50%;

  > img {
    width: 180px;
  }
`;

export const UserInfo = styled.div`
  > h1 {
    font-size: 32px;
    font-weight: bold;
    color: var(--title);
    margin-bottom: 8px;
    text-transform: lowercase !important;

    &::first-letter {
      text-transform: uppercase;
    }
  }
  > h2 {
    font-size: 28px;
    color: var(--title);
    font-weight: 300;
    text-transform: lowercase !important;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    margin-top: 16px;

    > fieldset {
      display: flex;
      flex-direction: column;
      > label {
        font-weight: bold;
        font-size: 20px;
        color: var(--title);
      }

      > span {
        font-weight: 300;
        font-size: 24px;
        color: #222;
      }
    }
  }
`;

export const CardContainer = styled.section`
  background-color: blue;
`;
