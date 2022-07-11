import styled, { css } from 'styled-components';

import { Form } from '@contexts/ReactFormContext';

const responsive = {
  container: css`
    @media (min-width: 1024px) and (min-height: 600px) {
      background-color: ${({ theme }) => theme.colors.background.default};
      padding: 2rem;
    }
  `,
  onboardingBox: css`
    @media (min-width: 1024px) and (min-height: 600px) {
      max-width: 1200px;
      background-color: ${({ theme }) => theme.colors.background.secondary};
      border-radius: 20px;

      flex-direction: row;
      margin: 0 auto;
      align-items: center;
      justify-content: space-evenly;
    }
  `,
  hero: css`
    @media (min-width: 1024px) and (min-height: 600px) {
      svg:first-child {
        width: 60%;
        margin-bottom: 16px;
      }

      svg:last-child {
        width: 100%;
        height: 100%;
      }
    }
  `,
  formBox: css`
    @media (min-width: 1024px) and (min-height: 600px) {
      width: 420px;
      height: 472px;

      align-items: center;
      justify-content: center;
    }
  `,
  unform: css`
    @media (min-width: 1024px) and (min-height: 600px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

      align-items: center;
      justify-content: center;
      padding: 16px;

      gap: 48px;
    }
  `,
};

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100%;

    background: ${theme.colors.background.default};

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

export const Hero = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-bottom: 16px;

    color: ${theme.colors.white.default};

    svg:first-child {
      width: 35%;
    }

    ${responsive.hero}
  `}
`;

export const FormBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 24px;
    padding: 24px 16px;

    text-align: center;

    border-radius: 16px;
    background: ${theme.colors.white.default};

    ${responsive.formBox}
  `}
`;

export const Unform = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin: 16px 0px;
  align-items: center;

  button {
    margin-top: -20px;
  }

  ${responsive.unform}
`;
