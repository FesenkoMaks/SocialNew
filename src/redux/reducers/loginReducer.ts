import {Dispatch} from "react";
import {authAPI, loginDataType} from "../../api/auth-api";

const initialState = {
    isLoggedIn: false
}

type initialStateType = typeof initialState

export const loginReducer = (state: initialStateType = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN': {
            return {...state, isLoggedIn: action.value}
        }
    }
}

export const setIsLoggedInAC = (value: boolean) => ({type: 'LOGIN', value} as const)

// thunks
export const loginTC = (data: loginDataType) => (dispatch: Dispatch< any>) => {
    // dispatch(isFetchingAC(true))
    authAPI.login(data)
        .then(res => {
            // dispatch(isFetchingAC(false))
            if (res.status === 200) {
                dispatch(setIsLoggedInAC(true))
            } else {
                dispatch(setIsLoggedInAC(false))
            }
        })
}