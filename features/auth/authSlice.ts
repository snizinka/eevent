import { User } from '@react-native-google-signin/google-signin';
import { createSlice } from '@reduxjs/toolkit'

export interface IAuthState {
    isAuthenticated: boolean;
    userInfo: User | null;
}

export interface ISetIsAuthenticatedAction {
    type: string,
    payload: boolean
}

export interface ISetUserInfoAction {
    type: string,
    payload: User | null
}

const initialState: IAuthState = {
    isAuthenticated: false,
    userInfo: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthenticated: (state: IAuthState, action: ISetIsAuthenticatedAction) => {
            state.isAuthenticated =  action.payload
        },
        setUserInfo: (state: IAuthState, action: ISetUserInfoAction) => {
            state.userInfo = action.payload
        }
    }
})

export const {setIsAuthenticated, setUserInfo} = authSlice.actions
export default authSlice.reducer