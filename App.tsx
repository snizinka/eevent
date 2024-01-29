import { useEffect, useState } from 'react';
import { ConfigureParams, GoogleSignin } from '@react-native-google-signin/google-signin';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './navigation/Navigation';

interface IExtendedConfigureParams extends ConfigureParams {
  androidClientId?: string;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  function initGoogleServices (): void {
    const configParams: IExtendedConfigureParams = {
      androidClientId: '685781511219-rm7t2g7j6mka9a1cdt3bd2oivo5njqm1.apps.googleusercontent.com',
    };
    GoogleSignin.configure(configParams);
  }

  useEffect(() => {
    initGoogleServices()
    setLoading(true)
    async function isUserAuthenticated() {
      let response = await GoogleSignin.isSignedIn()
      setIsAuthenticated(response)
      setLoading(false)
    }
    isUserAuthenticated()
  }, [])

  useEffect(() => {
    if (!loading) {
      console.log('hide')
      SplashScreen.hide();
    }
  }, [loading])

  return <Navigation isAuthenticated={isAuthenticated} loading={loading} />
}