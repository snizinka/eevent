import React from 'react';
import { View, Text, Button } from 'react-native';
import { ConfigureParams, GoogleSignin } from "@react-native-google-signin/google-signin";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation.tsx";

type Props = NativeStackScreenProps<RootStackParamList, 'SignInScreen'>
interface IExtendedConfigureParams extends ConfigureParams {
  androidClientId?: string;
}
export default function ProfileScreen({ navigation }: Props) {
  const signOut = async () => {
    const configParams: IExtendedConfigureParams = {
      androidClientId: '685781511219-rm7t2g7j6mka9a1cdt3bd2oivo5njqm1.apps.googleusercontent.com',
    };
    GoogleSignin.configure(configParams);
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut().then(
      () => {
        console.log('Signed out');

      },
      (error) => {
        console.error(error);
      },
    );
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
