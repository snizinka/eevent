import React from 'react';
import { SignInButton, IStyle } from '../components/SignInButton'
import {
  Text,
  useColorScheme,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import { TextInput } from '../components/TextInput'
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {
  GoogleSignin, User,
} from '@react-native-google-signin/google-signin';
import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/StackNavigation';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated, setUserInfo } from '../features/auth/authSlice';
import { Dispatch } from '@reduxjs/toolkit';

type Props = NativeStackScreenProps<RootStackParamList, 'SignInScreen'>

function SignInScreen({ navigation }: Props): React.JSX.Element {
  const dispatch: Dispatch = useDispatch()
  const isDarkMode = useColorScheme() === 'dark';
  const [state, setState] = useState<User>()
  const [email, setEmail] = useState<string>('')
  
  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo: User = await GoogleSignin.signIn();
      setState(userInfo)
      dispatch(setIsAuthenticated(true))
      dispatch(setUserInfo(userInfo))
      console.log(userInfo)
    } catch (error) {
      console.log(error)
    }
  }

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
  })

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={loginValidationSchema}
      onSubmit={() => {
        console.log(typeof navigation)
        navigation.navigate('SignUpWithEmail', { email: email })
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View
          style={mainContainerStyles(isDarkMode)}>
          <View style={logoStyles.wrapper}>
            <Text style={logoStyles.header}>єПодія</Text>
          </View>
          <View style={{ paddingBottom: '10%', paddingTop: '10%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
              <View style={singInStyles.wrapper}>
                <SignInButton onPress={async () => await _signIn()}>Continue with Apple</SignInButton>
                <SignInButton style={googleSingInStyles} onPress={async () => await _signIn()}>Continue with Google</SignInButton>
              </View>
              <View><Text style={{ textAlign: 'center', fontSize: 15 }}>Or</Text></View>
              <View style={{ display: 'flex', flexDirection: 'column', rowGap: 10, marginTop: 10 }}>
                <View>
                  <TextInput
                    name="email"
                    onChangeText={handleChange('email')}
                    value={values.email}
                    placeholder="Username or Email"
                    style={usernameOrEmailInputStyles}
                  />
                  <Text style={logoStyles.error}>{(errors.email) ?? ''}</Text>
                </View>
                <SignInButton style={continueWithEmailStyles} onPress={handleSubmit}>Continue with Email</SignInButton>
              </View>
            </View>
          </View>
        </View>
      )}
    </Formik>
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
    fontSize: 50,
    fontWeight: '700',
    color: 'black'
  },
  error: {
    color: 'red'
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
  height: 40
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

export default SignInScreen;
