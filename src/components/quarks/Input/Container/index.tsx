import React from 'react';

import { IFeedbackProps } from '@interfaces/IInput';

import { Container } from './styles';

interface IContainerProps extends IFeedbackProps {
  cRef?: React.RefObject<HTMLDivElement>;
  className?: string;
}

const InputContainer: React.FC<IContainerProps> = ({
  cRef,
  className,
  children,
  ...rest
}) => {
  return (
    <Container ref={cRef} {...rest} className={className}>
      {children}
    </Container>
  );
};

export { InputContainer };
