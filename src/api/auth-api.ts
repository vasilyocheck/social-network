import axios from "axios";
import { ValuesType } from "../components/Login/login-utils";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
});

export type AuthDataType = {
  id: number;
  email: string;
  login: string;
};

type ResponseType = {
  resultCode: number;
  messages: string[];
  data: AuthDataType;
};

export const authAPI = {
  me() {
    return instance.get<ResponseType>(`auth/me`);
  },
  login(data: ValuesType) {
    return instance.post<ResponseType>(`auth/login`, data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
