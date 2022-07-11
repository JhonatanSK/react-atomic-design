export interface IAuthRequest {
  email: string;
}

export interface IAuthResponse {
  token: string;
  refresh_token: string;
}
