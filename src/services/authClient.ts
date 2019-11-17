import apiClient from './apiClient';

interface RegisterParams {
    username: string,
    email: string,
    password: string,
}

export function register(params: RegisterParams) {
    return apiClient.post('/users', params);
}