import apiClient from "./apiClient";

interface RegisterParams {
  user: {
    username: string;
    email: string;
    password: string;
  };
}

export function register(params: RegisterParams) {
  return Promise.resolve({
    user: {
      bio: null,
      createdAt: "2019-11-17T14:31:18.899Z",
      email: "samgold172@gmail.com",
      id: 75571,
      image: null,
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzU1NzEsInVzZXJuYW1lIjoic2FtZ29sZDE3MiIsImV4cCI6MTU3OTE4NTA3OH0.72zgKLYwkvfO2pQw2ENoD2iJRsqXrbEGPcBjhOaHmnA",
      updatedAt: "2019-11-17T14:31:18.903Z",
      username: "samgold172"
    }
  });
  // return apiClient.post('/users', params);
}
