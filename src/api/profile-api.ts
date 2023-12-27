import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "abedc383-1acb-44b8-b20b-3c57769824c7",
  },
});

type OptionalParamType = null | string;

type ContactsType = {
  facebook: OptionalParamType;
  website: OptionalParamType;
  vk: OptionalParamType;
  twitter: OptionalParamType;
  instagram: OptionalParamType;
  youtube: OptionalParamType;
  github: OptionalParamType;
  mainLink: OptionalParamType;
};

export type UserProfileType = {
  aboutMe: string;
  contacts: ContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
};

export type ResponseType<D = {}> = {
  resultCode: number;
  messages: string[];
  fieldsErrors: string[];
  data: D;
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<UserProfileType>(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance.get<string>(`/profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put<ResponseType, AxiosResponse<ResponseType>, { status: string }>(`profile/status`, { status });
  },
};
