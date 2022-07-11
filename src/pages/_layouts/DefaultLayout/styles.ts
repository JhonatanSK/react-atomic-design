import styled, { css } from 'styled-components';

export const Container = styled.div.attrs({
  className: 'default-layout-container',
})`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const Main = styled.main.attrs({
  className: 'default-layout-main',
})`
  ${() => css`
    width: calc(100% - 0px);

    transition: all 400ms;
  `}
`;
