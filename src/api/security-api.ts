import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "abedc383-1acb-44b8-b20b-3c57769824c7",
  },
});

type SecurityResponseType = {
  url: string;
};

export const securityAPI = {
  getCaptcha() {
    return instance.get<SecurityResponseType>("security/get-captcha-url");
  },
};
