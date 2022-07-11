import axios, { AxiosError } from 'axios';
import { parseCookies, setCookie } from 'nookies';

import { AUTH_COOKIE_REFRESH_TOKEN, AUTH_COOKIE_TOKEN } from '@constants/auth';
import { signOut } from '@contexts/ReactAuthContext';

type IFailedRequestsQueue = {
  onSuccess: (token: string) => void;
  onFailure: (err: AxiosError) => void;
};

let cookies = parseCookies();
let isRefreshing = false;
let failedRequestsQueue: IFailedRequestsQueue[] = [];

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: `Bearer ${cookies[`${AUTH_COOKIE_TOKEN}`]}` },
});

api.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (error.response.data?.code === 'token.expired') {
        cookies = parseCookies();

        const refresh_token = cookies[`${AUTH_COOKIE_REFRESH_TOKEN}`];
        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;

          api
            .put('/auth/refresh_token', undefined, {
              headers: { Authorization: `Bearer ${refresh_token}` },
            })
            .then(response => {
              if (response) {
                const { token: t, refresh_token: rToken } = response.data;

                setCookie(undefined, AUTH_COOKIE_TOKEN, t, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: '/',
                });

                setCookie(undefined, AUTH_COOKIE_REFRESH_TOKEN, rToken, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: '/',
                });

                api.defaults.headers.Authorization = `Bearer ${t}`;

                failedRequestsQueue.forEach(request => request.onSuccess(t));
                failedRequestsQueue = [];
              }

              // console..log('Refresh Token atualizado!');
            })
            .catch(err => {
              signOut();

              // console..log('Refresh Token revogado!');

              failedRequestsQueue.forEach(request => request.onFailure(err));
              failedRequestsQueue = [];
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers.Authorization = `Bearer ${token}`;

              resolve(api(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      }

      // console..log('Refresh Token inválido!');

      if (error.response.data.code !== 'wrong') signOut();
    }

    return Promise.reject(error);
  },
);

export { api };
