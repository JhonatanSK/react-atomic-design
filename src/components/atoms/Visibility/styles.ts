import styled, { css } from 'styled-components';

interface IContainerProps {
  visible: boolean;
}

export const Container = styled.div<IContainerProps>`
  ${({ visible }) => css`
    display: ${visible ? 'block' : 'none'};
  `}
`;
