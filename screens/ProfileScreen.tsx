import React from 'react';
import { View, Text, Button } from 'react-native';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation.tsx";
import { useDispatch } from 'react-redux';
import { setIsAuthenticated, setUserInfo } from '../features/auth/authSlice.ts';

type Props = NativeStackScreenProps<RootStackParamList, 'SignInScreen'>

export default function ProfileScreen({ navigation }: Props) {
  const dispatch = useDispatch()

  const signOut = async () => {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut().then(() => {
      dispatch(setIsAuthenticated(false))
      dispatch(setUserInfo(null))
    });
  }

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title={'Logout'} onPress={async () => {
        await signOut();
      }} />
    </View>
  );
}
