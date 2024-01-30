import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import StackNavigation from './StackNavigation';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IAuthState, setIsAuthenticated } from '../features/auth/authSlice';
import SplashScreen from 'react-native-splash-screen';
import configureGoogleServices from '../services/configureGoogleServicesService';
import { Dispatch } from '@reduxjs/toolkit';

export default function Navigation() {
  const dispatch: Dispatch = useDispatch()
  const isAuthenticated = useSelector<IAuthState>(state => state.isAuthenticated)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    configureGoogleServices()

    async function isUserAuthenticated() {
      const response = await GoogleSignin.isSignedIn()
      dispatch(setIsAuthenticated(response))
      setLoading(false)
    }
    
    isUserAuthenticated()
  }, [])

  useEffect(() => {
    if (!loading) {
      SplashScreen.hide();
    }
  }, [loading])

  if (!loading && isAuthenticated) {
    return (
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    );
  }
  
  if (!loading && !isAuthenticated) {
    return (
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    );
  }
}