import React from 'react';

import { Container, Main } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
};

export { DefaultLayout };
