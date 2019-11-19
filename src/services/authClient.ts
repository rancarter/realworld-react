import apiClient from "./apiClient";
import { UserWithToken } from "../types";

interface RegisterParams {
  user: {
    username: string;
    email: string;
    password: string;
  };
}

interface RegisterResponse {
  user: UserWithToken;
}

interface LoginResponse {
  user: UserWithToken;
}

interface LoginParams {
  user: {
    email: string;
    password: string;
  };
}

export function register(params: RegisterParams): Promise<RegisterResponse> {
  return apiClient.post('/users', params);
}

export function login(params: LoginParams): Promise<LoginResponse> {
  return apiClient.post("/users/login", params);
}
