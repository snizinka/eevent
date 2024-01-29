import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from '../screens/SignInScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../screens/SignUpWithEmailScreen';

export type RootStackParamList = {
  SignInScreen: undefined;
  SignUpWithEmail: { email: string };
  TabNavigation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignInScreen' screenOptions={{ title: '' }}>
          <Stack.Screen name='SignInScreen' component={SignInScreen} />
          <Stack.Screen name='SignUpWithEmail' component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}