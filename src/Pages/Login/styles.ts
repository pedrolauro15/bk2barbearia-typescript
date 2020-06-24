import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 32px;
  padding: 164px;
  max-height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: center;
    justify-content: center;
    padding: 32px;
    overflow: scroll;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    width: 350px;
    margin-bottom: 64px;
  }

  > form {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
  }

  > form > input {
    padding: 16px;
    border-radius: 8px;
    max-width: 400px;
    margin-bottom: 16px;
    font-size: 18px;

    ::placeholder {
      font-size: 18px;
    }
  }

  > form > button {
    background-color: var(--primary);
    border-radius: 8px;
    color: #fff;
    max-width: 400px;
    font-size: 18px;
    font-weight: bold;
    padding: 16px;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      background-color: ${shade(0.25, "#DD4455")};
    }

    &:active {
      background-color: ${shade(0.15, "#DD4455")};
    }
  }

  @media (max-width: 768px) {
    > h1 {
      margin-left: 16px;
    }

    > img {
      margin-bottom: 16px;
    }

    > form {
      width: 100%;
      padding: 16px;
      margin-top: 12px;
    }

    form > input,
    button {
      width: 100%;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;

  > img {
    width: 90%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PlayStoreButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    background-color: #222;
    height: 75px;
    padding: 16px 32px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: all 0.3s;

    > span {
      color: #fff;
      font-weight: bold;
    }

    > section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 12px;
    }

    > section > span {
      color: #fff;
      margin-bottom: 2px;
      font-size: 16px;
      font-weight: 500;
    }

    > section > h6 {
      color: #fff;
      text-transform: capitalize;
      font-size: 24px;
    }

    > img {
      height: 100%;
    }

    &:active {
      background: #444;
    }
  }
`;
