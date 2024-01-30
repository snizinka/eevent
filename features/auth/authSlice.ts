import { User } from '@react-native-google-signin/google-signin';
import { createSlice } from '@reduxjs/toolkit'

export interface IAuthState {
    isAuthenticated: boolean;
    userInfo: User | null;
}

const initialState: IAuthState = {
    isAuthenticated: false,
    userInfo: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated =  action.payload
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        }
    }
})

export const {setIsAuthenticated, setUserInfo} = authSlice.actions
export default authSlice.reducer