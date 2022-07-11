import React, { useMemo, useState, useEffect, useCallback } from 'react';

import { setCookie, parseCookies, destroyCookie } from 'nookies';

import { AUTH_COOKIE_REFRESH_TOKEN, AUTH_COOKIE_TOKEN } from '@constants/auth';
import { IAuthRequest } from '@interfaces/IAuthentication';
import { AuthService } from '@services/apis/AuthService';

export interface IAuthContext {
  signed: boolean;
  signIn: (formData: IAuthRequest) => Promise<void>;
  signOut: () => void;
}

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

let authChannel: BroadcastChannel;

export function signOut() {
  destroyCookie(undefined, AUTH_COOKIE_TOKEN);
  destroyCookie(undefined, AUTH_COOKIE_REFRESH_TOKEN);

  authChannel.postMessage('signOut');

  window.location.href = '/login';
}

const AuthProvider: React.FC = ({ children }) => {
  const [signed, setSigned] = useState<boolean>(() => {
    const { 'application.chat.token': token } = parseCookies();

    if (token) return true;

    return false;
  });

  const signIn = useCallback(async (formData: IAuthRequest) => {
    const { data } = await AuthService.login(formData);

    setCookie(undefined, AUTH_COOKIE_TOKEN, data.token, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    setCookie(undefined, AUTH_COOKIE_REFRESH_TOKEN, data.refresh_token, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    setSigned(true);
  }, []);

  useEffect(() => {
    authChannel = new BroadcastChannel('auth');

    authChannel.onmessage = message => {
      switch (message.data) {
        case 'signOut':
          signOut();
          break;
        default:
          break;
      }
    };
  }, []);

  const value = useMemo(() => {
    return { signed, signIn, signOut };
  }, [signed, signIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
