import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-width: 375px;
`;

export const Box = styled.div`
  padding: 32px 64px;
  min-width: 375px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px #888888aa;
  > form {
    display: flex;
    flex-direction: column;
  }

  > img {
    width: 300px;
  }
`;

export const FormControl = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-bottom: 12px;

  > svg {
    position: absolute;
    font-size: 28px;
    margin-left: 10px;
    color: #999;
  }
`;

export const Input = styled.input`
  border: 1px solid #cccccc;
  width: 100%;
  padding: 20px 37px;
  border-radius: 8px;
  transition: all 0.3s;
  font-size: 16px;

  ::placeholder {
    color: #aaaaaa;
    font-size: 16px;
  }

  &:hover,
  &:focus {
    border: 2px solid #000;
    padding: 19px 38px;
  }
`;

export const Button = styled.button`
  padding: 12px 32px;
  background-color: var(--primary);
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  align-self: flex-end;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${shade(0.2, "#DD4455")};
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;
