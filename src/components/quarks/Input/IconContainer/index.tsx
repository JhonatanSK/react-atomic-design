import React from 'react';
import { IconBaseProps } from 'react-icons';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Container } from './styles';

interface IIconProps {
  icon?: React.ComponentType<IconBaseProps>;
  type?: string;
  isVisible?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

const IconContainer: React.FC<IIconProps> = ({
  icon: Icon,
  type,
  isVisible,
  isDisabled,
  onClick,
}) => {
  if (type === 'password') {
    return (
      <Container type="button" isDisabled={isDisabled} onClick={onClick}>
        {isVisible ? <FiEye size={24} /> : <FiEyeOff size={24} />}
      </Container>
    );
  }

  if (!Icon) return null;

  return (
    <Container type="button" isDisabled={isDisabled}>
      <Icon size={24} />
    </Container>
  );
};

export { IconContainer };
