import React, { useState } from 'react';
import { SignInButton, IStyle } from '../components/SignInButton'
import {
  Text,
  useColorScheme,
  View,
  TextInput,
  ViewStyle,
  StyleSheet
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { CheckBox } from '@rneui/themed';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/StackNavigation';

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
          <SignInButton disabled={!aggreeWithPolicy} style={continueWithEmailStyles} onPress={() => navigation.navigate('TabNavigation')}>Create my account</SignInButton>
        </View>
      </View>
    </View>
  )
}

const mainContainerStyles = (isDarkMode: boolean): ViewStyle => {
  return {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  }
}

const logoStyles = StyleSheet.create({
  wrapper: {
    marginTop: 100
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20
  },
  email: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 20
  },
  inputSection: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20
  },
  privacyAndPolicyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#E6EBE5',
    padding: 10,
    width: '100%'
  },
  privacyAndPolicyText: {
    color: 'black',
    fontSize: 15,
    lineHeight: 22,
    backgroundColor: 'yellow',
  }
})

const singInStyles = StyleSheet.create({
  wrapper: { display: 'flex', flexDirection: 'column', rowGap: 10, marginBottom: 10 }
})

const googleSingInStyles: IStyle = {
  containerStyles: {
    borderColor: 'transparent',
    backgroundColor: '#5583EC',
  },
  contentStyles: {
    color: 'white',
    fontSize: 16
  }
}

const usernameOrEmailInputStyles: ViewStyle = {
  borderWidth: 1,
  borderColor: '#E4EBE4',
  borderStyle: 'solid',
  borderRadius: 10,
  height: 40,
  paddingHorizontal: 10
}

const continueWithEmailStyles: IStyle = {
  containerStyles: {
    borderColor: 'transparent',
    backgroundColor: '#4EA52F',
  },
  contentStyles: {
    color: 'white',
    fontSize: 15
  }
}

export default SignUpWithEmailScreen;
