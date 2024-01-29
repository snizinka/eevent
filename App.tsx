import { useCallback, useEffect, useState } from 'react';
import StackNavigation from './navigation/StackNavigation';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import SplashScreen from 'react-native-splash-screen';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState<boolean>()

  useEffect(() => {
    console.log('Called')
    setLoading(true)
    async function isUserAuthenticated() {
      let response = await GoogleSignin.isSignedIn()
      setIsAuthenticated(response)
      setLoading(!response)
      console.log(!response)
    }
    isUserAuthenticated()
  }, [])

  if (!loading) {
    SplashScreen.hide();
  }

  return <StackNavigation />
}