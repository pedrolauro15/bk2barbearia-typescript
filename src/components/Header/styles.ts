import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  padding: 24px;
  font-size: 24px;
  font-weight: bold;

  > div {
    color: #FFF;
  }

  > ul {
    display: flex;
    > li {
      color: #FFF;
      font-size: 18px;
      display: flex;
      align-items: center;
      cursor: pointer;

      > svg {
        font-size: 20px;
        margin-left: 4px;
      }

      &:hover {
        color: #DDD;
      }
    }
  }
`;
