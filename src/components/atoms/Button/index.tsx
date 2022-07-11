import React, { useMemo } from 'react';
import { HiOutlinePlus, HiOutlineX, HiOutlineTrash } from 'react-icons/hi';

import { Container } from './styles';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<any>;
  outline?: boolean;
  size?: 'medium' | 'large';
  actionType?: 'add' | 'remove' | 'cancel';
  callToAction?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<IButtonProps> = ({ icon: Icon, children, ...rest }) => {
  const icons = useMemo(() => {
    return {
      add: <HiOutlinePlus size={16} />,
      remove: <HiOutlineTrash size={16} />,
      cancel: <HiOutlineX size={16} />,
    };
  }, []);

  return (
    <Container type="button" outline={rest.outline} hasIcon={!!Icon} {...rest}>
      <span>{children}</span>

      {Icon && <Icon />}

      {rest.actionType && icons[rest.actionType]}
    </Container>
  );
};

export { Button };
