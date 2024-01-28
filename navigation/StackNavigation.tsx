import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from '../screens/SignInScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../screens/SignUpWithEmailScreen';
import { useEffect, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigation from './TabNavigation';

export type RootStackParamList = {
  SignInScreen: undefined;
  SignUpWithEmail: { email: string };
  TabNavigation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator();

export default function StackNavigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    async function isUserAuthenticated() {
      let response = await GoogleSignin.isSignedIn()
      setIsAuthenticated(response)
    }
    isUserAuthenticated()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignInScreen' screenOptions={{ title: '' }}>
        <Stack.Screen name='SignInScreen' component={SignInScreen} />
        <Stack.Screen name='SignUpWithEmail' component={AboutScreen} />
        <Stack.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}