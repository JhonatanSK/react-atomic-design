import styled, { css } from 'styled-components';

export const Container = styled.span.attrs({
  className: 'quarks-input-error-container',
})`
  ${({ theme }) => css`
    color: ${theme.colors.input.errored.border};
    font-size: 14px;
    font-weight: normal;

    position: absolute;
    bottom: -24px;
    left: 0;
  `}
`;
