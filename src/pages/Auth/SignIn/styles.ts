import styled, { css } from 'styled-components';

import { Form } from '@contexts/ReactFormContext';

const responsive = {
  container: css`
    @media (min-width: 1024px) and (min-height: 600px) {
      background-color: ${({ theme }) => theme.colors.background};
      padding: 2rem;
    }
  `,
  onboardingBox: css`
    @media (min-width: 1024px) and (min-height: 600px) {
      max-width: 1200px;
      background-color: ${({ theme }) => theme.colors.blue.dark};
      border-radius: 40px;

      flex-direction: row;
      margin: 0 auto;
      align-items: center;
      justify-content: space-evenly;
    }
  `,

  formBox: css`
    @media (min-width: 1024px) and (min-height: 600px) {
      width: 420px;
      height: 472px;

      margin-top: 0px;

      align-items: center;
      justify-content: center;

      h2 {
        display: flex;
        color: ${({ theme }) => theme.colors.blue.dark};
        font-size: 2rem;
        font-weight: bold;
      }
    }
  `,
  unform: css`
    @media (min-width: 1024px) and (min-height: 600px) {
      display: flex;
      flex-direction: column;
      width: 100%;

      align-items: center;
      justify-content: center;
      padding: 16px;

      gap: 32px;
    }
  `,
};

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100%;

    background: ${theme.colors.blue.dark};

    padding: 32px 24px;

    ${responsive.container}
  `}
`;

export const OnboardingBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  ${responsive.onboardingBox}
`;

interface IFormBoxProps {
  isAccessCode?: boolean;
}

export const FormBox = styled.div<IFormBoxProps>`
  ${({ theme, isAccessCode = false }) => css`
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 16px;
    padding: ${isAccessCode ? '24px 16px' : '56px 16px'};

    margin-top: ${isAccessCode ? '-48px' : '-72px'};

    text-align: center;

    p {
      color: ${theme.colors.gray.darker};
      font-weight: 700;
      font-size: 1.1em;

      padding: 0px 8px;
    }

    p:last-child {
      font-size: 1em;
    }

    div:last-child p {
      padding-bottom: 12px;
    }

    div span {
      font-size: 0.9em;
    }

    div:last-child span {
      color: ${theme.colors.blue.normal};
    }

    border-radius: 16px;
    background: ${theme.colors.white.default};

    h2 {
      display: none;
    }

    ${responsive.formBox}
  `}
`;

export const Unform = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 16px 0px;
  align-items: center;

  ${responsive.unform}
`;

export const BoxMessage = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 8px;
    font-size: 1.1em;

    span {
      color: ${theme.colors.blue.normal};
      font-weight: 700;
    }
  `}
`;

export const ResendCode = styled.button`
  ${({ theme }) => css`
    padding: 12px;
    font-size: 0.9em;
    background-color: transparent;
    border: none;
    color: ${theme.colors.blue.grayLight};
  `}
`;
