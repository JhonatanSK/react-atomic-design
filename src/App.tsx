import React from 'react';

import { GlobalStyle } from '@styles/global';

import { AppProvider } from './contexts';
import { Routes } from './routes';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />

      <GlobalStyle />
    </AppProvider>
  );
};

export { App };
