import apiClient from "./apiClient";
import { UserWithToken } from "../interfaces";

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

interface LoginParams {
  user: {
    email: string;
    password: string;
  };
}

interface LoginResponse {
  user: UserWithToken;
}

function register(params: RegisterParams): Promise<RegisterResponse> {
  return apiClient.post("/users", params);
}

function login(params: LoginParams): Promise<LoginResponse> {
  return apiClient.post("/users/login", params);
}

export { register, login };
