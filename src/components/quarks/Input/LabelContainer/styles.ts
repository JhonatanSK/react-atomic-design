import styled, { css } from 'styled-components';

import { ITheme } from '@interfaces/ITheme';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isDisabled?: boolean;
}

const containerVariations = (theme: ITheme) => ({
  focused: css`
    outline-color: ${theme.colors.input.focused.border};

    color: ${theme.colors.input.focused.text};
  `,
  filled: css`
    outline-color: ${theme.colors.input.filled.border};

    color: ${theme.colors.input.filled.text};
  `,
  disabled: css`
    outline-color: ${theme.colors.input.disabled.border};

    color: ${theme.colors.input.disabled.text};
  `,
});

export const Container = styled.div.attrs({
  className: 'quarks-input-label-container',
})<IContainerProps>`
  ${({ theme, isFilled, isDisabled }) => css`
    color: ${theme.colors.blue.dark};
    font-size: 16px;
    font-family: Nunito;
    font-weight: bold;
    line-height: initial;

    position: absolute;
    left: -1px;
    top: -24px;

    transition: all 400ms;

    display: flex;
    align-items: center;
    justify-content: center;

    ${isFilled && containerVariations(theme).filled}
    ${isDisabled && containerVariations(theme).disabled}
  `}
`;
