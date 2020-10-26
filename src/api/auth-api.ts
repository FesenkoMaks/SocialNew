import {inst} from "./api";


export const authAPI = {
    authMe : () =>
        inst.get<ResponseType<authMeResponseDataType>>('auth/me'),
    login: (loginData: loginDataType) =>
        inst.post<ResponseType<{ userId: number }>>('auth/login', loginData),
    logout: () =>
        inst.delete<ResponseType<{}>>('auth/login'),
}

//Request Data Type

export type loginDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

//Response Data Type

type authMeResponseDataType = {
        id: number
        email: string
        login: string
}

export type ResponseType<T> = {
    resultCode: number
    messages: string[]
    data: T
}