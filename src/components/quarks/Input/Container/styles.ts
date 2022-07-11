import styled, { css } from 'styled-components';

import { IFeedbackProps } from '@interfaces/IInput';
import { ITheme } from '@interfaces/ITheme';

type IContainerProps = IFeedbackProps;

const containerVariations = (theme: ITheme) => ({
  errored: css`
    outline-color: ${theme.colors.input.errored.border};

    transition: none;
  `,
  focused: css`
    outline-color: ${theme.colors.input.focused.border};
    box-shadow: 0px 2px 8px rgba(27, 32, 60, 0.2);
  `,
  filled: css`
    outline-color: ${theme.colors.input.filled.border};
  `,
  disabled: css`
    outline-color: ${theme.colors.input.disabled.border};
    background: transparent;

    color: ${theme.colors.input.disabled.text};

    input {
      color: ${theme.colors.input.disabled.text};

      user-select: none;

      &::placeholder {
        color: ${theme.colors.input.disabled.text};
      }
    }
  `,
});

export const Container = styled.div<IContainerProps>`
  ${({ theme, isErrored, isFocused, isFilled, disabled }) => css`
    width: 100%;
    height: 36px;

    border-radius: 2px;
    outline: 1.5px solid ${theme.colors.input.normal.border};
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
      height: 100%;

      border: 0;
      background: transparent;
      outline: 0;

      color: ${theme.colors.input.normal.text};
      font-size: 14px;

      flex: 1;

      &::placeholder {
        color: #858585;
      }

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
      }
    }

    ${isFilled && containerVariations(theme).filled}
    ${isFocused && containerVariations(theme).focused}
    ${disabled && containerVariations(theme).disabled}
    ${isErrored && containerVariations(theme).errored}
  `}
`;
