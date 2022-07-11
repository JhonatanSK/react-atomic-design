import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Onboarding } from '@pages/Auth/Onboarding';
import { SignIn } from '@pages/Auth/SignIn';

import { Route } from './Route';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/onboarding" component={Onboarding} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
