import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 48px;
    max-width: 350px;

    gap: 8px;

    background: ${theme.colors.white.default};

    color: ${theme.colors.input.normal.text};
    font-family: Roboto, Poppins, Archivo, sans-serif;

    padding: 0 4px 0 8px;

    position: relative;

    transition: all 400ms;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    box-sizing: border-box;

    input {
      height: 48px;
      width: 48px;
      text-align: center;

      border-radius: 4px;
      border: 2px solid ${theme.colors.gray.lighter};

      background: transparent;

      color: ${theme.colors.gray.light};
      font-size: 1.5em;
      font-weight: 700;

      flex: 1;

      &::placeholder {
        color: #858585;
      }

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
      }
    }
  `}
`;
