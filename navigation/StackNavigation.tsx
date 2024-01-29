import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from '../screens/SignInScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../screens/SignUpWithEmailScreen';
import { useEffect, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import TabNavigation from './TabNavigation';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';

export type RootStackParamList = {
  SignInScreen: undefined;
  SignUpWithEmail: { email: string };
  TabNavigation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackNavigation() {
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
        <Stack.Navigator initialRouteName='SignInScreen' screenOptions={{ title: '' }}>
          <Stack.Screen name='SignInScreen' component={SignInScreen} />
          <Stack.Screen name='SignUpWithEmail' component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}