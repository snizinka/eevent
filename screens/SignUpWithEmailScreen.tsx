import React, { useState } from 'react';
import { SignInButton } from '../components/SignInButton'
import {
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';
import { CheckBox } from '@rneui/themed';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/StackNavigation';
import { continueWithEmailStyles, logoStyles, mainContainerStyles, usernameOrEmailInputStyles } from '../styles/SignUpWithEmail';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUpWithEmail'>

function SignUpWithEmailScreen({ route, navigation }: Props): React.JSX.Element {
  const { email } = route.params
  const [aggreeWithPolicy, setAggreeWithPolicy] = useState<boolean>(false)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const isDarkMode = useColorScheme() === 'dark';

  const toggleCheckbox = () => setAggreeWithPolicy(!aggreeWithPolicy);

  return (
    <View
      style={mainContainerStyles(isDarkMode)}>
      <View style={logoStyles.wrapper}>
        <Text style={logoStyles.header}>Create a new account for free</Text>
        <Text style={logoStyles.email}>{email}</Text>
        <View style={logoStyles.inputSection}>
          <View>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First name"
              style={usernameOrEmailInputStyles}
            />
          </View>

          <View>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last name"
              style={usernameOrEmailInputStyles}
            />
          </View>

          <View>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Create a password"
              style={usernameOrEmailInputStyles}
              secureTextEntry={true}
            />
          </View>

          <View style={logoStyles.privacyAndPolicyWrapper}>
            <View>
              <CheckBox
                containerStyle={logoStyles.privacyAndPolicyWrapper}
                checked={aggreeWithPolicy}
                onPress={toggleCheckbox}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor="#4EA52E"
                title='Yes, I understand and agree to the єПодія Terms of Service, including the user Agreement and Privacy Policy.'
              ></CheckBox>
            </View>
          </View>
        </View>
      </View>
      <View style={{ paddingBottom: '10%', paddingTop: '10%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ display: 'flex', flexDirection: 'column', rowGap: 10, marginTop: 10 }}>
          <SignInButton disabled={!aggreeWithPolicy} style={continueWithEmailStyles} onPress={() => {}}>Create my account</SignInButton>
        </View>
      </View>
    </View>
  )
}

export default SignUpWithEmailScreen;
