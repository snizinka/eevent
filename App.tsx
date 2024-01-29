import { useEffect, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './navigation/Navigation';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    async function isUserAuthenticated() {
      let response = await GoogleSignin.isSignedIn()
      setIsAuthenticated(response)
      setLoading(!response)
    }
    isUserAuthenticated()
  }, [])

  if (!loading) {
    SplashScreen.hide();
  }

  return <Navigation isAuthenticated={isAuthenticated} loading={loading} />
}