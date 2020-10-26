import axiosStatic from "axios";

export const inst = axiosStatic.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
});