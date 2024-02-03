import React from 'react';
import { Button } from '../components/Button'
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { TextInput } from '../components/TextInput'
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
import { AppDispatch } from '../store';
import { continueWithEmailStyles, googleSingInStyles, logoStyles, mainContainerStyles, singInStyles, usernameOrEmailInputStyles } from '../styles/SignInScreenStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'SignInScreen'>

function SignInScreen({ navigation }: Props): React.JSX.Element {
  const dispatch: AppDispatch = useDispatch()
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
                <Button onPress={async () => await _signIn()}>Continue with Apple</Button>
                <Button style={googleSingInStyles} onPress={async () => await _signIn()}>Continue with Google</Button>
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
                <Button style={continueWithEmailStyles} onPress={handleSubmit}>Continue with Email</Button>
              </View>
            </View>
          </View>
        </View>
      )}
    </Formik>
  )
}

export default SignInScreen;
