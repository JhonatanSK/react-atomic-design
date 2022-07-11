import React from 'react';

import { Container } from './styles';

export interface IVisibilityProps {
  visible: boolean;
}

const Visibility: React.FC<IVisibilityProps> = ({
  children,
  visible = true,
}) => {
  return <Container visible={visible}>{children}</Container>;
};

export { Visibility };
