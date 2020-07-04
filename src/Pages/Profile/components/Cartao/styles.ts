import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  border-radius: 8px;

  > section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    min-width: 100%;
    background-color: transparent;
    border-bottom: 1px solid var(--subtitle);
    &:last-child {
      border-bottom: 0;
    }

    > div {
      display: flex;
      flex-direction: column;
      border-right: 1px solid var(--subtitle);
      > header {
        padding: 4px;
        border-bottom: 1px solid #00000033;
        color: var(--title);
        font-size: 20px;
        font-weight: bold;
      }

      > div {
        padding: 32px;

        > img {
          width: 100%;
          opacity: 0.8;
        }
      }

      &:last-child {
        border-right: 0;
      }
    }
  }
`;
