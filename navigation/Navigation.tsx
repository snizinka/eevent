import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import TabNavigation from './TabNavigation';
import StackNavigation from './StackNavigation';

export type RootStackParamList = {
  SignInScreen: undefined;
  SignUpWithEmail: { email: string };
  TabNavigation: undefined;
};

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function isUserAuthenticated() {
      let response = await GoogleSignin.isSignedIn()
      setIsAuthenticated(response)
      setLoading(prev => !prev)
    }
    isUserAuthenticated()
  }, [])

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