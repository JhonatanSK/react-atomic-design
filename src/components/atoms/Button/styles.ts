import styled, { css } from 'styled-components';

interface IContainerProps {
  size?: 'medium' | 'large';
  actionType?: 'add' | 'remove' | 'cancel';
  hasIcon?: boolean;
  outline?: boolean;
  callToAction?: boolean;
  fullWidth?: boolean;
}

const buttonSizeVariations = {
  medium: css``,
  large: css``,
  callToAction: css`
    border-radius: 8px;
    background: #00b1ff;
  `,
};

const buttonStyleVariations = {
  add: css`
    width: 166px;
    min-width: 166px;

    border: 1px solid #00b1ff;
    background: ${`#00B1FF66`};

    &:hover {
      background: ${`#00B1FFFF`};
    }

    svg {
      display: none;
    }
  `,
  remove: css`
    width: 166px;
    min-width: 166px;

    border: 1px solid #eb7777;
    background: ${`#eb777766`};

    &:hover {
      background: ${`#eb7777FF`};
    }

    svg {
      display: none;
    }
  `,
  cancel: css`
    width: 166px;
    min-width: 166px;

    border: 1px solid #6c87bc;
    background: ${`#6c87bc66`};

    &:hover {
      background: ${`#6c87bcFF`};
    }

    svg {
      display: none;
    }
  `,
};

export const Container = styled.button<IContainerProps>`
  ${({
    theme,
    size,
    outline,
    actionType,
    callToAction,
    hasIcon,
    fullWidth,
  }) => css`
    width: 100%;
    max-width: ${fullWidth ? 'initial' : 'fit-content'};
    min-height: 42px;

    border: ${outline ? `1px solid ${theme.colors.blue.normal}` : 'none'};
    border-radius: 40px;
    background: ${outline ? 'transparent' : theme.colors.blue.normal};

    color: ${outline ? theme.colors.blue.normal : theme.colors.white.default};
    font-size: 16px;
    font-family: Nunito, sans-serif;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;

    background-clip: text;
    text-fill-color: transparent;

    padding: 14px 32px;

    user-select: none;
    cursor: pointer;

    transition: border 400ms, background 300ms, transform 200ms;

    display: flex;
    align-items: center;
    justify-content: ${hasIcon ? 'space-between' : 'center'};

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.96);
    }

    ${callToAction && buttonSizeVariations.callToAction}
    ${size && buttonSizeVariations[size]}
    ${actionType && buttonStyleVariations[actionType]}

    svg {
      width: 20px;
      min-width: 20px;
      height: 20px;
      min-height: 20px;

      margin-left: 12px;
    }
  `}
`;
