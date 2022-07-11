import styled, { css } from 'styled-components';

import { InputContainer } from '@components/quarks';
import { IFeedbackProps } from '@interfaces/IInput';

type IContainerProps = IFeedbackProps;

export const Container = styled(InputContainer)<IContainerProps>`
  ${() => css``}
`;
