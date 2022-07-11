import { AxiosResponse } from 'axios';

import { IAuthRequest, IAuthResponse } from '@interfaces/IAuthentication';
import { api } from '@services/api';

class AuthService {
  async login({ email }: IAuthRequest): Promise<AxiosResponse<IAuthResponse>> {
    const response = await api.post<IAuthResponse>('/auth', { email });

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    return response;
  }
}

const INSTANCE = new AuthService();

export { INSTANCE as AuthService };
